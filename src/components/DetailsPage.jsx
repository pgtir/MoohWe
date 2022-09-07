import React from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

function DetailsPage() {
  const { linkType, id } = useParams();
  return (
    <div>
      <Layout linkType={linkType} heading={null} movie_id={id} />
    </div>
  );
}

export default DetailsPage;
