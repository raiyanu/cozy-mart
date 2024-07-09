import axios from "axios";
import { readFile, writeFile } from "fs/promises";
import { log as p } from "console";
import { json } from "react-router-dom";
const data = await JSON.parse(await readFile("./public/products.json", "utf8"));
const url = "http://localhost:3999/products";

let id = 0;
let productData = [];
function getRandomDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
}

const template = async (catagory, subcatagory, product) => {
  id = id + 1;
  let productTemplate = {
    id: id,
    name: product.name,
    description: product.description,
    price: parseFloat((product.price * 75) / 2 / 2).toFixed(2),
    category: catagory,
    subcatagory: subcatagory,
    stock: product.stock,
    tags: product.tags,
    image: product.image,
    ratings: product.ratings,
    sales: product.sales,
    reviews: product.reviews,
    date: getRandomDate("2024-01-01", "2024-07-10"),
  };
  productData.push(productTemplate);
};
for (const catagory in data) {
  for (const subcatagory in data[catagory]) {
    p("----------------------------------------------");
    Object.keys(data[catagory][subcatagory]).forEach((product) => {
      template(catagory, subcatagory, data[catagory][subcatagory][product]);
    });
  }
}
console.log(productData);

await writeFile(
  "./productDatabase.json",
  JSON.stringify(productData),
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
