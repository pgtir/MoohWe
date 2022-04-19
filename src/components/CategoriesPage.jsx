import React from 'react'
import Layout from './Layout';
import {useParams} from 'react-router-dom'

function CategoriesPage() {
    const { genre } = useParams();
  return (
    <div>
        <Layout linkType={genre} heading={`${genre} Movies`} />
    </div>
  )
}

export default CategoriesPage