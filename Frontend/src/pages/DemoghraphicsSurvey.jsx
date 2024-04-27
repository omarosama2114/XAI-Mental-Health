import React from "react";
import { Survey, Model, StylesManager } from "survey-react";
import "survey-core/defaultV2.min.css";
import "../styles/DemographicsSurvey.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DemographicsSurvey = () => {
  // Applying theme
  StylesManager.applyTheme('defaultV2');

  // Initialize navigation hook
  const navigate = useNavigate();

  // Survey JSON definition
  const surveyJSON = {
    title: "Demographics Survey",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "age",
            title: "What is your age?",
            isRequired: true,
            inputType: "number"
          },
          {
            type: "radiogroup",
            name: "gender",
            title: "What is your gender?",
            isRequired: true,
            choices: ["Male", "Female", "Other"]
          },
          {
            type: "dropdown",
            name: "education",
            title: "What is your highest level of education?",
            isRequired: true,
            choices: ["High School", "Bachelor's Degree", "Master's Degree", "PhD"]
          }
        ]
      }
    ]
  };

  // Handling survey completion
  const onComplete = (survey) => {
    console.log("Survey results: ", survey.data);
    axios.post('http://localhost:8000/submit-survey', survey.data)
      .then(() => navigate('/persona'))
      .catch(error => console.error('Error posting survey data:', error));
  };
  return (
    <div>
      <Survey model={new Model(surveyJSON)} onComplete={onComplete} />
    </div>
  );
};

export default DemographicsSurvey;
