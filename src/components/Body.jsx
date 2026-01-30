import { useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANTS_MOCK_DATA } from "../utils/constants"; 

//body component
const Body = () => {
  //state variable for filtered restaurants
  const [restaurants, setRestaurants] = useState(RESTAURANTS_MOCK_DATA);

  //filter handler for top rated restaurants
  const FilterHandler = (props) => {
    const { restaurant } = props;
    const filteredList = restaurants.filter(
      (restaurant) => restaurant.rating >= 4.5
    );
    setRestaurants(filteredList);
    console.log("Filtered Restaurants:", filteredList);
  };

  //search bar
  const SearchBar = (props) => {
    const { restaurant } = props;
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search restaurants..." />
        <button className="top-rated-filter" onClick={() => FilterHandler(restaurant)}>Top Rated</button>
      </div>
    );
  };

  return (
    <div className="body">
      <SearchBar restaurant={restaurants} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default Body;