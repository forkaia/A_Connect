const Users = require('../models/Users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const UsersController = {
        // function that gathers all users from Mongo DB
        findAll: (req, res) => {
                Users.find().then((users) => {
                        res.send(users).status(200);
                        if (!users) {
                                console.log("Error")
                                res.send("Error")
                                // res.sendStatus(404)
                        }
                }).catch((err) => {
                        throw err;
                })
        },
        // function that creates a new user and adds the user's information to Mongo DB
        createUser: (req, res) => {
                const { name, email, username, password } = req.body;
                if (!name || !email || !username || !password) {
                        res.send('Please fill all fields').status(500)
                }
                bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {
                                if (err) {
                                        res.send("Error in hashing password").status(500)
                                }

                                const user = {
                                        name,
                                        email,
                                        username,
                                        password: hash // stores hashed password in database
                                }
                                Users.create(user).then((user) => {
                                        const { name, username, email, password, _id } = user;
                                        // puts user id into the payload of the jwt
                                        jwt.sign(
                                                { id: _id },
                                                process.env.jwtsecret,
                                                { expiresIn: "1h" },
                                                (err, token) => {
                                                        console.log(token);
                                                        if (err) throw err;
                                                        res.status(201).json({
                                                                token,
                                                                user: {
                                                                        _id,
                                                                        name,
                                                                        username,
                                                                        email,
                                                                        password
                                                                },
                                                                success: "User created"
                                                        });
                                                }
                                        ).catch((err) => {
                                                throw err;
                                        })
                                })
                        });
                })
        },
        /* function used for user login validation
        compares given info with info from Mongo DB 
        returns a JSON web token in return */
        logIn: (req, res) => {
                const { username, password } = req.body;
                console.log(password)
                /* determines if the given login info is a username or email
                if an '@' is present, it will search for an email that matches the given email 
                other wise it will search for a username that matches the given username */
                const criteria = username.indexOf("@") === -1 ? { username } : { email: username };
                Users.findOne(criteria).then(user => {
                        console.log(`user: ${password}`)
                        console.log(`user.password: ${user.password}`)
                        // compares the given password to the hashed password from the Mongo DB
                        bcrypt.compare(password, user.password).then((success) => {
                                console.log(success)
                                if (success) {
                                        // if password matches, a JWT is signed and created for the user along with the user information
                                        jwt.sign(
                                                { id: user._id },
                                                process.env.jwtsecret,
                                                { expiresIn: "1h" },
                                                (err, token) => {
                                                        console.log(`token: ${token}`)
                                                        if (err) throw err;
                                                        res.status(201).json({
                                                                token,
                                                                user: {
                                                                        id: user._id,
                                                                        name: user.name,
                                                                        username: user.username,
                                                                        email: user.email,
                                                                        password: user.password
                                                                },
                                                                message: 'You have logged in'
                                                        });
                                                }
                                        );
                                }
                                if (!success) {
                                        console.log("Incorrect password")
                                        res.send('Incorrect password').status(500)
                                }
                        });
                }).catch(() => {
                        console.log("User does not exist")
                        res.send("User does not exist").status(404)
                })
        },
        // function that finds a user in Mongo DB with the given ID and deletes the user from Mongo DB
        deleteById: (req, res) => {

                const { _id } = req.params;

                if (!_id) {
                        res.send("Please specify id of user to delete").status(500)
                }
                Users.findByIdAndDelete(_id).then(success => {
                        if (success) {
                                res.send(`User: ${id} deleted`)
                        }
                }).catch((err) => {
                        throw err;
                })
        }
}

module.exports = UsersController