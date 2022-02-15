
import './App.scss';
import cn from "classnames"
import { useState } from 'react';
import Movies from './components/Movies';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Tv_shows from './components/Tv-shows';
import Cont from './components/Container';
function App() {
  const [val, setVal] = useState(false)

  

  return (

    <div className="App">
      
        <Link to="/movies">Movies</Link>
        <Link to="/tv_shows">Tv-shows</Link>

    <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv_shows" element={<Tv_shows />} />
      </Routes>
      <Cont/>
    </div>
  );
}

export default App;
