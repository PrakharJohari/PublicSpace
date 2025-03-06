import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index.ejs")
  });
  
  app.use(express.static("public"));

  app.get("/home",(req,res)=>{
    res.render("index.ejs")
  })

  app.get("/login", (req, res) => {
    res.render("login.ejs")
  })
  
    app.get("/Create", (req, res) => {
    res.render("create.ejs")
  });


  let blogs = []; 
  let idCounter = 1;

app.post("/Create", (req, res) => {
    const title = req.body["Title"];
    const content = req.body["Content"];
    
    blogs.push({ title, content }); 
    res.redirect("/view"); 
});

  
   app.get("/View",(req,res)=>{
    res.render("view.ejs",{blogs:blogs});

   });
   




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  