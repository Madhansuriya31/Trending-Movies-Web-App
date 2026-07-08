import { ALL_GENRE, moviegenremap } from "./Constants";

const basePath = "https://image.tmdb.org/t/p/original";
const LocalStorageKey = "Watchlist";

export const urltoposterPath = (url) => {
  return `${basePath}${url}`;
};

export const UpdateLocalStorege = (List) => {
  localStorage.setItem(LocalStorageKey, JSON.stringify(List));
};
export const GetMovieFromLocalStorege = () => {
  const Watchlist = localStorage.getItem(LocalStorageKey);
  if (Watchlist) {
    return JSON.parse(Watchlist);
  }
  return [];
};

export const generefromid = (genre_id) => {
  //console.log(genre_id);
  const genreobj = moviegenremap.find((genre_obj) => genre_obj.id === genre_id);
  return genreobj.name;
};

export const filterbasedongenre = (MovieList, selectedGenre) => {
  if (selectedGenre === ALL_GENRE) return MovieList;
  return MovieList.filter((movieObj) => {
    const currentMoviegenre = generefromid(movieObj.genre_ids[0]);
    return selectedGenre === currentMoviegenre;
  });
};

export const filterbasedonsearch = (MovieList,searchvalue) => {
   return MovieList.filter((movieObj) => {
    return movieObj.title.toLowerCase().includes(searchvalue.toLowerCase())
   })
}