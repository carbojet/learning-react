import { LOGO_URL } from "../utils/constants";

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
export default Header;