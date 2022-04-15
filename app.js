var express=require("express");
var cors=require("cors");
var bp=require("body-parser");
const bodyParser = require("body-parser");

var app=express();
app.use(cors());
var url=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
var port=process.env.PORT||3000;
app.listen(port);
app.post('/user',url,function(req,res)
{
    a=req.body.name;
    console.log(a);
    json={name:"a"};
    res.send(json);
})
