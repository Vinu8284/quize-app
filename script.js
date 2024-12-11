const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "a. Home Tool Markup Language",
      "b. Hyperlinks and Text Markup Language",
      "c.  Hyper Text Markup Language",
      "d. None of the above",
    ],
    answer: "c. Hyper Text Markup Language",
    category: "HTML",
  },
  {
    id: 2,
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["a. <a>", "b. <link>", "c. <href>", "d. <anchor>"],
    answer: "a. <a>",
    category: "HTML",
  },
  {
    id: 3,
    question: "What is the correct HTML tag for the largest heading?",
    options: ["a. <heading>", "b. <h6>", "c. <head>", "d. <h1>"],
    answer: "d. <h1>",
    category: "HTML",
  },
  {
    id: 4,
    question: "Which attribute is used to specify the URL of an image in HTML?",
    options: ["a. href", "b. src", "c. link", "d. url"],
    answer: "b. src",
    category: "HTML",
  },
  {
    id: 5,
    question: "What is the purpose of the `<alt>` attribute in the `<img>` tag?",
    options: [
      "a. To define alternate text for an image",
      "b. To specify the alignment of the image",
      "c. To provide a title for the image",
      "d. To resize the image",
    ],
    answer: "a. To define alternate text for an image",
    category: "HTML",
  },
  {
    id: 6,
    question: "Which HTML element is used to create a line break?",
    options: ["a. <line>", "b. <lb>", "c. <break>", "d. <br>"],
    answer: "d. <br>",
    category: "HTML",
  },
  {
    id: 7,
    question: "Which attribute is used to open a link in a new tab?",
    options: [
      "a.  open='new'",
      "b. new='tab'",
      "c. link='newtab'",
      "d. link='newtab'",
    ],
    answer: "c. target='_blank'",
    category: "HTML",
  },
  {
    id: 8,
    question: "What is the correct HTML tag for a paragraph?",
    options: ["a. <p>", "b. <para>", "c. <pg>", "d. <text>"],
    answer: "a. <p>",
    category: "HTML",
  },
  {
    id: 9,
    question: "Which HTML tag is used to create a table?",
    options: ["a. <tab>", "b. <table>", "c. <td>", "d. <th>"],
    answer: "b. <table>",
    category: "HTML",
  },
  {
    id: 10,
    question: "Which of the following is used to create an unordered list in HTML?",
    options: ["a. <li>", "b. <ol>", "c. <ul>", "d. <list>"],
    answer: "c. <ul>",
    category: "HTML",
  },
  
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "a. Cascading Style Sheets",
      "b. Creative Style Sheets",
      "c. Computer Style Sheets",
      "d. Colorful Style Sheets",
    ],
    answer: "a. Cascading Style Sheets",
    category: "CSS",
  },
  {
    id: 2,
    question: "Which property is used to change the background color in CSS?",
    options: [
      "a. color",
      "b. background-color",
      "c. bgcolor",
      "d. background",
    ],
    answer: "b. background-color",
    category: "CSS",
  },
  {
    id: 3,
    question: "Which property is used to change the text color of an element?",
    options: [
      "a. font-color",
      "b. text-color",
      "c. color",
      "d. font-style",
    ],
    answer: "c. color",
    category: "CSS",
  },
  {
    id: 4,
    question: "Which CSS property is used to set the space between the lines of text?",
    options: [
      "a. line-spacing",
      "b. line-height",
      "c. text-spacing",
      "d. spacing",
    ],
    answer: "b. line-height",
    category: "CSS",
  },
  {
    id: 5,
    question: "How do you make a list that lists its items with square bullets?",
    options: [
      "a. list-style-type: square;",
      "b. list-type: square;",
      "c. bullet: square;",
      "d. list-style: square;",
    ],
    answer: "a. list-style-type: square;",
    category: "CSS",
  },
  {
    id: 6,
    question: "Which CSS property controls the font size?",
    options: [
      "a. font-weight",
      "b. text-size",
      "c. font-style",
      "d. font-size",
    ],
    answer: "d. font-size",
    category: "CSS",
  },
  {
    id: 7,
    question: "Which CSS property is used to make text bold?",
    options: [
      "a. font-size",
      "b. text-bold",
      "c. font-style",
      "d. font-weight",
    ],
    answer: "d. font-weight",
    category: "CSS",
  },
  {
    id: 8,
    question: "Which property is used to align text to the center?",
    options: [
      "a. text-align: middle;",
      "b. text-align: center;",
      "c. align: center;",
      "d. align-text: center;",
    ],
    answer: "b. text-align: center;",
    category: "CSS",
  },
  {
    id: 9,
    question: "Which of the following properties is used to change the border color?",
    options: [
      "a. border-color",
      "b. color",
      "c. border-style",
      "d. border",
    ],
    answer: "a. border-color",
    category: "CSS",
  },
  {
    id: 10,
    question: "What is the correct syntax to include an external CSS file?",
    options: [
      "a. <link rel='stylesheet' href='styles.css'>",
      "b. <style src='styles.css'>",
      "c. <css link='styles.css'>",
      "d. <stylesheet>styles.css</stylesheet>",
    ],
    answer: "a. <link rel='stylesheet' href='styles.css'>",
    category: "CSS",
  },


    {
      id: 1,
      question: "What does 'var' stand for in JavaScript?",
      options: [
        "a. Variable",
        "b. Variant",
        "c. Variation",
        "d. Value Register",
      ],
      answer: "a. Variable",
      category: "JavaScript",
    },
    {
      id: 2,
      question: "Which company developed JavaScript?",
      options: ["a. Microsoft", "b. Mozilla", "c. Netscape", "d. Google"],
      answer: "c. Netscape",
      category: "JavaScript",
    },
    {
      id: 3,
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["a. var", "b. const", "c. let", "d. constant"],
      answer: "b. const",
      category: "JavaScript",
    },
    {
      id: 4,
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "a. alertBox('Hello World');",
        "b. msgBox('Hello World');",
        "c. msg('Hello World');",
        "d. alert('Hello World');",
      ],
      answer: "d. alert('Hello World');",
      category: "JavaScript",
    },
    {
      id: 5,
      question: "Which method is used to round a number to its nearest integer?",
      options: [
        "a. Math.ceil()",
        "b. Math.floor()",
        "c. Math.round()",
        "d. Math.random()",
      ],
      answer: "c. Math.round()",
      category: "JavaScript",
    },
    {
      id: 6,
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["a. //", "b. /* */", "c. #", "d. <!-- -->"],
      answer: "a. //",
      category: "JavaScript",
    },
    {
      id: 7,
      question: "Which event occurs when a user clicks on an HTML element?",
      options: ["a. onhover", "b. onmouseclick", "c. onclick", "d. onchange"],
      answer: "c. onclick",
      category: "JavaScript",
    },
    {
      id: 8,
      question: "What will `typeof null` return in JavaScript?",
      options: ["a. null", "b. undefined", "c. object", "d. string"],
      answer: "c. object",
      category: "JavaScript",
    },
    {
      id: 9,
      question: "Which function is used to parse a string into an integer in JavaScript?",
      options: ["a. parseInt()", "b. parseFloat()", "c. Number()", "d. String()"],
      answer: "a. parseInt()",
      category: "JavaScript",
    },
    {
      id: 10,
      question: "Which of the following is a way to declare a JavaScript function?",
      options: [
        "a. function = myFunction() {}",
        "b. function myFunction() {}",
        "c. function: myFunction() {}",
        "d. function -> myFunction() {}",
      ],
      answer: "b. function myFunction() {}",
      category: "JavaScript",
    },
    {
      id: 1,
      question: "What is React primarily used for?",
      options: [
        "a. Building databases",
        "b. Designing APIs",
        "c. Building user interfaces",
        "d. Developing operating systems",
      ],
      answer: "c. Building user interfaces",
      category: "React",
    },
    {
      id: 2,
      question: "Which method is used to update state in a React class component?",
      options: [
        "a. changeState()",
        "b. updateState()",
        "c. setState()",
        "d. stateUpdate()",
      ],
      answer: "c. setState()",
      category: "React",
    },
    {
      id: 3,
      question: "What is the virtual DOM in React?",
      options: [
        "a. A copy of the real DOM kept in memory",
        "b. The browser's representation of the DOM",
        "c. The physical structure of a webpage",
        "d. None of the above",
      ],
      answer: "a. A copy of the real DOM kept in memory",
      category: "React",
    },
    {
      id: 4,
      question: "Which hook is used to manage side effects in React functional components?",
      options: ["a. useState", "b. useEffect", "c. useReducer", "d. useContext"],
      answer: "b. useEffect",
      category: "React",
    },
    {
      id: 5,
      question: "How can you pass data from a parent component to a child component?",
      options: ["a. Using state", "b. Using hooks", "c. Using props", "d. Using context"],
      answer: "c. Using props",
      category: "React",
    },
    {
      id: 6,
      question: "What is the default port for a React app running in development mode?",
      options: ["a. 8080", "b. 3000", "c. 5000", "d. 4200"],
      answer: "b. 3000",
      category: "React",
    },
    {
      id: 7,
      question: "Which of the following is a correct way to create a React component?",
      options: [
        "a. function MyComponent() {}",
        "b. const MyComponent = () => {}",
        "c. class MyComponent extends React.Component {}",
        "d. All of the above",
      ],
      answer: "d. All of the above",
      category: "React",
    },
    {
      id: 8,
      question: "Which statement best describes JSX?",
      options: [
        "a. JSX is a type of JavaScript",
        "b. JSX allows you to write HTML in JavaScript",
        "c. JSX is a template engine",
        "d. JSX is an advanced version of CSS",
      ],
      answer: "b. JSX allows you to write HTML in JavaScript",
      category: "React",
    },
    {
      id: 9,
      question: "Which of the following can cause a React component to re-render?",
      options: [
        "a. Changing the state",
        "b. Updating props",
        "c. Forcing a re-render using forceUpdate()",
        "d. All of the above",
      ],
      answer: "d. All of the above",
      category: "React",
    },
    {
      id: 10,
      question: "What is the purpose of the `key` prop in React lists?",
      options: [
        "a. To uniquely identify elements for React's reconciliation process",
        "b. To add styles to list items",
        "c. To link components to external data",
        "d. To specify the order of list elements",
      ],
      answer: "a. To uniquely identify elements for React's reconciliation process",
      category: "React",
    },
];
let username = "";
let category = "";
let questionCount = 0;
let score = 0;
let totalTime = 0;
let timerInterval;
let startTime;
let categoryQuestions = [];

