import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <span>Header Component</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
