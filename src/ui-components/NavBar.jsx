import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;