function getName(event) {
  username = document.getElementById("text").value;
  if (username == "") {
    alert("Name is required!");
    return;
  }
  console.log(username);

  let welcomeNote = `<p>Welcome ${username}, you can start the quiz now!</p>`;
  document.getElementById("welcomenote").innerHTML = welcomeNote;
  event.preventDefault();

  document.getElementById("text").value = "";
}

function startQuiz(event) {
  category = event.target.value;
  console.log(category);

  categoryQuestions = questions.filter(
    (question) => category == question.category
  );

  questionCount = 0;
  score = 0;
  totalTime = 0;
  startTime = Date.now();

  document.getElementById("container").innerHTML = `
    <h1>${category}</h1>
    <div class="container">
      <div id="timer">Time Left: 15s</div>
      <div id="score">Score:0</div>
    </div>
    <div id="question-count">QC 1</div> 
    <div id="question-box">Question</div>
    <div id="option-container"></div>
  `;
  displayQuestion();
}
function displayQuestion() {
  if (questionCount >= categoryQuestions.length) {
    endQuiz();
    return;
  }
  // let randomNumber=Math.floor(Math.random()*10);
  let questionContainer = document.getElementById("question-box");
  questionContainer.innerHTML = `<p>${categoryQuestions[questionCount].question}</p>`;
  document.getElementById('question-count').innerHTML=`${questionCount+1}/10`
  displayOptions(categoryQuestions[questionCount]);

  let timeLeft = 20;
  document.getElementById("timer").textContent = `Time Left: ${timeLeft} seconds`;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      questionCount++;
      displayQuestion(); 
    }
  }, 1000);
}
function displayOptions(question) {
  let optionContainer = document.getElementById("option-container");
  optionContainer.innerHTML = "";
  question.options.forEach((option) => {
    let optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = () => handleAnswer(option, question.answer);
    optionContainer.appendChild(optionButton);
  });
}
function handleAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  }
  questionCount++;
  clearInterval(timerInterval); 
  displayQuestion(); 
}
function endQuiz() {
  clearInterval(timerInterval);
  totalTime = Math.floor((Date.now() - startTime) / 2000);
  const attemptedQuestions = questionCount;
  const totalQuestions = categoryQuestions.length;
  const correctAnswers = score;
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  let greetingMessage = correctAnswers > 5 
    ? `Congratulations! ${username} You cleared the quiz!` 
    : `Keep trying,${username} you can do better next time!`;

  document.getElementById("container").innerHTML = `
    <h1 class="quiz-result">Quiz Result</h1>
     <p class="result1">${greetingMessage}</p>
    <p class="result">Total Questions: ${totalQuestions}</p>
    <p class="result">Attempted Questions: ${attemptedQuestions}</p>
    <p class="result">Correct Answers: ${correctAnswers}</p>
    <p class="result">Wrong Answers: ${wrongAnswers}</p>
    <p class="result">Total Percentage: ${percentage}%</p>
    <p class="result">Total Time Taken: ${totalTime} seconds</p>
    <button onclick="location.reload()">Restart Quiz</button>
  ` ;
}

