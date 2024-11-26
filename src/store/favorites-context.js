import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavoritesHandler(meetup) {
    setFavorites(prevFav => {
      return prevFav.concat(meetup);
    });
  }
  function removeFavoritesHandler(meetupid) {
    setFavorites(prevFav => {
      return prevFav.filter(x => x.id !== meetupid);
    });
  }
  function itemsIsfavoritesHandler(meetupid) {
    return favorites.some(x => x.id === meetupid);
  }

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFav: addFavoritesHandler,
    removeFav: removeFavoritesHandler,
    itemsIsFav: itemsIsfavoritesHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
