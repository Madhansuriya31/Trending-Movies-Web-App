import Banner from "../Components/Banner";
import Movies from "../Components/Movies";
import Pagenation from "../Components/Pagenation";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Home({ PageNo, SetPageNo }) {
  const [MovieList, setMovieList] = useState([]);
  const [bannerMovie, setBannerMovie] = useState(null);
  useEffect(() => {
  const fetchdata = async () => {
    try {
      const resp = await axios.get(
       `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${PageNo}`
      );

      const updatedList = resp.data.results;

      setMovieList(updatedList);

      if (!bannerMovie && updatedList.length > 0) {
        setBannerMovie(updatedList[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchdata();
}, [PageNo]);

  return (
    <div>
      {MovieList && MovieList.length === 0 && (
        <h2 className="font-bold text-center">Loading Movies...</h2>
      )}
      {MovieList.length > 0 && (
        <div>
          <Banner url={bannerMovie?.backdrop_path} title={bannerMovie?.title} />
          <Movies MovieList={MovieList} />
          <Pagenation PageNo={PageNo} SetPageNo={SetPageNo} />
        </div>
      )}
    </div>
  );
}
