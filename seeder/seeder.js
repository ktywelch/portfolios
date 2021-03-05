let mongoose = require("mongoose");
let portfolio = require('../models/portfolio');
require('dotenv').config();



 mongoose.connect(process.env.MONGODB_URI,{  
    useNewUrlParser: true,
    useUnifiedTopology: true,    
    useFindAndModify: false,
    useCreateIndex: true
});

let portfolioSeed = [
             
{              
imgLoc:  "../images/weather.gif",       
title: 'Personal Weather',
description:  'Project that utilizes the OpenWeather API to retrieve weather data for cities. In addition once we have the city information we use localStorage to store the cities so we can click on a location to get the updaed weather for that location.',
deployBtn: "https://ktywelch.github.io/PersonalWeather/",  
gitBtn:   'https://github.com/ktywelch/PersonalWeather'
},             
{       
imgLoc: "../images/show-pw.jpg", 
title: 'Password Generator',
description:  'Project that generate a random password based on users input criteria and return the value to user. The password will show on the screen for 6 seconds giving the user time to write it down or copy.',
deployBtn: "https://ktywelch.github.io/password-gen/",
gitBtn:  'https://github.com/ktywelch/password-gen'
},
{
imgLoc: "../images/MusicForFood.gif",
title: 'Music For Food',
description: 'Project was to create a website that utilizes fetch to search for recipes and music depending on what cuisine of your choice so that the user is provide a playlist from that same ethnic culture.',
deployBtn: "https://ktywelch.github.io/MusicForFood/",
gitBtn: 'https://github.com/ktywelch/MusicForFood'
},
{    
imgLoc: "../images/notetaker.gif", 
title: 'NoteTaker  Application',
description: 'The NoteTaker application allows a user to read, write, change and save notes. This application uses express.js back end, saves and retrieves the note data from a JSON file.',
deployBtn: 'https://notetaker-ktywelch-2020.herokuapp.com/', 
gitBtn:  'https://github.com/ktywelch/NoteTaker',
},     
{ 
imgLoc: "../images/EmployeeTracker.gif",
title: 'Employee Tracker',
description: 'The EmployeeTracker application allows a user to create, read, update and delete Employees, Department and Roles from a company database. This will allow users to interact with the data in a more meaningful way. Requires download from git - not deployed to web service.',
repoBtn: "https://github.com/ktywelch/EmployeTracker"  
},
{
imgLoc: "../images/devour_app.gif",
title: "Eat'n Burgers on Heroku",
description: "The Eat'n Burger is an application that utilizes database to allow users to add \
burgers to a log to track burgers they would like to try to the list and when the burger is devoured the burgers they move to eaten.",
deployBtn: "https://burger-devour-kw.herokuapp.com/",
gitBtn: 'https://github.com/ktywelch/eat-a-burger'
},
{    
imgLoc: "../images/teacher.gif",    
title: 'Class Hero on Heroku',
description: 'A webapp using express routed and a mysql DB to design and create an application that can be used in a classroom setting that allows kids to participate more fully through use of comic characters. It was important to make sure that the users can fulfill the Create, Read, Update, and Delete functionalities. Students can now message their teachers if they need help or is stuck on an assignment.',
deployBtn: "https://class-heros.herokuapp.com",
gitBtn: 'https://github.com/ktywelch/ClassMonsters-X-Force'
},
{             
img: "../images/fitness.gif",
title: 'Fitness Tracker',
description: 'The FitnessTrakcer application utilizes a mongo database and mongoose to \ allow users to workouts and track cardio and resistence \
excercises into a database that the user can view in a dashboard \
to track duration and weight lifted over the past 7 workouts.',
gitBtn: "https://github.com/ktywelch/FitnessTracker",
deployBtn: ''
},
{
title: 'Employee Directory',
imgLoc: '../images/empDir.gif',
description: 'The design utilizes a react, NPM and JavaScript to create a web site that will allow the user to filter on employees by name. Sort the employess by clicking on the button at the top of the column. The sort direction, can be changed from ascending to descending as the button is clicked. To filter the list by first and last name enter can be completed by typing text in the search button. The search is responsive and will update as the user changes the content of the search box.',
deployBtn: 'https://ktywelch.github.io/Employee-Directory/',
gitBtn: 'https://github.com/ktywelch/Employee-Directory'
},
{
imgLoc: "../images/BudgetTrack.jpg",  
title: 'PWA Budget Tracker',
description: 'The BudgetTracker application utilizes a mongo database and mongoose and code provided with added PWA implementation to enable a user to create and track \
expense through a budget tracking application. If the application goes offline the user will still be able to enter items and when the system comes back online \
the entries will be added to the  mongo db server when the connection is reestablished.',
deployBtn: 'https://budgettrak-kw.herokuapp.com/',
gitBtn: 'https://github.com/ktywelch/budgetTracker'
}                

];



portfolio.deleteMany({})
  .then(() => portfolio.collection.insertMany(portfolioSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
