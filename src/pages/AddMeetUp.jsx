import { useNavigate } from "react-router-dom";
import AddMeetUpForm from "../components/AddMeetUpForm";
import { useState } from "react";

function AddMeetUp() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const addMeetupHandler = (meetupData) => {
    setIsLoading(true);
    fetch(import.meta.env.VITE_DATABASE_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {"Content-Type": "application/json"}
    }).then(() => {
       navigate("/");
    });
    setIsLoading(false);
  }
  return (
    <div>
      <AddMeetUpForm onAddMeetup={addMeetupHandler}/>
    </div>
  );
}

export default AddMeetUp;
