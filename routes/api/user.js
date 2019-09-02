const express = require('express');
const router = express.Router();
const Users = require('../../models/Users.js')
const UsersController = require('../../controllers/UserController');

const { findAll, createUser, logIn, deleteById } = UsersController;

// '/users'
// GET request that gathers all of users from Mongo DB
router.get('/', findAll)


// '/users'
// POST request that creates a new user and adds the user to the Mongo DB
router.post('/', createUser)


// '/user/login'
// POST request that creates a new user and adds the user to the Mongo DB
router.post('/login', logIn)

// '/users'
// POST request that creates a new user and adds the user to the Mongo DB
router.delete('/:_id', deleteById)

module.exports = router;