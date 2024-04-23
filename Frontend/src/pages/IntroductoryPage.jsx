import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function IntroductoryPage() {
  let navigate = useNavigate();

  const goToNextPage = () => {
    window.location.href = 'http://localhost:8000/room/study_room'; // Correct way to navigate to an absolute URL
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Experiment <br/> <br/> </h1>
      <p className="mb-4 text-center">
        Here at OurLab, we're conducting an experiment to understand AI better. 
        Rest assured, all data is protected and will only be used for research purposes.
      </p>
      {/* Additional placeholder text for more information */}
      <p className="mb-8 text-sm text-center">
        Please take a moment to read through the instructions and data protection information before starting the survey.
      </p>
      <Button
        variant="contained"
        onClick={goToNextPage}
        style={{ color: 'white', backgroundColor: '#15b1e2', fontWeight: 'bold'}}
      > 
        Next &#x279C;
      </Button>
    </div>
  );
}
