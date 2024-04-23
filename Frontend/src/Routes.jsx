import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "pages/Home";
import Introductory from "pages/IntroductoryPage";
import NotFound from "pages/NotFound";
import SurveyScreenDepression from "pages/NoExplanation";
import SurveyScreenDepressionCF from "pages/CounterFactual";
import SurveyScreenDepressionFI from "pages/FeatureImportance";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Introductory />},
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/NoExplanation", element: <SurveyScreenDepression /> },
    { path: "/FeatureImportance", element: <SurveyScreenDepressionFI /> },
    { path: "/CounterFactual", element: <SurveyScreenDepressionCF /> },
  ]);

  return element;
};

export default ProjectRoutes;
