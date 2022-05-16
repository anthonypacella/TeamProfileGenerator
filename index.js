//dependencies
const fs = require('fs');
const inquirer = require('inquirer');

//class imports
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let internList = [];
let engineerList = [];
var managerObj;
let managerHTML = '';
let engineerHTML = '';
let internHTML = '';

function init() {
    managerQuestions();
}

function managerQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the team managers\'s name?',
            name: 'name'
        },

        {
            type: 'input',
            message: `What is the managers\'s ID number?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the managers\'s email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the managers\'s office number?`,
            name: 'officeNumber'
        },
    ])
    .then(function managerAnswerHandler(data) {
        let managerObj = new Manager(data.name, data.id, data.email, data.officeNumber);
        moreTeamMembers(managerObj, {}, {});
    })
};

function moreTeamMembers(managerObject, engineerObject, internObject) {
    managerObj = managerObject;
    engineerObj = engineerObject;
    internObj = internObject;
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add more employees?',
            choices: ['Yes', 'No'],
            name: 'addEmployees'
        }
    ])
    .then(function teamMemberQuestionHandler(data) {
        if (data.addEmployees === 'Yes') {
            findOutRole(managerObj, engineerObj, internObj);
        }
        else {
            drawTeamProfile(managerObj, engineerObj, internObj);
            // exit();
        }
    })
};

function findOutRole(managerObject, engineerObject, internObject) {
    managerObj = managerObject;
    engineerObj = engineerObject;
    internObj = internObject;
    inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What is the role of the employee?',
                    choices: ['Engineer', 'Intern'],
                    name: 'employeeRole'
                },
            ])
            .then(function findOutRoleHandler(data) {
                let employeeRole = data.employeeRole;
                teamMemberQuestions(employeeRole, managerObj, engineerObj, internObj);
            })
};

function teamMemberQuestions(employeeRole, managerObject, engineerObject, internObject) {
    managerObj = managerObject;
    engineerObj = engineerObject;
    internObj = internObject;
    if (employeeRole === "Engineer") {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the engineer\'s name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s employee ID?',
                name: 'engineerId'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s email address?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is the engineer\'s github username?',
                name: 'engineerGithub'
            }
        ])
        .then(function teamMemberQuestionsHandler(data) {
            let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            engineerList.push(newEngineer);
            moreTeamMembers(managerObj, engineerList, internObj);
        })
    }
    else if (employeeRole === "Intern") {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the intern\'s name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is the intern\'s employee ID?',
                name: 'internId'
            },
            {
                type: 'input',
                message: 'What is the intern\'s email address?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'Where is the intern attending university?',
                name: 'internSchool'
            }
        ])
        .then(function teamMemberQuestionsHandler(data) {
            let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            internList.push(newIntern);
            moreTeamMembers(managerObj, engineerList, internList);
        })
    }
};

init();

function drawTeamProfile(managerObj, engineerObj, internObj) {
    let topHTML =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />
    </head>
    <body style = 'background-color: lightblue;'>
        <header>
            <h1 class = "mb-3 text-center">Team Members:</h1>
        </header>
    
        <div class = "container-fluid">
            <div class = "row" style = 'padding: 10px; margin:3px;'>`;

        managerHTML = `<div class = "card" style = 'width: 25rem;'>
            <div class = 'card-body'>
                <h5 class = 'card-title'>${managerObj.name}</h5>
                <h6 class = 'card-subtitle mb-2 text-muted'>Manager</h6>
                <ul class = 'list-group list-group-flush'>
                    <li class = 'list-group-item'>Employee ID: ${managerObj.id}</li>
                    <li class = 'list-group-item'>Email Address: <a href="mailto:${managerObj.email}">${managerObj.email}</a></li>
                    <li class = 'list-group-item'>Office Number: ${managerObj.officeNumber}</li>
                </ul> 
            </div>
        </div>`
        
    

    engineerList.forEach(engineerObj => {

            engineerHTML = engineerHTML + `<div class = "card" style = 'width: 25rem;'>
            <div class = 'card-body'>
                <h5 class = 'card-title'>${engineerObj.name}</h5>
                <h6 class = 'card-subtitle mb-2 text-muted'>Engineer</h6>
                <ul class = 'list-group list-group-flush'>
                    <li class = 'list-group-item'>Employee ID: ${engineerObj.id}</li>
                    <li class = 'list-group-item'>Email Address: <a href="mailto:${engineerObj.email}">${engineerObj.email}</a></li>
                    <li class = 'list-group-item'>Github: <a href="https://www.github.com/${engineerObj.github}" target = "_blank">www.github.com/${engineerObj.github}</a></li>
                </ul> 
            </div>
        </div>`
    });

    internList.forEach(internObj => {

        internHTML = internHTML + `<div class = "card" style = 'width: 25rem;'>
        <div class = 'card-body'>
            <h5 class = 'card-title'>${internObj.name}</h5>
            <h6 class = 'card-subtitle mb-2 text-muted'>Intern</h6>
            <ul class = 'list-group list-group-flush'>
                <li class = 'list-group-item'>Employee ID: ${internObj.id}</li>
                <li class = 'list-group-item'>Email Address: <a href="mailto:${internObj.email}">${internObj.email}</a></li>
                <li class = 'list-group-item'>University: ${internObj.school}</li>
            </ul> 
        </div>
    </div>`
});

let bottomHTML = `</div>
</div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</body>
</html>`;

let fullHTML = topHTML + managerHTML + engineerHTML + internHTML + bottomHTML;

fs.writeFile('./index.html', fullHTML, (err) => err ? console.error(err) : console.log('index.html created'));

}
