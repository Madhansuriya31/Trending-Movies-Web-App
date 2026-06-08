import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 items-center p-4">
      <img
        className="size-12 rounded-4xl mx-2"
        src="https://tmdb-movies-scaler.netlify.app/assets/Logo-CvOug6Os.png"
        alt="TMDB-LOGO"
      />
      <div className="font-bold text-2xl gap-8 flex text-blue-500">
        <Link to="/">Movies</Link>
        <Link to="/Watchlist">WatchList</Link>
      </div>
    </nav>
  );
}
