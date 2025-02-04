import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favourites: [],
  favoritesCount: 0,
  isMeetupFavorite: (meetupId) => {},
  addToFavorites: (meetupData) => {},
  removeFromFavorites: (meetupId) => {}
});

export const FavoritesContextProvider = (props) => {
  const [favouriteMeetups, setFavoriteMeetups] = useState([]);

  const isMeetupFavorite = (meetupId) => {};

  const addToFavorites = (meetup) => {};
  
  const removeFromFavorites = (meetupId) => {};

  const ctxObj = {
    favorites: favouriteMeetups,
    favoritesCount: favouriteMeetups.length,
    isMeetupFavorite,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <FavoriteContext.Provider value={ctxObj}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext