const mongoose = require('mongoose');

// MongoDB URI - changed to swiggy
const mongoURI = "mongodb://localhost:27017/swiggy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// Function to connect to MongoDB
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,  // Use the new URL parser
        useUnifiedTopology: true // Use the new topology engine
        
    })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
};

// Export the connection function
module.exports = connectToMongo;
