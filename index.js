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

// start the server
var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});

//http://localhost:3000/color/3