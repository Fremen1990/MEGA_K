const express = require('express');
const cookieParser=require('cookie-parser');

const app = express();

app.use(express.static('public'));

let yes=0;
let no=0;

app.get('/vote/yes', (req,res)=>{
  yes++;
  console.log(yes)
  res.send("Thank you for voting!");
})

app.get('/vote/no', (req,res)=>{
    no++;
    console.log(no)
    res.send("Thank you for not voting!")
})

app.get("/votes/check", (req,res)=>{

res.send(`Query results: YES ${yes} and NO ${no}`)
})


app.listen(3000);