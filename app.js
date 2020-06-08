const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users = [];

app.use( bodyParser.json() );
app.use( express.static('html') );
app.get('/item/:item', (req,res) =>{
    let item = req.params['item'];
    return res.send(item);
} );


app.listen(3005,function(){console.log("app is running");});
