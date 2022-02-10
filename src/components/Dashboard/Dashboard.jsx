import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/RequestServices';
import { Link } from 'react-router-dom';

function Product (props) {
  const [stats, setStats] = useState();

  useEffect(()=>{
    getStats()
    .then((statsResponseData) => {
      setStats(statsResponseData.data[0]);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="h-14 py-4">
        <p className="text-xl font-bold">Dashboard</p>
      </div>
      { stats &&
        <div className="container flex space-x-5">
          <div className="inline-flex items-center flex-col direction-column px-2 mt-4 mb-2 h-40 w-40 box-border border-black border-2">
            <p className="text-m my-4">Requests</p>
            <p className="text-5xl">{stats.total_requested}</p>
          </div>
          <div className="inline-flex items-center flex-col direction-column px-2 mt-4 mb-2 h-40 w-40 box-border border-black border-2">
            <p className="text-m my-4">Accepted</p>
            <p className="text-5xl">{stats.total_accepted}</p>
          </div>
          <div className="inline-flex items-center flex-col direction-column px-2 mt-4 mb-2 h-40 w-40 box-border border-black border-2">
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