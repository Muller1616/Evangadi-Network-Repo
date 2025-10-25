import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser"; //for q3
import cors from "cors"; //for q3
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// middleware setup for q3
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// cors()	Enables cross-origin access handles	HTTP headers if it is not	Browser blocks frontend calls
// bodyParser.urlencoded({ extended: true }) handles	Parses form submissions	URL-encoded data, if it is not	req.body = undefined for forms
// bodyParser.json()	Parses API requests (from React) handles	JSON if it is not available	req.body = undefined for JSON

// serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// create a connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "muller16",
  database: "myDB",
  multipleStatements: true, // allows running multiple create tables
});

// connect to the database
connection.connect((err) => {
  if (err) {
    console.log("error occurred:", err.message);
  } else {
    console.log(
      `successfully connected to the ${connection.config.database} database`
    );
  }
});

// cretee tables
const createTablesQuery = `

CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_url VARCHAR(255)
);

CREATE TABLE descriptions (
  description_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  product_brief TEXT,
  product_full_description TEXT,
  product_img VARCHAR(255),
  product_link VARCHAR(255),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE prices (
  price_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  starting_price VARCHAR(50),
  price_range VARCHAR(50),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  user_id INT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
`;

// insert as a test user
const insertUserQuery = `
INSERT INTO users (username, password) VALUES ('Muller', 'muller16');
`;

//  execute directly when app runs
connection.query(createTablesQuery, (err) => {
  if (err) {
    console.log("error occurred on database:", err.message);
  } else {
    console.log("tables created successfully");

    // insert after tables are created
    connection.query(insertUserQuery, (err) => {
      if (err) {
        console.log("error occured during insert user:", err.message);
      } else {
        console.log("user inserted successfully");
      }
    });
  }
});

// execute along /install URL using Express
app.get("/install", (req, res) => {
  connection.query(createTablesQuery, (err) => {
    if (err) {
      console.error("error creating tables under /install:", err.message);
      res.status(500).send("failed to create tables.");
    } else {
      console.log("tables created successfully under /install");

      // insert default user safely
      connection.query(insertUserQuery, (err) => {
        if (err) {
          console.log("error occureed during user insert under /install:", err.message);
        } else {
          console.log("user inserted successfully under /install");
        }
      });

      res.send("all tables have been created successfully over /install!");
    }
  });
});


// for q3

app.post("/add-product", (req, res)=>{
  const {product_name, product_url} = req.body;

  if (!product_name || !product_url) {
    return res.status(400).send("product name and product URL are required.");
  }
  const insertProductQuery = `INSERT INTO products (product_name, product_url) VALUES (?, ?)`;

  connection.query(insertProductQuery, [product_name, product_url], (err, result) =>{
    if (err){
      console.error("error inserting product:", err.message);
      return res.status(500).send("failed to add product.");
    }

    console.log(`product added: ${product_name}`)
    res.send(
      `<h2 style = "color: green;">${product_name} added successfully!</h2>`)
  })

})

// start Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});






export default app;
