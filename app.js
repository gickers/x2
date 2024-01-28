const express = require('express');

const app = express ();

app.set('view engine','ejs');

app.use(express.static('public'))

app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/brussels',(req,res)=>{
    res.render('brussels');
})
app.get('/carrots',(req,res)=>{
    res.render('carrots');
})
app.get('/cauliflower',(req,res)=>{
    res.render('cauliflower');
})
app.get('/gravy',(req,res)=>{
    res.render('gravy');
})
app.get('/ham',(req,res)=>{
    res.render('ham');
})
app.get('/pigs',(req,res)=>{
    res.render('pigs');
})
app.get('/roastpotatoes',(req,res)=>{
    res.render('roastpotatoes');
})
app.get('/turkey',(req,res)=>{
    res.render('turkey');
})
app.get('/yorkshire',(req,res)=>{
    res.render('yorkshire');
})