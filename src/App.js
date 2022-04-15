import React from 'react'
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App () {
    return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/popular' element={ <Popular/> }></Route>
        <Route path='/top-rated' element={ <TopRated/> }></Route>
        <Route path='/upcoming' element={ <Upcoming/> }></Route>
      </Routes>
    </Router>
    );
}

export default App;