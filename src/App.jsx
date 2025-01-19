import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "./firebaseConfig";

function App() {
  const [realTimeVehicleData, setRealTimeVehicleData] = useState(null);

  useEffect(() => {

    const drowsinessDataRef = ref(database, "/drowsiness_data");

    const unsubscribe = onValue(
      drowsinessDataRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setRealTimeVehicleData(data);
          console.log("Data: ", data);
        } else {
          console.log("No drowsiness data found.");
        }
      },
      {
        onlyOnce: false, // Keep listening for real-time updates
      }
    );

    return () => unsubscribe();
  }, []); 


  return (
    <div>
      <h1>Drowsiness Data</h1>
      {realTimeVehicleData ? (
        <div>
          <p><strong>Status:</strong> {realTimeVehicleData.drowsiness_status || "Unknown"}</p>
          <p><strong>Number of Faces:</strong> {realTimeVehicleData.number_of_faces || 0}</p>
          <p>
            <strong>Timestamp:</strong>{" "}
            {realTimeVehicleData.timestamp
              ? new Date(realTimeVehicleData.timestamp * 1000).toLocaleString()
              : "No timestamp available"}
          </p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
