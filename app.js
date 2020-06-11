const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users = [];

app.use( bodyParser.json() );
app.use( express.static('html') );
let urlEncoded = bodyParser.urlencoded({ extended: true });

app.get('/item/:item', (req,res) =>{
    let item = req.params['item'];
    return res.send(item);
} );
app.post('/practice', urlEncoded,(req,res) =>{
    // res.send(`Full name is:${req.fname} ${req.lname}.`);
    console.log(req.body);
    // let params = req.body.fname;
    // console.log(params);
    let input = req.body.fname
    return res.redirect(`/item/${input}`);
    return res.send(params);

} );


app.listen(3008,function(){console.log("app is running");});
