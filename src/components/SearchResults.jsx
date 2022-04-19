import React from 'react'
import Layout from './Layout';
import { useParams } from 'react-router-dom'

function SearchResults() {
  const { query } = useParams();
  return (
    <div>
      <Layout linkType={null} heading={`Search Results for "${query}"`} query={query} />
    </div>
  )
}

export default SearchResults