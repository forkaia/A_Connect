const Users = require('../models/Users.js')

const UsersController = {
        findAll: (req, res) => {
                Users.find().then((users) => {
                        res.send(users).status(200);
                        if (!users) {
                                res.sendStatus(404)
                        }
                }).catch((err) => {
                        throw err;
                })

        },

        createUser: (req, res) => {
                const { name, email, username, password } = req.body;
                if (!name || !email || !username || !password) {
                        res.send('Please fill all fields').status(500)
                }


                const user = {
                        name,
                        email,
                        username,
                        password
                }

                Users.create(user).then((user) => {
                        res.send(user);
                }).catch((err) => {
                        throw err;
                })

        },
        logIn: (req, res) => {
                const { username, password } = req.body;

                const criteria =
                        username.indexOf("@") === -1 ? { username } : { email: username };

                Users.findOne(criteria).then(user => {
                        if (password == user.password) {
                                res.send('You have logged in').status(200)
                        }

                }).catch(() => {
                        res.send("Incorrect password").status(404)
                })
        },
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