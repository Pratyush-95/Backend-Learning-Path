const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("DB ka connection successful");
    } catch (error) {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;
