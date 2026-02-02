import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";

//body component
const Body = () => {
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
        fetch("https://www.namastedev.com/api/v1/listRestaurants")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const fetchData = data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setRestaurants(fetchData);
          setFilteredRestaurants(fetchData);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        }); 
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
  //state variable for filtered restaurants
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  //restaurant filter function
  const getFilterdRestaurants = (filter) => {

    const filteredList = restaurants.filter((restaurant) => {
      if(filter.name){
        return restaurant?.info?.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if(filter.avgRating){
        console.log("Filtering for avgRating:", filter.avgRating);
        return restaurant?.info?.avgRating >= filter.avgRating;
      }
      return true;
    });
    console.log("Filtered List:", filteredList);
    setFilteredRestaurants(filteredList);
  }

  if(restaurants.length === 0){
    return <h1>Loading...</h1>;
  }
  return (
    <div className="body">
      {/* <SearchBar /> */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onKeyUp={(e) => getFilterdRestaurants({name: e.target.value})}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="top-rated-filter" onClick={() => getFilterdRestaurants({avgRating: 4.5})}>
          Top Rated
        </button>
      </div>
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}

export default Body;