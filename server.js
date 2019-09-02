const express = require('express'); // Use Express.js for REST api
const mongoose = require('mongoose'); // ODM for Mongo DB and JS
const app = express();
const PORT = 4000 || process.env.PORT
const db = process.env.db // The MongoDB URI from .env file

app.use(express.json()); // needed to parse incoming request bodies
app.use(express.urlencoded({ extended: true })) // needed to submit form data
app.use('/users', require('./routes/api/user.js')) // enables the user api route

// Mongoose connection to Mongo DB via Mongo URI
mongoose.connect(db, () => {
        console.log("The Mongo DB is now connected")
})

app.listen(PORT, () => {
        console.log(`App is now listening on PORT: ${PORT}`)
})