import Banner from "../Components/Banner";
import Movies from "../Components/Movies";
import Pagenation from "../Components/Pagenation";
import { useEffect, useState } from "react";
import axios from "./../../node_modules/axios/lib/axios";

export default function Home({ PageNo, SetPageNo }) {
  const [MovieList, setMovieList] = useState([]);
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${PageNo}`,
      );
      const updatedList = resp.data.results;
      setMovieList(updatedList);
      if (!bannerMovie) {
        setBannerMovie(updatedList[0]);
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
