import React from 'react'
import Layout from "./Layout";

function TopRated() {
  return (
    <div>
    <Layout 
    movieType = {'top_rated'}
    heading = {'Top Rated Movies'}
    />
  </div>
  )
}

export default TopRated