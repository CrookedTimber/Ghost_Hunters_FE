const express = require('express')
const app = express()
const cors = require('cors');
const stories = require('./data');
app.use(express.json())
app.use(cors());


app.get('/', (req, res) =>  res.send(' World!'))

// To do: Create a route for retrieving all quotes
app.get('/stories', (req, res) => {
  const allStories = stories.toString();
  res.send(allStories)

})


// // To do: Create a route for retrieving a random quote
app.get('/stories/random', (req, res) => {
  function getRandomStory () {
    for (let i = 0; i < stories.length; i++) {
    const randomStory = stories[Math.floor(Math.random() * stories.length)]
    return randomStory

    }
  }
    res.send(getRandomStory())
  });


module.exports = app;
