const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const itemsRouter = require("./routes/iTemslist"); // or the correct file path

// Connect to MongoDB
connectToMongo();
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Available Routes
app.use("/auth", require("./routes/auth"));
// app.use('/api/items', './routes/iTemslist.js'); // Use the items router
app.use("/api/items", itemsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server Listening: http://localhost:${port}`);
});
