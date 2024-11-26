import { Link } from "react-router";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
function MainNavigation() {

  const { totalFavorites} = useContext(FavoritesContext)


  return (
    <header className={classes.header}>
      <div className={classes.logo}> React meetups </div>

      <nav>
        <ul>
          <li>
            <Link to={'/'}>All meetups</Link>
          </li>
          <li>
            <Link to={'/new-meetup'}>New meetups</Link>
          </li>
          <li>
            <Link to={'/favorites'}>
            Favrites
            <span className={classes.badge}> {totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
