const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler");
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000

connectDb();
//middleware function provided by Express.js that parses incoming JSON data from the request body.
app.use(express.json());

app.use(errorHandler);

//telling your Express application to use the middleware or routes defined in contactRoutes whenever a request is made to a URL path that starts with "/api/contacts". 
app.use("/api/contacts", require("./routes/contactRoutes")) ;
app.use("/api/users", require("./routes/userRoutes")) ;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
