import { useState } from "react";
import Navbar from './Components/Navbar.jsx'
import Watchlist from './Pages/Watchlist.jsx'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home.jsx";

function App() {
  const [PageNo, SetPageNo] = useState(1);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home PageNo={PageNo} SetPageNo={SetPageNo} />} />
        <Route path="/Watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
