
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/Mainavigation";

function App() {
  return (
    <>
    <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}>

        </Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}>

        </Route>
        <Route path="favorites" element={<FavoritesPage />}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
