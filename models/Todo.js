const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(  // Yahan hum todoSchema naam ka ek schema bana rahe hai 
// new mongoose.Schema() → Mongoose ko batata hai ki ye ek schema hai
                                        
    
    // Schema → structure define karta hai
    {
        title:{
            type:String,        //type: String → sirf text allowed hai
            required : true,   // required: true → bina title ke todo save nahi hoga
            maxLength:50,      //maxLength: 50 → 50 characters se zyada allowed nahi
            
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,  // type: Date → date store hogi
            required:true,  //  hona hi chahiye
            default:Date.now(),  // default: Date.now() →
                                // Agar user date na bheje → current date & time automatically set ho jayega
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);  // Yahan hum Model create + export kar rahe hain
// Model = MongoDB collection ke saath interact karne ka tool
// "Todo" → Model ka naam
// todoSchema → structure


//Schema = database ke document ka structure / blueprint
//Matlab MongoDB me ek Todo document me kaun-kaun se fields honge aur unka type kya hoga — ye schema decide karta hai.

