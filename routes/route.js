// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const { CartModel } = require("../models/cartModel");
// const {UserModel}=require("../models/userModel")
// const Route = express.Router();


// const app = express();


// // Middleware for parsing JSON
// app.use(express.json());

// // Secret key for token generation
// const secretKey = "fashionflare";

// // Mock users database
// const users = [
//   {
//     id: 1,
//     username: "john",
//     password: "$2b$10$zglJZn8Wl7imndvHdX9zJ.MDKCawP/CIjxEvJzGYZ4w4duQQY5q5C" // Password: "password"
//   },
//   {
//     id: 2,
//     username: "jane",
//     password: "$2b$10$zglJZn8Wl7imndvHdX9zJ.MDKCawP/CIjxEvJzGYZ4w4duQQY5q5C" // Password: "password"
//   }, {
//     id: 3,
//     username: "vishal@gmail.com",
//     password: "$2b$04$3a3DV5.t0AOm7mMT1I/K1.uiRpZ7zbY9hmVw6d3zL8z02m.9c6FYW",
   
//   }
// ];

// // Mock products database
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     user_id: 1
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     user_id: 2
//   },{
//     id: 3,
//     name: "Product 3",
//     user_id: 3
//   }
// ];

// // Route for user authentication and token generation
// // Route.post("/login",async (req, res) => {
// //   const { email, password } = req.body;
// //   const user =await  UserModel.findOne( {email});

// //   if (!user) {
// //     return res.status(401).json({ message: "Invalid username or password" });
// //   }

// //   bcrypt.compare(password, user.password, (err, result) => {
// //     if (err) {
// //       return res.status(500).json({ message: "Server error" });
// //     }

// //     if (!result) {
// //       return res.status(401).json({ message: "Invalid username or password" });
// //     }

// //     const token = jwt.sign({ id: user.id }, secretKey);
// //     return res.json({ token });
// //   });
// // });

// // Middleware for token verification
// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   console.log('authHeader: ', authHeader);

//   if (!authHeader) {
//     return res.status(401).json({ message: "Authorization header missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, secretKey);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// // Route for getting products for a particular user

// Route.get("/products", verifyToken, async(req, res) => {
//   const userId = req.userId;
//   console.log('userId: ', userId);
//   // const userProducts = products.filter(product => product.user_id === userId);
//   // return res.json(userProducts);
//   try {
//     const allCart = await CartModel.find({userID:userId});
//     console.log('allCart: ', allCart);
//     res.status(200).send(allCart);
//   } catch (err) {
//     // console.log(err);
//     res.send(err);
//   }
// });

// // Route for adding products for a particular user
// Route.post("/products", verifyToken,async (req, res) => {
//   const userId = req.userId;
//   console.log('userId: ', userId);
//   // const { name } = req.body;
//   console.log('name: ',  req.body);
// try {
//   const newProduct = { ...req.body,userID: userId};
//   const cart = await new CartModel(newProduct);
//     await cart.save();
  
// } catch (error) {
//   res.send(error)
// }
//   // products.push(newProduct);
//   // return res.json(newProduct);
// });

// // Start the server

// module.exports = { Route };