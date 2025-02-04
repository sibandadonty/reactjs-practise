import React, { useEffect, useState } from "react";
import MeetupCard from "../components/MeetupCard";

function AllMeetUps() {
  const [allMeetups, setAllMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(import.meta.env.VITE_DATABASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          meetups.push(item);
        }
        setAllMeetups(meetups);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl">Loading</h1>
      </div>
    );
  }

  console.log(allMeetups);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-2">All Meet Ups</h1>
      <div>{allMeetups.length <= 0 && <p>No meetups to display</p>}
        {allMeetups.length > 0 && allMeetups.map(meetup => {
          return <MeetupCard key={meetup.id} {...meetup} />
        })}
      </div>
    </div>
  );
}

export default AllMeetUps;
