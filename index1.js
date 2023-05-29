const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
url="mongodb://127.0.0.1/db2";
MongoClient.connect(url,function(err,db){
    if(!err)
    {
        console.log("connected");
        app.get('/',function(req,res){
            res.sendFile(__dirname+"/index.html");
        })
        app.get('/insert.html',function(req,res){
            res.sendFile(__dirname+"/insert.html");
        })
        app.get('/update.html',function(req,res){
            res.sendFile(__dirname+"/update.html");
        })
        app.get('/insert',function(req,res){
            var name=req.query.name;
            var usn=req.query.usn;
            var marks=Number(req.query.marks);
            var subject=req.query.subject;
            db.collection('stud1').insert({name:name,usn:usn,marks:marks,subject:subject},function(err,doc){
                if(err)
                console.log(err);
                else
                res.send("Inserted Successfully<br><a href='/'>Home</a>");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud1').find().toArray(function(err,doc){
                if(err)
                console.log("err");
                else
                res.json(doc);
            })
        })
        app.get('/display20',function(req,res){
            db.collection('stud1').find({marks:{$lt:20}}).toArray(function(err,doc){
                if(err)
                console.log("err");
                else
                res.json(doc);
            })
        })
        app.get('/display20ejs',function(req,res){
            db.collection('stud1').find().toArray(function(err,doc){
            
                res.render("disp.ejs",{stud:doc});
            })
        })
        app.get('/display20html',function(req,res){
            db.collection('stud1').find().toArray(function(err,doc){
            if(err)
            console.log(err)
            else
            var text='';
            var list='';
            doc.forEach(function(item){
                if(item.marks<20)
                list+=`<li>name=${item.name}<br>marks=${item.marks}</li>`
            })
            var html=`<ul>${list}</ul>`
            res.send(html);
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
