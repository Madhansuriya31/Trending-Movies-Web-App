import MovieCard from "./MovieCard";
import { useState } from "react";
import Watchlist from './../Pages/Watchlist';
import { UpdateLocalStorege ,GetMovieFromLocalStorege } from "../utility/movieutility";

export default function Movies({ MovieList }) {
  const [watchlist, setwatchlist] = useState(GetMovieFromLocalStorege);
  
  const handleAddToWatchList = (MovieToAdd) => {
    const updatedWatchList = [...watchlist];
    updatedWatchList.push(MovieToAdd);
    UpdateLocalStorege(updatedWatchList)
    setwatchlist(updatedWatchList);
  };

  const handleRemoveToWatchList =(id)=>{
    const filteredWatchlist = watchlist.filter((Movie)=>id !== Movie.id);
    setwatchlist(filteredWatchlist);
     UpdateLocalStorege(filteredWatchlist)
  }

  //To Check  the Movie is already in the Watchlist or Not
  const checkInWatchlist = (id) => {
    return watchlist.find((Movie)=>id === Movie.id)
  };

  
  return (
    <section className="p-2">
      <h3 className="font-extrabold text-center text-3xl p-4">
        Trending Movies
      </h3>
      <div className="flex flex-wrap justify-evenly gap-8 ">
        {MovieList.map((Movie) => {
          return (
            <MovieCard
              key={Movie.id}
              Movie={Movie}
              isfav={checkInWatchlist(Movie.id)}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveToWatchList={handleRemoveToWatchList}
            />
          );
        })}
      </div>
    </section>
  );
}
