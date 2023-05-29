const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
url="mongodb://127.0.0.1/db2";
MongoClient.connect(url,function(err,db){
    if(!err)
    {
        console.log("connected");
        app.get('/',function(req,res){
            res.sendFile(__dirname+"/index2.html");
        })
        app.get('/insert.html',function(req,res){
            res.sendFile(__dirname+"/insert.html");
        })
        app.get('/update.html',function(req,res){
            res.sendFile(__dirname+"/update.html");
        })
        app.get('/insert',function(req,res){
           var q=req.query;
            db.collection('stud2').insert(q,function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("Inserted Successfully<br><a href='/'>Home</a>");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud2').find().toArray(function(err,doc){
                if(err)
                console.log("err");
                else
                res.json(doc);
            })
        })
        app.get('/delete',function(req,res){
            db.collection('stud2').deleteMany({examfees:"no"},function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("deleted successfully");
            })
        })
        
        
    }
    else
    console.log(err);
})
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log("listening at port 3000");
})
