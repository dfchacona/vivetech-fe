import React, { useEffect, useState } from 'react';
import getAllProducts from '../services/ProductServices';

function Home (props) {
  const [projects, setProjects] = useState();

  function getProjects() {
    getAllProducts()
    .then((projectsResponseData) => {
      console.log(projectsResponseData)
    });
  }

  useEffect(()=>{
    getProjects();
  }, []);

  return <h1>Home</h1>;
}

export default Home;