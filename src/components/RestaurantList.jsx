//restaurant card component
const RestaurantCard = (props) => {
  const baseImageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant;
  return (
    <div className="restaurant-card">
      <img src={baseImageUrl + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <p>{cuisines}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
}
const RestaurantList = (props) => {
  const { restaurants } = props;
  return (
    <div className="restaurant-container">
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              restaurant={restaurant.info}
              key={restaurant.info.id} 
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantList;