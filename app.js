var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  
  user: "root",

 
  password: "Fieldy23!",
  database: "appdb"
  
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Role",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
      ]
    })
  
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        allEmployees();
        break;

      case "View All Employees By Department":
        allEmployeesByDepartment();
        break;

      case "View All Employees By Role":
        allEmployeesByRole();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Add Department":
        addDepartment();
        break;

      case "Add Role":
        addRole();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      }
    });
}

function allEmployees() {
  cTable
    
      var query = "SELECT * FROM info";
      connection.query(query, function(err, res) {
      console.table(res);
 
        runSearch();
      });
}

function allEmployeesByDepartment() {
  cTable
  
  var query = "SELECT * FROM info GROUP BY department_id";
  connection.query(query, function(err, res) {
  console.table(res);
    
    runSearch();
  });
}

  function allEmployeesByRole() {
    cTable
    
    var query = "SELECT * FROM info GROUP BY role_id";
    connection.query(query, function(err, res) {
    console.table(res);
      
      runSearch();
    });
}

function addEmployee() {
  inquirer
    .prompt(responseEmployee)
    .then(function (input) {
      const employee = new employee (input.firstName, input.lastName, input.role, input.manager)
      

      runSearch();
    });
}

function addDepartment() {
  inquirer
    .prompt(responseDepartment)
    .then(function (input) {
      const department = new department (input.firstName, input.lastName, input.role, input.manager)
      

      runSearch();
    });
}

function addRole() {
  inquirer
    .prompt(responseRole)
    .then(function (input) {
      const role = new role (input.firstName, input.lastName, input.role, input.manager)
      

      runSearch();
    });
}

const responseEmployee = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "first name"
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "last name"
  },
  {
    type: "input",
    message: "What is the employee's role's ID?",
    name: "role"
  },
  {
    type: "input",
    message: "What is the employee's manager's ID?",
    name: "manager"
  }
];

const responseDepartment = [
  {
    type: "input",
    message: "What is the department's name?",
    name: "name"
  }
];

const responseRole = [
  {
    type: "input",
    message: "What is the role's title?",
    name: "title"
  },
  {
    type: "input",
    message: "What is the role's salary?",
    name: "salary"
  },
  {
    type: "input",
    message: "What is the role's department?",
    name: "department"
  },
];