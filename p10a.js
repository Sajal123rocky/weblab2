const express=require('express');
const app=express();
var count=0;
function logger(req,res,next){
    console.log("loggen in");
    count++;
    next();
}
app.use(logger);
var visit=function(req,res,next){
    res.visit=count;
    console.log("visited"+count);
    next();
}
app.use(visit);
app.get('/',function(req,res){
    res.send("<h3>visited </h3> "+res.visit);
})
app.listen(3000);