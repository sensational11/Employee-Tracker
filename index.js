// Required Dependencies to create server
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const consoletable = require ("console.table");
const {default: Choices} = require("inquirer/lib/objects/choices");
const {Action} = require("rxjs/internal/scheduler/Action");
const {allowedNodeEnvironmentFlags, exit} = require("process");
const {type} = require("os");


// establshing connection to mysql database
const db = mysql2.createConnection ({
    host: "localhost",
    user: "root",
    password: "ROOT1234",
    database: "employee_db"
});



// const departments = 
// db.query("SELECT * FROM department", function(err,results){
//     const table = consoletable.getTable(results);
//     console.log(table);
// });
    inquirer
    .prompt({
        type: "list",
        message: "Make a selection ",
        name:"Action",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role"
        ],
    })
    .then((answer) => {
        console.log(answer);
        switch(answer.action) {
            case "View Departments": 
                const viewAllDepartments = () =>{
                    const departments = db.query("SELECT * FROM department", function(err,results){
                        const table = consoletable.getTable(results);
                        console.log(table);
                    });

                  return departments};
            
                viewAllDepartments()
                break;
                }}
            ).catch((err) => {
                    console.log(err);
            });

        
    


