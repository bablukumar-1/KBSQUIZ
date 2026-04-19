// DOM Elements
const views = {
  subject: document.getElementById('subject-view'),
  quiz: document.getElementById('quiz-view'),
  result: document.getElementById('result-view')
};

const elements = {
  subjectGrid: document.getElementById('subject-grid'),
  quizSubjectTitle: document.getElementById('quiz-subject-title'),
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  nextBtn: document.getElementById('next-btn'),
  finalScore: document.getElementById('final-score'),
  totalQuestions: document.getElementById('total-questions'),
  homeBtn: document.getElementById('home-btn')
};

// Application State
let currentState = {
  subject: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0
};

// Initialization
function init() {
  renderSubjectGrid();
  
  elements.nextBtn.addEventListener('click', handleNextQuestion);
  elements.homeBtn.addEventListener('click', () => switchView('subject'));
}

// Switch between views
function switchView(viewName) {
  Object.values(views).forEach(view => {
    view.classList.remove('active');
    view.classList.add('hidden');
  });
  
  views[viewName].classList.remove('hidden');
  views[viewName].classList.add('active');
}

// Render dynamic subject grid
function renderSubjectGrid() {
  const subjects = Object.keys(quizData);
  elements.subjectGrid.innerHTML = '';

  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-icon">${subjectIcons[subject]}</div>
      <h3>${subject}</h3>
    `;
    card.addEventListener('click', () => startQuiz(subject));
    elements.subjectGrid.appendChild(card);
  });
}

// Start Quiz for specific subject
function startQuiz(subjectName) {
  currentState.subject = subjectName;
  currentState.questions = quizData[subjectName];
  currentState.currentQuestionIndex = 0;
  currentState.score = 0;

  elements.quizSubjectTitle.textContent = subjectName;
  switchView('quiz');
  renderQuestion();
}

// Render current question
function renderQuestion() {
  const question = currentState.questions[currentState.currentQuestionIndex];
  const total = currentState.questions.length;
  const current = currentState.currentQuestionIndex + 1;

  // Update Progress
  elements.progressText.textContent = `Question ${current}/${total}`;
  elements.progressBar.style.width = `${(current / total) * 100}%`;

  // Update Text
  elements.questionText.textContent = question.question;
  elements.optionsContainer.innerHTML = '';
  elements.nextBtn.classList.add('hidden');

  // Render Options
  question.options.forEach((optionText, index) => {
    const optionEl = document.createElement('div');
    optionEl.className = 'option';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = optionText;
    
    const indicatorSpan = document.createElement('span');
    indicatorSpan.className = 'indicator';
    
    optionEl.appendChild(textSpan);
    optionEl.appendChild(indicatorSpan);
    
    optionEl.addEventListener('click', () => handleOptionSelect(index, optionEl));
    elements.optionsContainer.appendChild(optionEl);
  });
}

// Handle answer selection
function handleOptionSelect(selectedIndex, optionElement) {
  // Prevent selecting multiple options
  if (elements.optionsContainer.classList.contains('answered')) return;
  elements.optionsContainer.classList.add('answered');

  const question = currentState.questions[currentState.currentQuestionIndex];
  const isCorrect = selectedIndex === question.answer;

  const allOptions = Array.from(elements.optionsContainer.children);
  
  // Disable all options
  allOptions.forEach(opt => opt.classList.add('disabled'));

  // Mark correct/incorrect
  if (isCorrect) {
    currentState.score++;
    optionElement.classList.add('correct');
    optionElement.querySelector('.indicator').textContent = '✓';
  } else {
    optionElement.classList.add('incorrect');
    optionElement.querySelector('.indicator').textContent = '✗';
    // Highlight the correct one
    const correctOption = allOptions[question.answer];
    correctOption.classList.add('correct');
    correctOption.querySelector('.indicator').textContent = '✓';
  }

  // Show Next Button
  elements.nextBtn.classList.remove('hidden');
}

// Handle "Next" click
function handleNextQuestion() {
  elements.optionsContainer.classList.remove('answered');
  currentState.currentQuestionIndex++;

  if (currentState.currentQuestionIndex < currentState.questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// Show Result View
function showResult() {
  elements.finalScore.textContent = currentState.score;
  elements.totalQuestions.textContent = currentState.questions.length;
  switchView('result');
}

// Boot application
init();
