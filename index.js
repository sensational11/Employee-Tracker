// Required Dependencies to create server
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
// const consoletable = require("console.table");

// establshing connection to mysql database
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "ROOT1234",
  database: "employee_db",
});

//Prompt for user input
function promptQuestions() {
  inquirer
    .prompt({
      type: "list",
      message: "Make a selection ",
      name: "action",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Quit",
      ],
    })
    .then(function (answer) {
      console.log(answer);

      switch (answer.action) {
        case "View Departments":
          db.query("SELECT * FROM department", function (err, results) {
            console.table(results);
            promptQuestions();
          });
          break;

        case "View Roles":
          db.query("SELECT * FROM roles", function (err, results) {
            console.table(results);
            promptQuestions();
          });
          break;

        case "View Employees":
          db.query("SELECT * FROM employee", function (err, results) {
            console.table(results);
            promptQuestions();
          });
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Roles":
          addRoles();
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        message: "Enter the name of your department",
      },
    ])
    .then((res) => {
      const addDept = "INSERT INTO department (name) VALUES (?)";
      db.query(addDept, [res.department], (err, data) => {
        if (err) throw err;
        console.log(`added ${res.department} to the database`);
        promptQuestions();
      });
    });
};
// Function to call to initialize app
promptQuestions();
