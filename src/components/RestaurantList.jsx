//restaurant card component
const RestaurantCard = (props) => {
  const { image, name, cuisine, rating } = props.restaurant;
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>Rating: {rating}</p>
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
              restaurant={restaurant}
              key={restaurant.id} 
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantList;