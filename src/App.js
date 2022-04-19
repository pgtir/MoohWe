import React from 'react'
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import SearchResults from './components/SearchResults';
import CategoriesPage from './components/CategoriesPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App () {
    return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home/> }></Route>
        <Route exact path='/popular' element={ <Popular/> }></Route>
        <Route exact path='/top-rated' element={ <TopRated/> }></Route>
        <Route exact path='/upcoming' element={ <Upcoming/> }></Route>
        <Route exact path='/search/:query' element={ <SearchResults/> }></Route>
        <Route exact path='/:genre' element={ <CategoriesPage/> }></Route>
      </Routes>
    </Router>
    );
}

export default App;