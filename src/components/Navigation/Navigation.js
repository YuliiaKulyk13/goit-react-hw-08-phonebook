import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <NavLink to="/">Main Page</NavLink>
    <NavLink to='/contacts'></NavLink>
  </nav>
);
