import React from "react";
import Layout from "./Layout";


function Home() {
  
  return (
    <div>
      <Layout 
      movieType = {'now_playing'}
      heading = {'Now Streaming'}
      />
    
    </div>
  );
}

export default Home;
