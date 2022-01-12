const express = require('express');
const app = express();
// console.log(app);
// const {URLSearchParams}  = require('url');

// const qs = new URLSearchParams({
//     name:'Tomek & React:D'
// });

app.get('/',(req)=>{
    console.log(req.query);
})

// console.log(`http://localhost:3000/${qs.toString()}`)

const allowedIps = ['localhost', '127.0.0.1', '::ffff:127.0.0.1'];

app.get('/',(req) => {
    if(allowedIps.includes(req.ip)){
        console.log("Hi WOOORLD!! :)");
        console.log(req.hostname);
        console.log(req.ip);
        console.log(req.ips);
    }else{
        console.log("SIO!!!!");
        console.log(req.hostname);
        console.log(req.ip);
        console.log(req.ips);
    }
})

app.get('/allmethods',(req)=>{
    console.log("SERVER IS RUNNING...")
    const {url, originalUrl, path}=req;
    console.log({url, originalUrl, path});
    console.log(req.protocol);
    console.log(req.secure);
})

app.get('/interesting',(req)=>{
    console.log("SERVER IS RUNNING...")
    const {url, originalUrl, path}=req;
    console.log({url, originalUrl, path});
    console.log(req.protocol);
    console.log(req.secure);
})


app.post('/add',()=>{
    console.log("Something has bee added :) ")
})

app.patch('/update', ()=>{
    console.log("Something has been updated")
})


app.listen(3000);