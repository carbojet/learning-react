import React from "react";
import ReactDOM from "react-dom/client";

//build a react app with simple functional components
//plan for app building a basic structure of an food app

// header 
//  logo
//  nav items
// body
//  search bar
//  restaurant list
// footer with copyright info

//logo component
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo"
        src="https://marketplace.canva.com/EAEtwkoOhsA/1/0/1600w/canva-yellow-and-black-fun-modern-restaurant-food-logo-VEAoyJP0u7A.jpg"
        alt="FoodApp Logo"
      />
    </div>
  );
}
//nav items component
const NavItems = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li> 
        </ul>
      </div>
    </div>
  );
}
//header component
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
}

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
  );
};
//search bar
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search restaurants..." />
    </div>
  );
}
//body component
const Body = () => {
  const restaurants = [
    { id:1, name: "Pizza Palace", cuisine: "Italian", rating: 4.5, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/fc33bcb7-6c08-4dd2-af0d-4510d5920d97_10591.JPG" },
    { id:2, name: "Burger Barn", cuisine: "American", rating: 4.2, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/75855305-76ff-4551-affd-d2f0c58ddd35_23796.JPG" },
    { id:3, name: "Sushi Spot", cuisine: "Japanese", rating: 4.7, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/75855305-76ff-4551-affd-d2f0c58ddd35_23796.JPG" }
  ];

  return (
    <div className="body">
      <SearchBar />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
//footer component
const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 FoodApp. All rights reserved.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const domRoot = ReactDOM.createRoot(document.getElementById("root"));
domRoot.render(<App />);

