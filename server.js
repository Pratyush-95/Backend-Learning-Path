//step1 : Create a folder
//step2 : move into the folder using cd folder_name
//step3 : run npm init -y to create a package.json file
//step4 : run npm i express to install express framework
// step5 : create a file named server.js


// Server Instantiate // Create Own Server

const express = require('express');
const mongoose = require('mongoose');

const app = express();


// Built-in middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello Jee, Kaise ho Pratyush");
    console.log("Hello World");
});

app.post('/api/car', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted Successfully");
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(() => console.log("Connection Successful"))
.catch((error) => console.log("Received an error:", error));

// Start server
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
});
