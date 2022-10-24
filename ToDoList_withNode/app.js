const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")

const app = express()

// It will search for ejs file in views folder
app.set('view engine', 'ejs');

// for posting data or submitting form
app.use(bodyParser.urlencoded({extended:false}));

// adding static data while using node
app.use(express.static("public"))

let items = ["Drink water", "Learn EJS"];
let workItems = [];

app.get("/", function(req,res){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    let day = date.getDay();
    res.render("list",{listTitle: day, NewItems: items});
})

app.post("/", (req,res)=>{
    let item = req.body.newItem;
    if(req.body.button === "Work"){
        workItems.push(item);
    res.redirect("/work")
    }else{
        items.push(item)
    res.redirect("/");
    }
    console.log(item);
    console.log(req.body)
    
})

app.get("/work", function(req,res){
    res.render("list", {listTitle:"Work List", NewItems: workItems})
})

app.get("/about", function(req, res){
    res.render("about");
})

// app.post("/work", (req,res)=>{
//     let item = req.body.newItem;
//     console.log(req.body)
//     workItems.push(item);
//     res.redirect("/work")
// })

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})