const express = require('express');
const router = express.Router();
const Users = require('../../models/Users.js')
const UsersController = require('../../controllers/UserController');

const { findAll, createUser, deleteById } = UsersController;

// '/users'
// GET request that gathers all of users from Mongo DB
router.get('/', findAll)


// '/users'
// POST request that creates a new user and adds the user to the Mongo DB
router.post('/', createUser)


// '/user/login'
// POST request that creates a new user and adds the user to the Mongo DB
router.post('/login', (req, res) => {
        const { username, password } = req.body;

        const criteria =
                username.indexOf("@") === -1 ? { username } : { email: username };

        Users.findOne(criteria).then(user => {
                if (password == user.password) {
                        res.send('You have logged in').status(200)
                }
                else {
                        res.send("Incorrect password").status(404)
                }
        }).catch(() => {
                res.send({
                        message: "error"
                }).status(500)
        })
})

// '/users'
// POST request that creates a new user and adds the user to the Mongo DB
router.delete('/:_id', deleteById)

module.exports = router;