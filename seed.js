const sequelize = require('./sequelize');
const Product = require('./models/Product');

const products = [
  {
    name: "Optimum Nutrition Whey Protein",
    category: "Protein",
    brand: "Optimum Nutrition",
    price: 4800,
    description: "High-quality whey protein.",
    imageUrl: "/whey.png",
  },
  // ... other products
];

(async () => {
  await sequelize.sync({ force: true }); // Drops & recreates tables
  await Product.bulkCreate(products);
  console.log("✅ Seeded successfully");
})();
