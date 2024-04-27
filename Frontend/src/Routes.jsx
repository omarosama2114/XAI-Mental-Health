import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "pages/Home";
import Introductory from "pages/IntroductoryPage";
import NotFound from "pages/NotFound";
import SurveyScreenDepression from "pages/NoExplanation";
import SurveyScreenDepressionCF from "pages/CounterFactual";
import SurveyScreenDepressionFI from "pages/FeatureImportance";
import Persona from "pages/Persona";
import Demoghraphics from "pages/DemoghraphicsSurvey";
import Admin from "pages/admin";
import Quiz from "pages/Quiz";
import Wrong from "pages/Wrong";
import PreExplanationPage from "pages/Pre-Explanation";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Introductory />},
    { path: "/quiz", element: <Quiz />},
    { path: "/admin", element: <Admin />},
    { path: "/demographics", element: <Demoghraphics />},
    { path: "/pre", element: <PreExplanationPage />},
    { path: "/persona", element: <Persona />},
    { path: "/wrong", element: <Wrong />},
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/NoExplanation", element: <SurveyScreenDepression /> },
    { path: "/FeatureImportance", element: <SurveyScreenDepressionFI /> },
    { path: "/CounterFactual", element: <SurveyScreenDepressionCF /> },
  ]);

  return element;
};

export default ProjectRoutes;
