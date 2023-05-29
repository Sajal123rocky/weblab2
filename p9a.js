const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/p9a.html');
})
app.get('/reg',function(req,res){
    var text="<h1>Registration page</h1>\
<a href='/'>Home</a><br><a href='/announce'>Announcement</a><br><a href='/contact'>Contact</a><br>"
res.send(text);
})
app.get('/announce',function(req,res){
    var text="<h1>Announcement page</h1>\
<a href='/'>Home</a><br><a href='/reg'>Registration</a><br><a href='/contact'>Contact</a><br>"
res.send(text);
})
app.get('/contact',function(req,res){
    var text="<h1>Contact page</h1>\
<a href='/'>Home</a><br><a href='/announce'>Announcement</a><br><a href='/reg'>Registration</a><br>"
res.send(text);
});
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log("listening at port 3000");
})
