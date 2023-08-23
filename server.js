const express = require("express");
const app = express();

const port = 5004;

app.get("/", (req, res) => {
  res.send(`
    <h1>Home page Profile</h1>
    <ul>
      <li><a href="/about">About Me</a></li>
      <li><a href="/contact">Contact Info</a></li>
      <li><a href="/hobbies">My Hobbies</a></li>
      <li><a href="/food">My Favorite Food</a></li>
      <li><a href="/travel">Countries I Want to Visit</a></li>
      <li><a href="/fear">Things I Have Phobia From</a></li>
      <li><a href="/sports">Sports I Watch</a></li>
      <li><a href="/education">Degree</a></li>
      <li><a href="/Car">Favorite cars</a></li>
      <li><a href="/dessert">Favorite Dessert</a></li>
    </ul>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>About Me</h1>
    <p>My name is Mona. I am a student at Perscholas.</p>
    <ul>
      <li><a href="/contact">Contact Info</a></li>
      <li><a href="/hobbies">My Hobbies</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact info</h1>
    <p>my email: mona.hassan@gmail.com</p>
    <ul>
      <li><a href="/about">About Me</a></li>
      <li><a href="/hobbies">My Hobbies</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/hobbies", (req, res) => {
  res.send(`
    <h1>My Hobbies</h1>
    <p>I like to travel and ride my bicycle.</p>
    <ul>
      <li><a href="/about">About Me</a></li>
      <li><a href="/contact">Contact Info</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/food", (req, res) => {
  res.send(`
    <h1>My favorite food</h1>
    <p>I like many varieties of food cuisine. Some are Asian, Indian, and Middle Eastern cuisines.</p>
    <ul>
      <li><a href="/travel">Countries I Want to Visit</a></li>
      <li><a href="/fear">Things I Have Phobia From</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/travel", (req, res) => {
  res.send(`
    <h1>Countries I want to visit</h1>
    <p>I would love to visit Switzerland, Japan, Tanzania, and Morocco.</p>
    <ul>
      <li><a href="/food">My Favorite Food</a></li>
      <li><a href="/sports">Sports I Watch</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/fear", (req, res) => {
  res.send(`
    <h1>Things I have phobia from</h1>
    <p>Spiders and height.</p>
    <ul>
      <li><a href="/food">My Favorite Food</a></li>
      <li><a href="/sports">Sports I Watch</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.get("/sports", (req, res) => {
  res.send(`
    <h1>Sports I watch</h1>
    <p>I like to watch world soccer matches and the swimming Olympic races.</p>
    <ul>
      <li><a href="/travel">Countries I Want to Visit</a></li>
      <li><a href="/fear">Things I Have Phobia From</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});
app.get("/dessert", (req, res) => {
  res.send(`
      <h1>favorite dessert</h1>
      <p>I like banana pudding </p>
      <ul>
        <li><a href="/travel">Countries I Want to Visit</a></li>
        <li><a href="/fear">Things I Have Phobia From</a></li>
        <li><a href="/">Home Page Profile</a></li>
      </ul>
    `);
});
app.get("/car", (req, res) => {
  res.send(`
      <h1>favorite car</h1>
      <p> My favorite car is a range rover</p>
      <ul>
        <li><a href="/travel">Countries I Want to Visit</a></li>
        <li><a href="/fear">Things I Have Phobia From</a></li>
        <li><a href="/">Home Page Profile</a></li>
      </ul>
    `);
});

app.get("/education", (req, res) => {
  res.send(`
    <h1>Degree I have</h1>
    <p>I have a Bachelor degree in physics</p>
    <ul>
      <li><a href="/travel">Countries I Want to Visit</a></li>
      <li><a href="/fear">Things I Have Phobia From</a></li>
      <li><a href="/">Home Page Profile</a></li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
