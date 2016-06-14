// requirements
var express = require('express'),
    app = express();

var colors = [
"red",
"green",
"blue",
"yellow",
"purple",
"orange"
];

app.get("/color/:index", function (req, res) {
    var index = req.params.index;
    var colorchoice = colors[index];
    res.send("You picked: " + colorchoice);
});

var burgers = [
    "Cheeseburger",
    "Bleu Cheese burger",
    "Bacon Double cheese burger"
];

var tacos = [
    "Tacos verdes",
    "Tacos al pastor",
    "Tacos grandes"
];


app.get("/taco/:index", function (req, res) {
    var index = req.params.index;
    var selection = tacos[index] || "Sorry, that's not a valid taco";
    res.send("You picked: " + selection);
});

app.get("/burger/:index", function (req, res) {
    var index = req.params.index;
    var burgerchoice = burgers[index] || "Sorry, that's not a valid burger";
    res.send("You picked: " + selection);
});

var correct_number = 10;

app.get("/pick-a-number/:num", function(req, res) {
  var num = req.params.num
  if (num == correct_number){
    res.send("That is the correct number!")
  }
    else (num > correct_number) {
      res.send("This number is too high.")
    }
    else {
      res.send("This number is too low.")
    }
});

// start the server
var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});

//http://localhost:3000/color/3