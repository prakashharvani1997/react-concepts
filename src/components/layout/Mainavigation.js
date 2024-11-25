import { Link } from "react-router";

function MainNavigation() {
  return (
    <header>
      <div>React meetups </div>

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
