const express = require('express');
const app = express();

const serverImage = "https://www.centrumxp.pl/api/Images/GetOldImage?pathImage=/Img/Art/Aktualnosci/data-center-upgrade.jpg";

app.get('/', (req, res) => {

    console.log("Server is running...")

    res.send(`<body style="display:flex; flex-direction:column; justify-content: center; align-items: center; height: 100vh; background-color: #000000; background-image: linear-gradient(147deg, #000000 0%, #434343 74%);">
<h2 style="color:lime; align-content:center; margin:0 auto 0 auto"> Hi! <span style="font-style:italic; text-decoration:underline; color:lawngreen">${ req.header('User-Agent')}</span></h2>
<h1 style="color:lime; align-content:center; margin-top: 10vh">Hello World from DevThomas Backend!!! :)</h1>
<img style="align-content: center; justify-content: center; display: block; margin: auto" src=${serverImage} alt="server">
</body>
`)
    console.log(("Hello World from DevThomas Backend!!! :)"))
});
app.listen(3000);