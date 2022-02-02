import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/ahmet",(req,res)=>{
    res.send("Hello Ahmet");
})
app.get("/user/:name",(req,res)=>{
    const name = req.params.name;
    res.send("Hello " + name);
})
app.get("*",(req,res)=>{
    res.send("Unbekannt");
})




app.listen(PORT, ()=>{
    console.log(PORT + " arbeitet...");
});