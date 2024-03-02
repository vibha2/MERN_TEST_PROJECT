const express = require("express");
const app = express();
// const database = require('./config/database');
const path = require("path");


// middlewares
app.use(express.json());

const PORT = process.env.PORT || 4000;

//to make build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
})

app.listen(PORT, () => {
    console.log("App is running on "+ PORT);
})