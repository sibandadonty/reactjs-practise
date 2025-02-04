import React, { useEffect, useState } from "react";

function AllMeetUps() {
  const [allMeetups, setAllMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(import.meta.env.VITE_DATABASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">Loading</h1>
    </div>
  }

  return (
    <div>
      <h1>All Meet Ups</h1>
    </div>
  );
}

export default AllMeetUps;
