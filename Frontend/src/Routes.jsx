import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "pages/Home";
import Introductory from "pages/IntroductoryPage";
import NotFound from "pages/NotFound";
import SurveyScreenDepression from "pages/NoExplanation";
import SurveyScreenDepressionCF from "pages/CounterFactual";
import SurveyScreenDepressionFI from "pages/FeatureImportance";
import Persona from "pages/Persona";
import Admin from "pages/admin";
import Quiz from "pages/Quiz";
import Wrong from "pages/Wrong";
import PreExplanationPage from "pages/Pre-Explanation";
import A6 from "pages/6a";
import B6 from "pages/6b";
import A7 from "pages/7";
import A8 from "pages/8";
import A9 from "pages/9";
import A10 from "pages/10";
import A11 from "pages/11";
import A12 from "pages/12";
import A13 from "pages/13";
import A14 from "pages/14a";
import B14 from "pages/14b";
import A15 from "pages/15a";
import A16 from "pages/16a";
import B15 from "pages/15b";
import B16 from "pages/16b";
import A17 from "pages/17";
import A18 from "pages/18";
import A19 from "pages/19";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Introductory />},
    { path: "/6a", element: <A6 />},
    { path: "/6b", element: <B6 />},
    { path: "/7", element: <A7 />},
    { path: "/8", element: <A8 />},
    { path: "/9", element: <A9 />},
    { path: "/10", element: <A10 />},
    { path: "/11", element: <A11 />},
    { path: "/12", element: <A12 />},
    { path: "/13", element: <A13 />},
    { path: "/14a", element: <A14 />},
    { path: "/14b", element: <B14 />},
    { path: "/15a", element: <A15 />},
    { path: "/16a", element: <A16 />},
    { path: "/15b", element: <B15 />},
    { path: "/16b", element: <B16 />},
    { path: "/17", element: <A17 />},
    { path: "/18", element: <A18 />},
    { path: "/19", element: <A19 />},
    { path: "/quiz", element: <Quiz />},
    { path: "/admin", element: <Admin />},
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
