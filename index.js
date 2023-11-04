
//express
import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017"  , {
    dbName: "backend",
}).then(() => console.log("Database Connected")).catch((e) => console.log(e))


const app = express();

const users = [];

// using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}));

//setting up view engine
app.set("view engine" , "ejs");

app.get("/" , (req,res) => {
    res.render("index")
});

app.get("/success" , (req,res) => {
    res.render("success")
});

app.get("/add" , (req,res) => {
    res.render("nice")
});

app.post("/contact" , (req , res) => {
   
    users.push({username: req.body.name , email: req.body.email});
    res.redirect("/success");
});

app.get("/users" , (req , res) => {
     res.json({
        users,
     })
})


app.listen(5000 , () => {
    console.log( "Server is working");
});