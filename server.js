const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000 || process.env.PORT
const db = process.env.db

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/users', require('./routes/api/user.js'))

mongoose.connect(db, () => {
        console.log("The Mongo DB is now connected")
})

app.listen(PORT, () => {
        console.log(`App is now listening on PORT: ${PORT}`)
})