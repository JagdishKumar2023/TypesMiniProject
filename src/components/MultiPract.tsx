import { useState } from "react";
import { food_list } from "../assets/assets.js";

interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating_starts: string;
  type: string;
  food_area: string;
}

const foodItems: FoodItem[] = food_list;

const MultiPract = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "All Select",
    "South Indian",
    "North Indian",
    "Contiental",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(categories === "Select All" ? null : category);
  };

  return (
    <div>
      {categories.map((ele, index) => (
        <label key={index}>inp</label>
      ))}

      {food_list.map((ele, index) => (
        <div key={index}>
          <p>{ele.name}</p>
          <img src={ele.image} alt="image" />
          <p>{ele.description}</p>
          <p>{ele.price}</p>
          <p>{ele.rating_starts}</p>
          <p>{ele.food_area}</p>
        </div>
      ))}
    </div>
  );
};

export default MultiPract;
