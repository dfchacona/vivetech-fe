import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/RequestServices';
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
    <div className="container px-4">
      <div className="h-14 py-4">
        <p className="text-xl font-bold">Dashboard</p>
      </div>
      {stats &&
        <div className="container flex space-x-5">
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
      <Link to={`/`}>
        Go Home
      </Link>
    </div>
  );
}

export default Product;