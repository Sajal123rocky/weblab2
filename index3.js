const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
url="mongodb://127.0.0.1/db2";
MongoClient.connect(url,function(err,db){
    if(!err)
    {
        console.log("connected");
        app.get('/',function(req,res){
            res.sendFile(__dirname+"/index3.html");
        })
        app.get('/insert.html',function(req,res){
            res.sendFile(__dirname+"/insert.html");
        })
        app.get('/update.html',function(req,res){
            res.sendFile(__dirname+"/update.html");
        })
        app.get('/insert',function(req,res){
           var q=req.query;
            db.collection('stud3').insert(q,function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("Inserted Successfully<br><a href='/'>Home</a>");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud3').find().toArray(function(err,doc){
                if(err)
                console.log("err");
                else
                res.json(doc);
            })
        })
        app.get('/update',function(req,res){
            var name=req.query.name;
            var grade=req.query.grade;
            db.collection('stud3').updateOne({name:name},{$set:{grade:grade}},function(err,doc){
                if(err)
                console.log(err);
                else
                {
                console.log(res.nModified);
                if(doc.modifiedCount==1)
                res.send("sucessfully updated");
                else
                res.send("not success");
                }
            })
        })
        app.get('/updateres',function(req,res){
            var name=req.query.name;
            var grade=req.query.grade;
            db.collection('stud3').updateOne({name:name},{$set:{grade:grade}},function(err,doc){
                if(err)
                console.log(err);
                else
                {
                console.log(res.nModified);
                if(doc.modifiedCount==1)
                db.collection('stud3').find().toArray(function(err,doc){
                    var text='';
                    var list='';
                    doc.forEach(function(item){
                        list+=`<li>${item.name}<br>${item.grade}</li>`
                    })
                    text=`<h1>Successfully updated and result are</h1><ul>${list}</ul>`
                    res.send(text);
                })
                else
                res.send("not success");
                }
            })
        })
        app.get('/displayres',function(req,res){
            db.collection('stud3').find({},{name:1,grade:1}).toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                res.json(doc);
            })
        })
        app.get('/displaySgrade',function(req,res){
            db.collection('stud3').find({grade:"S"}).toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                res.json(doc);
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
