import { useContext } from "react";
import Card from "../Card/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ meetup: { id,image, title, description, address } }) {

  const { itemsIsFav,removeFav,addFav} = useContext(FavoritesContext)

  const itemIsFavorites = itemsIsFav(id)

  function toggleFavStatusHandler() {
    
    if(itemIsFavorites){
      removeFav(id)
    }else{

      addFav({
        id,image, title, description, address 
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>
            {title}
          </h3>
          <address>
            {address}
          </address>
          <p>
            {description}
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>{itemIsFavorites ? 'Remove From Favorites' :'To Favorites'} </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
