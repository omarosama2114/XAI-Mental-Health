import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // To control the page head elements such as title
import styles from '../styles/introductory.module.css';

export default function PreExplanationPage() {
    let navigate = useNavigate();
  
    const handleProceed = () => {
        navigate("/home");
        window.scrollTo(0, 0);
    };
    

    return (
        <>
          <Helmet>
            <title>Smart-Sensing-Apps für mentale Gesundheit</title>
            <meta name="description" content="Introductory page of the experiment"/>
          </Helmet>
          <div className={styles.container}>
            <p className="mb-4 text text-xl md:text-2xl">
            Die Person Flo, die Sie eben kennengelernt haben, nutzt eine Smart-Sensing-App für mentale Gesundheit, die mithilfe von Künstlicher Intelligenz (KI) Anzeichen einer Depression erkennen kann.<br/> <br/> Sie stützt sich dabei auf verschiedene Smartphone-Daten. <br/><br/>Gleich wird Ihnen das Ergebnis der KI-Auswertung für Flo gezeigt. Nehmen Sie sich bitte Zeit, dieses genau anzuschauen.
            </p>
            <br/>
            <Button
              variant="contained"
              onClick={handleProceed}
              style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}
            > 
              Weiter &#x279C;
            </Button>
          </div>
        </>
      );
    }