import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

//logo component
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt="FoodApp Logo"
      />
    </div>
  );
}
//nav items component
const NavItems = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="nav-container">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                console.log("Button clicked");
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
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
export default Header;