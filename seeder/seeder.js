let mongoose = require("mongoose");
let portfolio = require('../models/portfolio');
require('dotenv').config();
console.log(process.env.DATABASE_URL)


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,    
    useFindAndModify: false,
    useCreateIndex: true
});

let portfolioSeed = [
  
      {
        createDate:  Date.now(),
        imgLoc: '../images/FirstHomeWork.jpg',
        title: 'Refactor Assignment',
        description: 'The first project covered the introduction of css utilizing the functionality to improve HTML',
        gitBtn: 'https://ktywelch.github.io/01-02-Homework/',
        deployBtn:  ''
      },
      {
        createDate: Date.now(),
        imgLoc: '../images/weather.gif',
        title: 'Personal Weather',
        description: 'Project that utilizes the OpenWeather API to retrieve weather data for cities. In addition once we have the city information we use localStorage to store the cities so we can click on a location to get the updaed weather for that location.',
        deployBtn: 'https://ktywelch.github.io/PersonalWeather',
        gitBtn: 'https://github.com/ktywelch/PersonalWeather'
      },
      {
        createDate: Date.now(),
        imgLoc: '../images/show-pw.jpg',
        title: 'Password Generator',
        description: 'Project that generate a random password based on users input criteria and return the value to user. The password will show on the screen for 6 seconds giving the user time to write it down or copy.',
        gitBtn: 'https://github.com/ktywelch/password-gen',
        deployBtn: 'https://ktywelch.github.io/password-gen/'
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
