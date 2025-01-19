import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

function useRealTimeData(database, path) {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!database || !path) {
      setError("Invalid database or path provided.");
      setLoading(false);
      return;
    }

    const dataRef = ref(database, path);

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          setError(null);
        } else {
          setError("No data found at the specified path.");
        }
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [database, path]);

  return { data, loading, error }; 
}

export default useRealTimeData;
