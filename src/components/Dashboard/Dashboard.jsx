import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/RequestServices';

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
      <h1 className="text-lg">Dashboard</h1>
      { stats &&
        <div className="container flex space-x-5">
          <div className="px-2 h-40 w-40 box-border border-black border-2">
            <p className="text-lg">Number of requests</p>
            <p className="text-sm">{stats.total_requested}</p>
          </div>
          <div className="px-2 h-40 w-40 box-border border-black border-2">
            <p className="text-lg">Accepted products</p>
            <p className="text-sm">{stats.total_accepted}</p>
          </div>
          <div className="px-2 h-40 w-40 box-border border-black border-2">
            <p className="text-lg">Rejected products</p>
            <p className="text-sm">{stats.total_rejected}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Product;