const Todo = require("../models/Todo"); // Todo model import kar rahe hain
                                        // Ye model MongoDB collection ko represent karta hai
exports.deleteTodo = async(req,res) =>{
    try{
        const {id} = req.params;  // URL se id nikal rahe hain
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo DELETED",
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

