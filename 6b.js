const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/6b.html');
})
app.get('/cse',function(req,res){
    res.sendFile(__dirname+'/6b1.html');
})
app.get('/ise',function(req,res){
    res.sendFile(__dirname+'/6b2.html');
})
app.get('/me',function(req,res){
    res.sendFile(__dirname+'/6b3.html');
})
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log('listening at port 3000');
})