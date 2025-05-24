const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/supplements", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleProducts = [
  {
    name: "Optimum Nutrition Whey Protein",
    category: "Protein",
    brand: "Optimum Nutrition",
    price: 4800,
    description: "High-quality whey protein for muscle recovery.",
    imageUrl: "https://ibb.co/7xGfKbMz",
  },
  {
    name: "Creatine Monohydrate",
    category: "Creatine",
    brand: "Dymatize",
    price: 1300,
    description: "Pure creatine for performance and power.",
    imageUrl: "https://ibb.co/LzrQs6yt",
  },
  {
    name: "Pre-Workout Blueberry",
    category: "Pre Workout",
    brand: "MuscleTech",
    price: 1500,
    description: "Boost energy and focus for your workouts.",
    imageUrl: "https://ibb.co/tpwVvXXZ",
  },
  {
    name: "Omega 3 - SUPPLEMENTS",
    category: "Accessories",
    brand: "Omega",
    price: 600,
    description: "Supports heart and joint health.",
    imageUrl: "https://ibb.co/2Yfjn30y",
  },
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("✅ Sample products inserted");
  mongoose.connection.close();
}

seedDB();
