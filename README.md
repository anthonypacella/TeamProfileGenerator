# TeamProfileGenerator

## My Task

My task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. I will also need to write a unit test for every part of your code and ensure that it passes each test.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Test & Run application

* In order to install all necessary dependancies, please use 'npm install'.
* In order to run the unit tests, please use 'npm test'.
* In order to run the application, please use 'node index.js'.

## Experience

Once the application is started, the user is prompted with a series of questions about the team. The first questions will prompt the user to enter details about the team's manager (Name, ID #, Email Address, and Office Number). Once these details are entered, the user if given the chance to enter details on the other employees on their team - any Engineers or Interns. 

If the user would like to add more team members, they may. The details that the user will enter for Engineers are (Name, ID#, Email Address, and GitHub username). The details that the user will enter for the Interns are (Name, ID#, Email Address, and university). Once the user has entered all of the employees on their team, they can choose 'No' when promted "Would you like to add another employee'. 

When selecting 'No', the application will exit and an HTML file will be created that will display a web page for your team's profile.

## Mock-Up

The following video shows an example of the application being used from the command line and subsequent web page:

[![A video thumbnail shows the seeding and starting of the application. Then the API functionality is shown in Insomnia](./Assets/Thumbnail.png)](https://drive.google.com/file/d/1cmWIkEgS7pGWPxcyo5M20olqszYkpOw9/view)

## Technology

* Javascript
* Node.js

## Links

* Github Repo: https://github.com/anthonypacella/TeamProfileGenerator