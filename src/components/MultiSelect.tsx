import { useState } from "react";
import { food_list } from "../assets/assets.js";

// Define a proper interface for the food items

interface FoodItem {
  name: string;
  image: string;
  description: string;
  type: string;
  rating_starts: string;
  food_area: string;
}

const foodItems: FoodItem[] = food_list;

const Foodlist = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Select All",
    "South Indian",
    "North Indian",
    "Contiental",
  ];

  // Function to handle category change

  const handleCategoryChange = (category: string) => {
    if (category === "Select All") {
      if (selectedCategories.length === categories.length - 1) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories(categories.slice(1));
      }
    } else {
      // Toggle selection for the specific category

      setSelectedCategories((prevCategories) =>
        prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
          : [...prevCategories, category]
      );
    }
  };

  // Filtered food list based on selected categories
  const filteredFoodList = foodItems.filter((ele: FoodItem) => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(ele.type);
  });

  return (
    <div className="foodContainer">
      <div>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={
                category === "Select All"
                  ? selectedCategories.length === categories.length - 1 // Check if all are selected
                  : selectedCategories.includes(category) // Check if specific category is selected
              }
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      {filteredFoodList.map((ele, index) => (
        <div key={index} className="foodItem">
          <h2>{ele.name}</h2>
          <img src={ele.image} alt={ele.name} />
          <p>{ele.description}</p>
          <p>{ele.type}</p>
          <p>{ele.rating_starts} stars</p>
          <p>{ele.food_area}</p>
        </div>
      ))}
    </div>
  );
};

export default Foodlist;
