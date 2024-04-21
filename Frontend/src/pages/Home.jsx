import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import explanationsData from '../combined_explanations_corrected.json'; // The path should be relative to the current file

import FeatureImportancePage from './FeatureImportance/index.jsx'; // adjust the path as needed
import CounterfactualPage from './CounterFactual/index.jsx'; // adjust the path as needed



export default function ExplanationPage() {
  const [explanation, setExplanation] = useState(null);

  // Effect to select a random explanation on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * explanationsData.length);
    setExplanation(explanationsData[randomIndex]);
  }, []);

  // Component to render based on the type of explanation
  const renderExplanationComponent = () => {
    if (!explanation) return <div>Loading...</div>;

    switch (explanation.type) {
      case "FeatureImportance":
        return <FeatureImportancePage explanation={explanation} />;
      case "Counterfactual":
        return <CounterfactualPage explanation={explanation} />;
      default:
        return <div>Unknown explanation type</div>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Omar's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col h-screen bg-white-A700 justify-between p-5">
        {/* Render the correct explanation component */}
        {renderExplanationComponent()}
        {/* ...other code */}
      </div>
    </>
  );
}
