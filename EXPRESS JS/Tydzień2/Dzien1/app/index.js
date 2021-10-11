const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(cookieParser());

app.get("/book",(req,res)=>{
console.log(req.cookies)

    res.send('ok')
})

app.get('/in')

app.listen("3000");