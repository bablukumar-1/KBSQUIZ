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
    "HTML": [
        {
            q: "What does HTML stand for?",
            opts: [
                "Hyper Text Preprocessor",
                "Hyper Text Markup Language",
                "Hyper Tool Multi Language",
                "Hyperlink and Text Markup Language"
            ],
            ans: 1
        },
        {
            q: "Which tag is used for the largest heading in HTML?",
            opts: [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            ans: 2
        },
        {
            q: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            opts: [
                "alt",
                "title",
                "src",
                "href"
            ],
            ans: 0
        },
        {
            q: "How can you make a numbered list?",
            opts: [
                "<ul>",
                "<list>",
                "<dl>",
                "<ol>"
            ],
            ans: 3
        },
        {
            q: "Which HTML element defines navigation links?",
            opts: [
                "<nav>",
                "<navigate>",
                "<navigation>",
                "<navlinks>"
            ],
            ans: 0
        }
    ],
    "CSS": [
        {
            q: "What does CSS stand for?",
            opts: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            ans: 2
        },
        {
            q: "Which property is used to change the background color?",
            opts: [
                "color",
                "bgcolor",
                "background-color",
                "bg-color"
            ],
            ans: 2
        },
        {
            q: "How do you select an element with id 'demo'?",
            opts: [
                ".demo",
                "#demo",
                "demo",
                "*demo"
            ],
            ans: 1
        },
        {
            q: "How do you make the text bold?",
            opts: [
                "font: bold;",
                "font-weight: bold;",
                "style: bold;",
                "text-decoration: bold;"
            ],
            ans: 1
        },
        {
            q: "Which property is used to change the text color of an element?",
            opts: [
                "text-color",
                "font-color",
                "color",
                "fgcolor"
            ],
            ans: 2
        }
    ],
    "JavaScript": [
        {
            q: "Inside which HTML element do we put the JavaScript?",
            opts: [
                "<script>",
                "<js>",
                "<javascript>",
                "<scripting>"
            ],
            ans: 0
        },
        {
            q: "How do you write 'Hello World' in an alert box?",
            opts: [
                "msg('Hello World');",
                "alertBox('Hello World');",
                "msgBox('Hello World');",
                "alert('Hello World');"
            ],
            ans: 3
        },
        {
            q: "How to write an IF statement in JavaScript?",
            opts: [
                "if i = 5",
                "if i == 5 then",
                "if (i == 5)",
                "if i = 5 then"
            ],
            ans: 2
        },
        {
            q: "How does a FOR loop start?",
            opts: [
                "for (i = 0; i <= 5)",
                "for (i <= 5; i++)",
                "for i = 1 to 5",
                "for (i = 0; i <= 5; i++)"
            ],
            ans: 3
        },
        {
            q: "Which event occurs when the user clicks on an HTML element?",
            opts: [
                "onchange",
                "onmouseover",
                "onmouseclick",
                "onclick"
            ],
            ans: 3
        }
    ],
    "Bootstrap": [
        {
            q: "Which class provides a responsive fixed width container?",
            opts: [
                ".container-fixed",
                ".container-fluid",
                ".container",
                ".container-responsive"
            ],
            ans: 2
        },
        {
            q: "Which class is used to create a basic button in Bootstrap?",
            opts: [
                ".button",
                ".btn-basic",
                ".btn",
                ".btn-default"
            ],
            ans: 2
        },
        {
            q: "What is the grid system based on in Bootstrap?",
            opts: [
                "Flexbox",
                "Floats",
                "CSS Grid",
                "Tables"
            ],
            ans: 0
        },
        {
            q: "Which class indicates a successful or positive action?",
            opts: [
                ".bg-success",
                ".bg-primary",
                ".bg-info",
                ".bg-warning"
            ],
            ans: 0
        },
        {
            q: "How many columns does the Bootstrap grid system have by default?",
            opts: [
                "10",
                "12",
                "14",
                "16"
            ],
            ans: 1
        }
    ],
    "React": [
        {
            q: "What is React mainly used for?",
            opts: [
                "Building databases",
                "Building User Interfaces",
                "Routing",
                "API development"
            ],
            ans: 1
        },
        {
            q: "Which method is used to render a React element to the DOM?",
            opts: [
                "ReactDOM.render()",
                "React.render()",
                "ReactDOM.mount()",
                "React.mount()"
            ],
            ans: 0
        },
        {
            q: "What is a state in React?",
            opts: [
                "A permanent storage",
                "An external library",
                "Internal data store of a component",
                "A CSS file"
            ],
            ans: 2
        },
        {
            q: "What are props in React?",
            opts: [
                "Methods in React",
                "Arguments passed into React components",
                "Internal state",
                "HTML tags"
            ],
            ans: 1
        },
        {
            q: "Which hook is used to perform side effects in a functional component?",
            opts: [
                "useState",
                "useContext",
                "useEffect",
                "useReducer"
            ],
            ans: 2
        }
    ],
    "Angular": [
        {
            q: "What language is Angular primarily written in?",
            opts: [
                "JavaScript",
                "Dart",
                "TypeScript",
                "Python"
            ],
            ans: 2
        },
        {
            q: "Which directive initializes an Angular application?",
            opts: [
                "ng-app",
                "ng-init",
                "ng-start",
                "ng-controller"
            ],
            ans: 0
        },
        {
            q: "What is used to bind application data to the HTML view in Angular?",
            opts: [
                "Event Binding",
                "Two-way Data Binding",
                "Property Binding",
                "Data Binding Expressions {{ }}"
            ],
            ans: 3
        },
        {
            q: "Which command generates a new component using Angular CLI?",
            opts: [
                "ng create component",
                "ng generate component",
                "ng new component",
                "ng make component"
            ],
            ans: 1
        },
        {
            q: "What decorator is used to define an Angular module?",
            opts: [
                "@Module",
                "@Component",
                "@NgModule",
                "@Injectable"
            ],
            ans: 2
        }
    ],
    "Git & GitHub": [
        {
            q: "Which command is used to initialize a new Git repository?",
            opts: [
                "git commit",
                "git init",
                "git start",
                "git add"
            ],
            ans: 1
        },
        {
            q: "How do you check the state of your working directory and staging area?",
            opts: [
                "git status",
                "git log",
                "git check",
                "git state"
            ],
            ans: 0
        },
        {
            q: "Which command adds all modified files to the staging area?",
            opts: [
                "git add all",
                "git add .",
                "git commit -a",
                "git stage *"
            ],
            ans: 1
        },
        {
            q: "What does 'git push' do?",
            opts: [
                "Downloads code from a remote repo",
                "Uploads local repository content to a remote repo",
                "Creates a new branch",
                "Merges branches"
            ],
            ans: 1
        },
        {
            q: "What is a Pull Request on GitHub?",
            opts: [
                "A way to download code",
                "A command line tool",
                "A request to merge code into a repository",
                "A bug report"
            ],
            ans: 2
        }
    ],
    "SQL": [
        {
            q: "What does SQL stand for?",
            opts: [
                "Structured Question Language",
                "Strong Question Language",
                "Structured Query Language",
                "Simple Query Language"
            ],
            ans: 2
        },
        {
            q: "Which SQL statement is used to extract data from a database?",
            opts: [
                "EXTRACT",
                "SELECT",
                "GET",
                "OPEN"
            ],
            ans: 1
        },
        {
            q: "Which SQL statement is used to update data in a database?",
            opts: [
                "MODIFY",
                "SAVE",
                "UPDATE",
                "SAVE AS"
            ],
            ans: 2
        },
        {
            q: "Which SQL statement is used to delete data from a database?",
            opts: [
                "REMOVE",
                "COLLAPSE",
                "DELETE",
                "DROP"
            ],
            ans: 2
        },
        {
            q: "Which SQL statement is used to insert new data in a database?",
            opts: [
                "ADD NEW",
                "INSERT INTO",
                "ADD RECORD",
                "INSERT NEW"
            ],
            ans: 1
        }
    ],
    "English": [
        {
            q: "Which is a synonym for 'happy'?",
            opts: [
                "Sad",
                "Angry",
                "Joyful",
                "Tired"
            ],
            ans: 2
        },
        {
            q: "Identify the noun in the sentence: 'The quick brown fox jumps over the lazy dog.'",
            opts: [
                "quick",
                "brown",
                "jumps",
                "fox"
            ],
            ans: 3
        },
        {
            q: "Choose the correct spelling:",
            opts: [
                "Accommodate",
                "Acommodate",
                "Accomodate",
                "Acomodate"
            ],
            ans: 0
        },
        {
            q: "What is the antonym of 'expand'?",
            opts: [
                "Grow",
                "Increase",
                "Contract",
                "Enlarge"
            ],
            ans: 2
        },
        {
            q: "Find the preposition: 'The cat sat on the mat.'",
            opts: [
                "cat",
                "sat",
                "on",
                "mat"
            ],
            ans: 2
        }
    ],
    "Reasoning": [
        {
            q: "Look at this series: 2, 4, 6, 8... What number should come next?",
            opts: [
                "9",
                "10",
                "11",
                "12"
            ],
            ans: 1
        },
        {
            q: "If RED is coded as 27, then how is GREEN coded?",
            opts: [
                "48",
                "49",
                "50",
                "51"
            ],
            ans: 1
        },
        {
            q: "Find the odd one out.",
            opts: [
                "Apple",
                "Banana",
                "Carrot",
                "Mango"
            ],
            ans: 2
        },
        {
            q: "A is the brother of B. B is the sister of C. How is A related to C?",
            opts: [
                "Brother",
                "Sister",
                "Cousin",
                "Father"
            ],
            ans: 0
        },
        {
            q: "If you walk 5km North, then turn Right and walk 5km, which direction are you facing?",
            opts: [
                "North",
                "South",
                "East",
                "West"
            ],
            ans: 2
        }
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