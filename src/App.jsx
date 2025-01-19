import React from "react";
import { database } from "./firebaseConfig"; 
import useRealTimeData from "./hooks/useRealTimeData";

function App() {
  const { data, loading, error } = useRealTimeData(database, "/drowsiness_data");

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1>Drowsiness Data</h1>
      <p><strong>Status:</strong> {data.drowsiness_status || "Unknown"}</p>
      <p><strong>Number of Faces:</strong> {data.number_of_faces || 0}</p>
      <p>
        <strong>Timestamp:</strong>{" "}
        {data.timestamp
          ? new Date(data.timestamp * 1000).toLocaleString()
          : "No timestamp available"}
      </p>
    </div>
  );
}

export default App;
