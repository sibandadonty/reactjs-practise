import React, { useContext } from "react";
import FavoriteContext from "../store/favorite-context";

function MeetupCard({ id, isFav, imageUrl, title, description, address }) {
  const favCtx = useContext(FavoriteContext);
  console.log(id, isFav);

  if(favCtx.isLoading) {
    return <h1>Loading...</h1>
  } 

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt="meet up" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {address}
        </p>
      </div>
      <button
        onClick={async () => await favCtx.toggleFavorites(id, isFav)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {!isFav ? "Add To Favorites" : "Remove From Favorites"}
      </button>
    </div>
  );
}

export default MeetupCard;
