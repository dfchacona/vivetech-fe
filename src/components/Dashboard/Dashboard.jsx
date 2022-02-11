import React, { useEffect, useState } from 'react';
import { getStats } from '../../hooks/RequestServices';
import { Link } from 'react-router-dom';

function Product () {
  const [stats, setStats] = useState();

  useEffect(()=>{
    getStats()
    .then((statsResponseData) => {
      setStats(statsResponseData.data);
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="header">
        <p className="text-xl font-bold">Dashboard</p>
      </div>
      {stats &&
        <div className="container flex space-x-5 p-4">
          <div className="card">
            <p className="text-m my-4">Requests</p>
            <p className="text-5xl">{stats.total_requested}</p>
          </div>
          <div className="card">
            <p className="text-m my-4">Accepted</p>
            <p className="text-5xl">{stats.total_accepted}</p>
          </div>
          <div className="card">
            <p className="text-m my-4">Rejected</p>
            <p className="text-5xl">{stats.total_rejected}</p>
          </div>
        </div>
      }
      <div className="inline-flex justify-center items-center h-14 w-screen">
        <Link to={`/`}>
          <button className="button">All Products</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;