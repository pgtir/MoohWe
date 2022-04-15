import React from 'react'
import Layout from "./Layout"


function Upcoming() {
  return (
    <div>
      <Layout 
      movieType = {'upcoming'}
      heading = {'Upcoming Movies'}
      />
    </div>
  )
}

export default Upcoming