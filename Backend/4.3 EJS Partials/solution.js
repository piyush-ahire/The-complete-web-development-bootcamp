import express from "express";

const app = express();
const port = 3000;

//static files
app.use(express.static("public"));
//app.use('/styles',express.static(__dirname + 'public/styles'));

//views
app.set('views', './views');
app.set('viewengine', 'ejs');


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
