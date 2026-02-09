
// import the model
const { json } = require("express");
const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) =>{
    try{
        // fetch all todo items from database
        const todo = await Todo.find({});

        // response 
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server Error",
        })
    }
}


// extract(get) single todo items basis on Id

exports.getTodoById = async(req, res) =>{
    try{
        const id= req.params.id;
        const todo = await Todo.findById({_id: id});

        // data forgiven id not found
        if(!todo){
            return res.status(404)
            .json({
                success:false,
                message:"No Data Found with Given Id"
            })
        }
        // data for given id found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })

    }
    catch{
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server Error",
        })
    }
} 
