// ======================= QUIZ ENGINE =======================
let quizState = {
            questions: [],
            currIdx: 0,
            correct: 0,
            wrong: 0,
            timer: null,
            timeRem: 1800,
            timeElapsed: 0
        };

        const engineViews = {
            setup: document.getElementById('practice-setup'),
            quiz: document.getElementById('practice-engine'),
            result: document.getElementById('practice-result')
        };

        function switchPracticeView(viewName) {
            engineViews.setup.style.display = 'none';
            engineViews.quiz.style.display = 'none';
            engineViews.result.style.display = 'none';
            engineViews[viewName].style.display = 'block';
        }

        function startQuiz() {
            const subject = document.getElementById('setup-subject').value;
            const mode = document.getElementById('setup-mode').value;
            let qCount = parseInt(document.getElementById('setup-count').value);
            
            // Build Question Array
            let pool = specificQuestions[subject] ? [...specificQuestions[subject]] : [...fallbackQuestions];
            pool.sort(() => Math.random() - 0.5); // shuffle
            
            // Generate extra mocked questions if requested count > pool
            while(pool.length < qCount) {
                pool.push({
                    q: `Advanced mocked question regarding ${subject} - Segment ${pool.length}`,
                    opts: ["Alpha", "Beta", "Gamma", "Delta"],
                    ans: Math.floor(Math.random() * 4)
                });
            }
            
            quizState.questions = pool.slice(0, qCount);
            quizState.currIdx = 0;
            quizState.correct = 0;
            quizState.wrong = 0;
            quizState.timeElapsed = 0;

            document.getElementById('engine-subject').textContent = subject;
            
            // Timer logic
            clearInterval(quizState.timer);
            if(mode === 'Practice') {
                document.getElementById('engine-timer').textContent = "⏳ 00:00";
                quizState.timer = setInterval(() => {
                    quizState.timeElapsed++;
                    const m = Math.floor(quizState.timeElapsed / 60).toString().padStart(2, '0');
                    const s = (quizState.timeElapsed % 60).toString().padStart(2, '0');
                    document.getElementById('engine-timer').textContent = `⏳ ${m}:${s}`;
                }, 1000);
            } else {
                quizState.timeRem = qCount * 60; // 1 min per question
                updateTimerUI();
                quizState.timer = setInterval(() => {
                    quizState.timeRem--;
                    quizState.timeElapsed++;
                    updateTimerUI();
                    if(quizState.timeRem <= 0) {
                        clearInterval(quizState.timer);
                        showResults();
                        showToast("Time's Up!");
                    }
                }, 1000);
            }

            switchPracticeView('quiz');
            renderQuestion();
            showToast(`${mode} Test Started!`);
        }

        function updateTimerUI() {
            const m = Math.floor(quizState.timeRem / 60).toString().padStart(2, '0');
            const s = (quizState.timeRem % 60).toString().padStart(2, '0');
            document.getElementById('engine-timer').textContent = `⏳ ${m}:${s}`;
        }

        function renderQuestion() {
            const qObj = quizState.questions[quizState.currIdx];
            const total = quizState.questions.length;
            const current = quizState.currIdx + 1;

            document.getElementById('engine-counter').textContent = `Question ${current}/${total}`;
            document.getElementById('engine-bar').style.width = `${(current/total)*100}%`;
            
            document.getElementById('engine-question').textContent = qObj.q;
            document.getElementById('engine-status').textContent = `Pending Answers`;
            
            const btnNext = document.getElementById('engine-next');
            btnNext.disabled = true;
            btnNext.textContent = current === total ? "Submit Test" : "Next Question";

            const optionsContainer = document.getElementById('engine-options');
            optionsContainer.innerHTML = '';
            optionsContainer.removeAttribute('data-answered');

            const labels = ["A", "B", "C", "D"];
            
            qObj.opts.forEach((optText, i) => {
                const optEl = document.createElement('div');
                optEl.className = 'option-card';
                
                const labelSpan = document.createElement('span');
                labelSpan.className = 'opt-label';
                labelSpan.textContent = labels[i];
                
                const textSpan = document.createElement('span');
                textSpan.textContent = optText;
                
                optEl.appendChild(labelSpan);
                optEl.appendChild(textSpan);
                
                optEl.onclick = () => handleAnswer(i, optEl, qObj.ans);
                optionsContainer.appendChild(optEl);
            });
        }

        function handleAnswer(selectedIndex, optEl, correctIdx) {
            const container = document.getElementById('engine-options');
            
            const allOpts = Array.from(container.children);
            allOpts.forEach(el => el.classList.remove('selected'));
            optEl.classList.add('selected');
            
            quizState.questions[quizState.currIdx].userAns = selectedIndex;

            document.getElementById('engine-status').textContent = `Option Selected`;
            document.getElementById('engine-next').disabled = false;
        }

        function nextQuestion(skipped = false) {
            const qObj = quizState.questions[quizState.currIdx];
            
            if(skipped) {
                quizState.wrong++;
            } else {
                if (qObj.userAns === qObj.ans) {
                    quizState.correct++;
                } else {
                    quizState.wrong++;
                }
            }

            quizState.currIdx++;
            if(quizState.currIdx < quizState.questions.length) {
                renderQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            clearInterval(quizState.timer);
            switchPracticeView('result');
            
            const total = quizState.questions.length;
            const perc = Math.round((quizState.correct / total) * 100);
            
            const m = Math.floor(quizState.timeElapsed / 60).toString().padStart(2, '0');
            const s = (quizState.timeElapsed % 60).toString().padStart(2, '0');
            const timeStr = `${m}:${s}`;

            document.getElementById('result-score').textContent = `${perc}%`;
            document.getElementById('res-total').textContent = total;
            document.getElementById('res-correct').textContent = quizState.correct;
            document.getElementById('res-wrong').textContent = quizState.wrong;
            document.getElementById('res-time').textContent = timeStr;
            
            // Add a mock row to history
            const tbody = document.querySelector('.history-table tbody');
            const row = document.createElement('tr');
            const modeScoreClass = perc > 70 ? 'score-good' : (perc > 50 ? 'score-avg' : 'score-bad');
            
            row.innerHTML = `
                <td>${document.getElementById('setup-subject').value}</td>
                <td>${total}</td>
                <td><span class="score-badge ${modeScoreClass}">${perc}%</span></td>
                <td>${timeStr}</td>
                <td>Just Now</td>
            `;
            tbody.insertBefore(row, tbody.firstChild);
        }

        function resetPractice() {
            switchPracticeView('setup');
            window.scrollTo(0,0);
        }

        // ======================= CONTACT FORM =======================
        function handleContactSubmit(e) {
            e.preventDefault();
            e.target.reset();
            showToast("Success! Your message was sent.");
        }

        // ======================= TOAST UI & THEME =======================
        function showToast(msg) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = msg;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 500);
            }, 3000);
        }

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            document.getElementById('theme-btn').textContent = isLight ? "🌙" : "☀️";
        }

        // Bootsrap Application
        window.onload = function() {
            initHome();
            initPractice();
            showPage('home'); // Entry Point
        }