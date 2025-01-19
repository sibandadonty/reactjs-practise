import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "./firebaseConfig";

function App() {
  const [realTimeVihecleData, setRealTimeVihecleData] = useState({})

  // useEffect(() => {

  // }, [])

  const drowsinessDataRef = ref(database, "/drowsiness_data")
    // `/users/${userId}/drowsiness_data`);

  // Fetch the data
  onValue(drowsinessDataRef, (snapshot) => {
    if (snapshot.exists()) {
      // Extract the data from the snapshot
      const data = snapshot.val();
      console.log("Data: ", data);
      // // Convert the timestamp to a human-readable format
      // const readableTimestamp = timestamp
      //   ? new Date(timestamp * 1000).toLocaleString() 
      //   : "No timestamp provided";
    } else {
      console.log("No drowsiness data found for this user.");
    }
  }, {
    onlyOnce: false // Fetch data only once
  });
  return <div>Hello</div>;
}

export default App;
