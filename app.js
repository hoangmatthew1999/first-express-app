const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const users = [{number: "bye"}];

app.use( bodyParser.json() );
app.use( express.static('html') );
let urlEncoded = bodyParser.urlencoded({ extended: true });

app.get('/item/:item', (req,res) =>{
    let item = req.params['item'];
    let obj = {number: item};
    console.log(obj);
    users.push(obj);
    console.log(users[0]);
    return res.json(users);
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
app.post('/delete/',urlEncoded,(req,res) => {
    res.sendFile(__dirname + "/html/delete.html");
    console.log(req.body);
    // console.log("hello");
    return res.redirect('/delete-object');
    // res.send(`route created`);
});
app.get('/delete-object/',urlEncoded,(req,res) => {
    // console.log(req.body);
    // console.log(users[0].number);
    // console.log("after the key");
    for(let i = 0; i< users.length;i++){
        if( users[i].number == "bye"){
            users[i].number = "brian";
            console.log(users);
        }
    }
    return res.send("in the route");
    // res.send(`route created`);
});



app.listen(3010,function(){console.log("app is running");});
