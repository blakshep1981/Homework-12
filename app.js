const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArr = [];
console.log(teamArr);


const responseManager = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the manager's Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber"
  }
];

const responseEngineer = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the engineer's Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the engineer's Github username?",
    name: "github"
  }
];

const responseIntern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the intern's Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school"
  }
];


function promptManager() {
    inquirer
      .prompt(responseManager)
      .then(function (input) {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        teamArr.push(manager);

        addEmployee();
      });
  }
  
  
  function promptEngineer() {
    inquirer
      .prompt(responseEngineer)
      .then(function (input) {
        const engineer = new Engineer(input.name, input.id, input.email, input.gitName)
        teamArr.push(engineer);

        addEmployee();
      });
  }

  function promptIntern() {
    inquirer
      .prompt(responseIntern)
      .then(function (input) {
        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamArr.push(intern);

        addEmployee();
      });
  }

 

  function addEmployee() {

    const addEmployee = [
      {
        type: "list",
        message: "Which employee would you like to add?",
        name: "role",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "Finish"
        ]
      }];

    inquirer
      .prompt(addEmployee)
      .then(function (input) {

        if (input.role === "Manager") {
          promptManager();
        }
        if (input.role === "Engineer") {
          promptEngineer();
        }
        if (input.role === "Intern") {
          promptIntern();
        }
        else if (input.role === "Finish") {
          
       const teamHTML = render(teamArr);

        fs.writeFile(outputPath, teamHTML, (err) => {
        
        if (err) {
        }
        });
        
      } 
      });
  }

  addEmployee();