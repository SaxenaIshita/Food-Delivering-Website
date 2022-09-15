const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");
const _=require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  res.render("home");

})

app.get("/aboutUs",function(req,res){

  res.render("aboutUs");

})
app.get("/contact",function(req,res){

  res.render("contact");

})
app.get("/features",function(req,res){

  res.render("features");

})
app.get("/menu",function(req,res){

  res.render("menu");

})
app.get("/success",function(req,res){

  res.render("success");

})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
