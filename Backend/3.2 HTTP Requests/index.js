import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>hello</h1>");
})

app.get("/about", (req, res)=>{
    res.send("<p><h1>About me</h1></p>");
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact us</h1>");
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})