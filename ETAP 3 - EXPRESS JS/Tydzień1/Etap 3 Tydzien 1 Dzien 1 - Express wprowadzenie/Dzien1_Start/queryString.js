
//--------------------------QUERY----------------------
const {URLSearchParams} = require('url');
function generateQueryString(params){
    const qs = new URLSearchParams(params);
    return `${qs}`.replace(/\+/g,'%20');
}
// console.log(`http://localhost:3000/?${generateQueryString({
//     name: 'Tomek & Ciri'
// })}`);

// http://localhost:3000/?name=Tomek%20%26%20Ciri

// -------------------APP-----------------------------
const express = require('express');
const app = express();

app.get('/', req=>{
    console.log(req.query)
})

app.listen(3000);