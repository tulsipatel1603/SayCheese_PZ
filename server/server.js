const express = require("express");
const app = express();

// Array of cheese objects
const cheeses = [
  {
    name: "Chedder",
    price: 30,
    colour: "Pale Yellow",
    image: "https://www.tasteofhome.com/wp-content/uploads/2022/09/GettyImages-470340853.jpg?fit=700%2C1024",
  },
  {
    name: "Camembert ",
    price: 22,
    colour: "Pale Yellow",
    image: "https://www.corriecooks.com/wp-content/uploads/2023/05/Camembert.jpg",
  },
  {
    name: "Stilton",
    price: 37,
    colour: "White & Blue",
    image: "https://cdn-prod.dairyaustralia.com.au/-/media/dairy/images/products/cheese/blue-cheese/1-2-8-blue.jpg?h=410&w=720&rev=2b7970dfd86547bba32c3d97eebe2856&hash=244BE7803BA4F6A6BB3EA7782827EDFB",
  },
  {
    name: "Parmesan",
    price: 24,
    colour: "Straw",
    image: "https://www.thespruceeats.com/thmb/dwEhfPWZKqfco0QyYObPw8_x5ic=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-parmesan-vs-parmigiano-591198-hero-01-eb04a3ffbe95428b8beb3e9b0becf3d9.jpg",
  },
  {
    name: "Darling Blue",
    price: 37,
    colour: "Blue-Grey",
    image: "https://www.doddingtoncheese.co.uk/wp-content/uploads/2019/02/IMG_2976.jpg",
  },
];

// Route to handle fetching cheeses
app.get("/api", (req, res) => res.json({ cheeses }));

// Catch-all route for undefined routes
app.use((req, res) => res.status(404).send("That route does not exist"));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//improvements - create a database to store instead of this hard code if time requires