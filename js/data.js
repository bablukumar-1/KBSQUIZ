// ======================= STATIC DATABASE =======================
        const categories = ["All", "Language", "Framework", "Tool", "Aptitude", "English"];
        
        const rawSubjects = [
            // Language
            {cat:"Language", name:"JavaScript", icon:"🟨"}, {cat:"Language", name:"Python", icon:"🐍"},
            {cat:"Language", name:"Java", icon:"☕"}, {cat:"Language", name:"C++", icon:"⚙️"},
            {cat:"Language", name:"C#", icon:"🎯"}, {cat:"Language", name:"TypeScript", icon:"📘"},
            {cat:"Language", name:"Go", icon:"🐹"}, {cat:"Language", name:"Rust", icon:"🦀"},
            {cat:"Language", name:"Ruby", icon:"💎"}, {cat:"Language", name:"PHP", icon:"🐘"},
            {cat:"Language", name:"Swift", icon:"🍎"}, {cat:"Language", name:"Kotlin", icon:"🟣"},
            // Framework
            {cat:"Framework", name:"React", icon:"⚛️"}, {cat:"Framework", name:"Angular", icon:"🅰️"},
            {cat:"Framework", name:"Vue.js", icon:"🟩"}, {cat:"Framework", name:"Node.js", icon:"🟢"},
            {cat:"Framework", name:"Django", icon:"🎸"}, {cat:"Framework", name:"Spring Boot", icon:"🍃"},
            {cat:"Framework", name:"Next.js", icon:"⏭️"}, {cat:"Framework", name:"Express", icon:"🚂"},
            {cat:"Framework", name:"Laravel", icon:"🧱"}, {cat:"Framework", name:"Flutter", icon:"🦋"},
            // Tool
            {cat:"Tool", name:"Git", icon:"🔀"}, {cat:"Tool", name:"Docker", icon:"🐋"},
            {cat:"Tool", name:"Kubernetes", icon:"☸️"}, {cat:"Tool", name:"Jenkins", icon:"☕️"},
            {cat:"Tool", name:"AWS", icon:"☁️"}, {cat:"Tool", name:"Linux", icon:"🐧"},
            {cat:"Tool", name:"SQL", icon:"🗄️"}, {cat:"Tool", name:"MongoDB", icon:"🍃"},
            {cat:"Tool", name:"Redis", icon:"🟥"},
            // Aptitude
            {cat:"Aptitude", name:"Quantitative Aptitude", icon:"📈"}, {cat:"Aptitude", name:"Logical Reasoning", icon:"🧩"},
            {cat:"Aptitude", name:"Data Interpretation", icon:"📊"}, {cat:"Aptitude", name:"Verbal Reasoning", icon:"🗣️"},
            // English
            {cat:"English", name:"Grammar", icon:"📝"}, {cat:"English", name:"Vocabulary", icon:"📖"},
            {cat:"English", name:"Reading Comprehension", icon:"👁️"}, {cat:"English", name:"Communications", icon:"💬"}
        ];

        // Fallback Question Bank
        const fallbackQuestions = [
            { q: "What is the primary function of this subject concept?", opts: ["Core Analysis", "Basic Process", "Advanced Execution", "Random Data"], ans: 1 },
            { q: "Which tool is commonly associated with this field?", opts: ["Scalpel", "Compass", "Algorithm", "Standard Metric"], ans: 3 },
            { q: "When was the major breakthrough in this domain achieved?", opts: ["1920", "1995", "2005", "1850"], ans: 1 },
            { q: "What is the standard unit of measurement here?", opts: ["Bytes", "Meters", "Units", "Degrees"], ans: 2 },
            { q: "Identify the incorrect statement.", opts: ["A is true", "B is false but accepted", "C is entirely false", "D is correct"], ans: 2 },
            { q: "What is a major challenge in this area?", opts: ["Speed", "Scalability", "Complexity", "All of the above"], ans: 3 },
            { q: "Who is considered a pioneer in this field?", opts: ["Newton", "Turing", "Edison", "Smith"], ans: 0 },
            { q: "Which format is widely used?", opts: ["Format X", "Format Y", "Format Z", "None of these"], ans: 0 }
        ];

        // Specific sample questions for Computer/Web Dev to show uniqueness if needed, otherwise fallback.
        const specificQuestions = {
            "Web Development": [
                { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "Hyperlinks and Text", "Home Tool Markup", "none"], ans: 0 },
                { q: "What does CSS stand for?", opts: ["Computer Style", "Cascading Style Sheets", "Creative Style", "Colorful Style"], ans: 1 },
                { q: "Choose the correct HTML tag for the largest heading:", opts: ["<heading>", "<h6>", "<head>", "<h1>"], ans: 3 },
                { q: "Inside which HTML element do we put the JavaScript?", opts: ["<script>", "<javascript>", "<js>", "<scripting>"], ans: 0 },
                { q: "How do you write 'Hello World' in an alert box?", opts: ["msg('Hello')", "alertBox('Hello')", "alert('Hello World')", "msgBox()"], ans: 2 }
            ]
        }

        // ======================= APP LOGIC =======================

        // Router
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(el => {
                el.classList.remove('active');
            });
            document.getElementById('page-' + pageId).classList.add('active');
            
            // Nav Highlighting
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            const navLink = document.getElementById('nav-' + pageId);
            if(navLink) navLink.classList.add('active');
            
            window.scrollTo(0,0);
        }

        // Home Page Generator
        function initHome() {
            document.getElementById('stat-subjects').textContent = rawSubjects.length;
            document.getElementById('badge-subjects').textContent = rawSubjects.length + " Subjects";

            const filtersEl = document.getElementById('subject-filters');
            filtersEl.innerHTML = '';
            categories.forEach(cat => {
                const b = document.createElement('button');
                b.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
                b.textContent = cat;
                b.onclick = () => filterGrid(cat, b);
                filtersEl.appendChild(b);
            });
            filterGrid('All');
        }

        function filterGrid(cat, btnEl = null) {
            if(btnEl) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btnEl.classList.add('active');
            } else {
                // If triggered via footer link
                Array.from(document.querySelectorAll('.filter-btn')).forEach(b => {
                    if(b.textContent === cat) b.classList.add('active');
                    else b.classList.remove('active');
                });
            }

            const grid = document.getElementById('subjects-grid');
            grid.innerHTML = '';
            
            const filtered = cat === 'All' ? rawSubjects : rawSubjects.filter(s => s.cat === cat);
            
            filtered.forEach((sub, i) => {
                const card = document.createElement('div');
                card.className = 'subject-card hover-card';
                card.onclick = () => jumpToPractice(sub.name);
                
                // Add hot badge to first few
                const badge = (i%7===0) ? '<span class="badge-hot">HOT</span>' : '';
                
                card.innerHTML = `
                    ${badge}
                    <div class="icon">${sub.icon}</div>
                    <div class="details">
                        <h4>${sub.name}</h4>
                        <p class="text-muted" style="font-size:0.8rem;">${Math.floor(Math.random()*500 + 100)} Questions</p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function jumpToPractice(subjectName) {
            showPage('practice');
            const select = document.getElementById('setup-subject');
            for(let i=0; i<select.options.length; i++){
                if(select.options[i].value === subjectName) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }

        // Practice Setup Population
        function initPractice() {
            const select = document.getElementById('setup-subject');
            select.innerHTML = '';
            rawSubjects.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.name; opt.textContent = s.name;
                select.appendChild(opt);
            });
        }