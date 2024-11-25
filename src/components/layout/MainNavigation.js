import { Link } from "react-router";

import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React meetups </div>

      <nav>
        <ul>
          <li>
            <Link to={'/'}>All meetups</Link>
          </li>
          <li>
            <Link  to={'/new-meetup'}>New meetups</Link>
          </li>
          <li>
            <Link  to={'/favorites'}>Favrites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
