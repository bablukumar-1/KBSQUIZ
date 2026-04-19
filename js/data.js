const quizData = {
  "HTML": [
    { question: "What does HTML stand for?", options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Tool Multi Language", "Hyperlink and Text Markup Language"], answer: 1 },
    { question: "Which tag is used for the largest heading in HTML?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: 2 },
    { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["alt", "title", "src", "href"], answer: 0 },
    { question: "How can you make a numbered list?", options: ["<ul>", "<list>", "<dl>", "<ol>"], answer: 3 },
    { question: "Which HTML element defines navigation links?", options: ["<nav>", "<navigate>", "<navigation>", "<navlinks>"], answer: 0 }
  ],
  "CSS": [
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2 },
    { question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "bg-color"], answer: 2 },
    { question: "How do you select an element with id 'demo'?", options: [".demo", "#demo", "demo", "*demo"], answer: 1 },
    { question: "How do you make the text bold?", options: ["font: bold;", "font-weight: bold;", "style: bold;", "text-decoration: bold;"], answer: 1 },
    { question: "Which property is used to change the text color of an element?", options: ["text-color", "font-color", "color", "fgcolor"], answer: 2 }
  ],
  "JavaScript": [
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<script>", "<js>", "<javascript>", "<scripting>"], answer: 0 },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"], answer: 3 },
    { question: "How to write an IF statement in JavaScript?", options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"], answer: 2 },
    { question: "How does a FOR loop start?", options: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"], answer: 3 },
    { question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onmouseover", "onmouseclick", "onclick"], answer: 3 }
  ],
  "Bootstrap": [
    { question: "Which class provides a responsive fixed width container?", options: [".container-fixed", ".container-fluid", ".container", ".container-responsive"], answer: 2 },
    { question: "Which class is used to create a basic button in Bootstrap?", options: [".button", ".btn-basic", ".btn", ".btn-default"], answer: 2 },
    { question: "What is the grid system based on in Bootstrap?", options: ["Flexbox", "Floats", "CSS Grid", "Tables"], answer: 0 },
    { question: "Which class indicates a successful or positive action?", options: [".bg-success", ".bg-primary", ".bg-info", ".bg-warning"], answer: 0 },
    { question: "How many columns does the Bootstrap grid system have by default?", options: ["10", "12", "14", "16"], answer: 1 }
  ],
  "React": [
    { question: "What is React mainly used for?", options: ["Building databases", "Building User Interfaces", "Routing", "API development"], answer: 1 },
    { question: "Which method is used to render a React element to the DOM?", options: ["ReactDOM.render()", "React.render()", "ReactDOM.mount()", "React.mount()"], answer: 0 },
    { question: "What is a state in React?", options: ["A permanent storage", "An external library", "Internal data store of a component", "A CSS file"], answer: 2 },
    { question: "What are props in React?", options: ["Methods in React", "Arguments passed into React components", "Internal state", "HTML tags"], answer: 1 },
    { question: "Which hook is used to perform side effects in a functional component?", options: ["useState", "useContext", "useEffect", "useReducer"], answer: 2 }
  ],
  "Angular": [
    { question: "What language is Angular primarily written in?", options: ["JavaScript", "Dart", "TypeScript", "Python"], answer: 2 },
    { question: "Which directive initializes an Angular application?", options: ["ng-app", "ng-init", "ng-start", "ng-controller"], answer: 0 },
    { question: "What is used to bind application data to the HTML view in Angular?", options: ["Event Binding", "Two-way Data Binding", "Property Binding", "Data Binding Expressions {{ }}"], answer: 3 },
    { question: "Which command generates a new component using Angular CLI?", options: ["ng create component", "ng generate component", "ng new component", "ng make component"], answer: 1 },
    { question: "What decorator is used to define an Angular module?", options: ["@Module", "@Component", "@NgModule", "@Injectable"], answer: 2 }
  ],
  "Git & GitHub": [
    { question: "Which command is used to initialize a new Git repository?", options: ["git commit", "git init", "git start", "git add"], answer: 1 },
    { question: "How do you check the state of your working directory and staging area?", options: ["git status", "git log", "git check", "git state"], answer: 0 },
    { question: "Which command adds all modified files to the staging area?", options: ["git add all", "git add .", "git commit -a", "git stage *"], answer: 1 },
    { question: "What does 'git push' do?", options: ["Downloads code from a remote repo", "Uploads local repository content to a remote repo", "Creates a new branch", "Merges branches"], answer: 1 },
    { question: "What is a Pull Request on GitHub?", options: ["A way to download code", "A command line tool", "A request to merge code into a repository", "A bug report"], answer: 2 }
  ],
  "SQL": [
    { question: "What does SQL stand for?", options: ["Structured Question Language", "Strong Question Language", "Structured Query Language", "Simple Query Language"], answer: 2 },
    { question: "Which SQL statement is used to extract data from a database?", options: ["EXTRACT", "SELECT", "GET", "OPEN"], answer: 1 },
    { question: "Which SQL statement is used to update data in a database?", options: ["MODIFY", "SAVE", "UPDATE", "SAVE AS"], answer: 2 },
    { question: "Which SQL statement is used to delete data from a database?", options: ["REMOVE", "COLLAPSE", "DELETE", "DROP"], answer: 2 },
    { question: "Which SQL statement is used to insert new data in a database?", options: ["ADD NEW", "INSERT INTO", "ADD RECORD", "INSERT NEW"], answer: 1 }
  ],
  "English": [
    { question: "Which is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: 2 },
    { question: "Identify the noun in the sentence: 'The quick brown fox jumps over the lazy dog.'", options: ["quick", "brown", "jumps", "fox"], answer: 3 },
    { question: "Choose the correct spelling:", options: ["Accommodate", "Acommodate", "Accomodate", "Acomodate"], answer: 0 },
    { question: "What is the antonym of 'expand'?", options: ["Grow", "Increase", "Contract", "Enlarge"], answer: 2 },
    { question: "Find the preposition: 'The cat sat on the mat.'", options: ["cat", "sat", "on", "mat"], answer: 2 }
  ],
  "Reasoning": [
    { question: "Look at this series: 2, 4, 6, 8... What number should come next?", options: ["9", "10", "11", "12"], answer: 1 },
    { question: "If RED is coded as 27, then how is GREEN coded?", options: ["48", "49", "50", "51"], answer: 1 },
    { question: "Find the odd one out.", options: ["Apple", "Banana", "Carrot", "Mango"], answer: 2 },
    { question: "A is the brother of B. B is the sister of C. How is A related to C?", options: ["Brother", "Sister", "Cousin", "Father"], answer: 0 },
    { question: "If you walk 5km North, then turn Right and walk 5km, which direction are you facing?", options: ["North", "South", "East", "West"], answer: 2 }
  ]
};

// Icons mapping for subjects (Unicode characters or simple emojis)
const subjectIcons = {
  "HTML": "🌐",
  "CSS": "🎨",
  "JavaScript": "⚡",
  "Bootstrap": "🅱️",
  "React": "⚛️",
  "Angular": "🅰️",
  "Git & GitHub": "🐙",
  "SQL": "🗄️",
  "English": "📚",
  "Reasoning": "🧠"
};
