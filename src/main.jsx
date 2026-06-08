import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Watchlist from './Pages/Watchlist.jsx'
import { BrowserRouter , Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Watchlist' element={<Watchlist/>}/>
    </Routes>
    
    </BrowserRouter>
    
)
