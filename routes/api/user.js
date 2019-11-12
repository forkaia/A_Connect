const express = require("express");
const router = express.Router();
const Users = require("../../models/Users.js");
const UsersController = require("../../controllers/UserController");

const { findAll, createUser, logIn, deleteById, getUserById } = UsersController;

// '/users'
// GET request that gathers all of users from Mongo DB
router.get("/", findAll);

// '/users'
// GET request that creates a new user and adds the user to the Mongo DB
router.get("/:_id", getUserById);

// '/users'
// POST request that creates a new user and adds the user to the Mongo DB
router.post("/", createUser);

// '/users/login'
// POST request that logs a user in
router.post("/login", logIn);

// '/users'
// DELETE request that deletes a user by their unique IDs
router.delete("/:_id", deleteById);

module.exports = router;
