const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("DATABASE CONNECTION SUCCESFULY"))
        .catch((err) => {
            console.log(err);
            process.exit();
        });
}

module.exports.connectDB = connectDB;