import React, { useEffect, useState } from "react";
import { GetMovieFromLocalStorege, generefromid } from "../utility/movieutility";
import { ALL_GENRE } from "../utility/Constants";
import { filterbasedongenre,filterbasedonsearch } from "../utility/movieutility";
//import WatchList from './Watchlist';

function WatchList() {
  const [WatchList,setWatchlist] = useState(GetMovieFromLocalStorege);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRE);
  const[search,setSearch] = useState("");

  const gener_list =[ ...new Set(WatchList.map((movie) => generefromid(movie.genre_ids[0])))].sort();
  console.log(gener_list);

  const handelgenrehiglight = (genre)=>{
    setSelectedGenre(genre);
  }

  const handleAscSorting = (param) => {
    const WatchListCopy = [...WatchList];
    const sortedWatchlist = WatchListCopy.sort((movie1, movie2) => {
      return movie1[param] - movie2[param];
    })
    console.log(sortedWatchlist);
    setWatchlist(sortedWatchlist);
  }

  const handleDescSorting = (param) => {
    const WatchListCopy = [...WatchList];
    const sortedWatchlist = WatchListCopy.sort((movie1, movie2) => {
      return movie2[param] - movie1[param];
    })
    console.log(sortedWatchlist);
    setWatchlist(sortedWatchlist);
  }

  const sortgenreAsc = () => {
     const WatchListCopy = [...WatchList];
     const sortedWatchlist = WatchListCopy.sort((movie1, movie2) => {
      return generefromid(movie1.genre_ids[0]).localeCompare(
        generefromid(movie2.genre_ids[0])
      );
    });
    setWatchlist(sortedWatchlist);
  }

  const sortgenreDesc = () => {
     const WatchListCopy = [...WatchList];
     const sortedWatchlist = WatchListCopy.sort((movie1, movie2) => {
      return generefromid(movie2.genre_ids[0]).localeCompare(
        generefromid(movie1.genre_ids[0])
      );
    });
    setWatchlist(sortedWatchlist);
  }

  

  const Genre = () => (
    <div className="flex justify-center m-4">
      {[ALL_GENRE,...gener_list].map((genre,index) => {
        const isActive = genre === selectedGenre;
        const baseStyles =
          "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer";
        const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
        return (
          <div
          key={genre}
            onClick={()=>handelgenrehiglight(genre)}
            className={`${baseStyles} ${bgColor}`}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Genre />

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movie"
          className="h-12 w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
          type="text"
          value = {search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      onClick={()=>handleAscSorting("vote_average")}
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                    ></i>
                    Ratings
                    <i
                      onClick={()=>handleDescSorting("vote_average")}
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div><i
                      onClick={() => handleAscSorting("popularity")}
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                    ></i>
                    Popularity
                    <i
                      onClick={()=>handleDescSorting("popularity")}
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    ></i></div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div><i
                      onClick={sortgenreAsc}
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                    ></i>
                    Genre
                    <i
                      onClick={sortgenreDesc}
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    ></i></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {filterbasedonsearch(filterbasedongenre(WatchList,selectedGenre),search).map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-24 w-40 object-fit object-cover rounded-r-lg"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">{generefromid(movie.genre_ids[0])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default WatchList;