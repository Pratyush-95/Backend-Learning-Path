const express = require("express");  // - Express framework ko import kar rahe hain
const router = express.Router();  //  Naya router object banaya, jisse hum routes define kar sakein

// import controller
const {createTodo} = require("../controllers/createTodo");  //  Todo banane ka controller
const {getTodo,getTodoById} = require("../controllers/getTodo");  //  Todo fetch karne ke controllers
const {updateTodo} = require("../controllers/updateTodo"); //  Todo update karne ka controller
const {deleteTodo} = require("../controllers/deleteTodo"); // Todo delete karne ka controller

// define API routes
router.post("/createTodo", createTodo); //  POST route new Todo banane ke liye
router.get("/getTodo",getTodo);    // GET route sabhi Todo fetch karne ke liye
router.get('/getTodo/:id', getTodoById);  // GET route specific Todo ID se fetch karne ke liye
router.put('/updateTodo/:id', updateTodo); // - PUT route Todo update karne ke liye
router.delete('/deleteTodo/:id', deleteTodo);  //  DELETE route Todo delete karne ke liye


module.exports = router;  // router ko export kar rahe hain
                          // Taaki ise index.js ya app.js me use kar saken