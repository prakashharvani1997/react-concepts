import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const { totalFavorites, favorites } = useContext(FavoritesContext);

  let content;
  if (totalFavorites === 0) {
    content = <p> No content yet, Start adding some</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }

  return (
    <section>
      {" "}<h1>Favorites page </h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
