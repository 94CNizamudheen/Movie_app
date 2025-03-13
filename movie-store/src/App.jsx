import Favorite from "./assets/pages/Favorites";
import Home from "./assets/pages/Home"
import Navbar from "./assets/Components/navbar";
import "./assets/css/App.css"
import { MovieProvider } from "./assets/contexts/movieContexts";

import { Route, Routes } from "react-router-dom";

function App() {

  return (

    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorite />}></Route>
        </Routes>
      </main>
    </MovieProvider>




  )
}

export default App
