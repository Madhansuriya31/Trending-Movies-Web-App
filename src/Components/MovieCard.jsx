import { useState } from "react";
import { urltoposterPath } from "../utility/movieutility";
import Movies from './Movies';

export default function MovieCard({Movie, isfav, handleAddToWatchList, handleRemoveToWatchList}) {
  
  const {poster_path,title} = Movie;
  const posterpath = urltoposterPath(Movie.poster_path);
  return (
    <div className="relative h-70 w-50 rounded-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
      {!isfav && <div
          className="absolute text-2xl right-0 m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={()=>handleAddToWatchList(Movie)}
        >
          😍
        </div>}
        {isfav && <div
          className="absolute text-2xl right-0 m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={()=>handleRemoveToWatchList(Movie.id)}
        >
          ❌
        </div>}
      <img className="h-full w-full rounded-2xl" src={posterpath} alt="Poster-Image" />
      <p className="absolute bottom-0 w-full bg-black/80 text-white text-center text-xl py-2">
        {title}
      </p>
    </div>
  );
}
