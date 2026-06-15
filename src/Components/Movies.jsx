import MovieCard from "./MovieCard";
import { useState } from "react";

export default function Movies({ MovieList }) {
  const [watchlist, setwatchlist] = useState([]);
  const handleAddToWatchList = (MovieToAdd) => {
    setwatchlist([...watchlist, MovieToAdd]);
  };
  console.log(watchlist);

  const checkInWatchlist = (id) => {
    return watchlist.find((Movie)=>id === Movie.id
    )
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
            />
          );
        })}
      </div>
    </section>
  );
}
