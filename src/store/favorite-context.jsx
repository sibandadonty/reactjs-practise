import { createContext, useState } from "react";

const FavoriteContext = createContext({
  toggleFavorites: async (meetupId, isFav) => {},
  isLoading: false,
});

export const FavoritesContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorites = async (meetupId, isFav) => {
    setIsLoading(true);
    const res = await fetch(
      `${import.meta.env.VITE_DATABASE_URL_BASE}/meetups/${meetupId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          isFav: !isFav,
        })
      
      }
    );
    const data = await res.json();
    setIsLoading(false);
  };

  const ctxObj = {
    toggleFavorites,
    isLoading,
  };

  return (
    <FavoriteContext.Provider value={ctxObj}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
