import React, { useEffect, useState } from 'react';

const UseData = () => {
  

   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/skills.json");
        if (!response.ok) throw new Error("Failed to fetch Data");
        const finalData = await response.json();
        setData(finalData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, error,setLoading};
};


export default UseData;