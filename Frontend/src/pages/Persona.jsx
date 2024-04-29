import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import explanationsData from '../240424_xaimh_output-finalized.json';
import { useNavigate } from "react-router-dom";
import styles from '../styles/PersonaPage.module.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from 'axios';    

export default function PersonaPage({ showProceedButton = true }) {
  const [explanation, setExplanation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get userData from sessionStorage
    let userData = JSON.parse(sessionStorage.getItem('userData')) || {};

    // Select explanation and add to userData
    let savedExplanation = sessionStorage.getItem('selectedExplanation');
    if (savedExplanation) {
      savedExplanation = JSON.parse(savedExplanation);
      userData.explanation_id = savedExplanation.obj_id; 
    } else {
      const randomIndex = Math.floor(Math.random() * explanationsData.length);
      savedExplanation = explanationsData[randomIndex];
      userData.explanation_id = savedExplanation.obj_id;
      sessionStorage.setItem('selectedExplanation', JSON.stringify(savedExplanation));
    }
    setExplanation(savedExplanation);
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }, []);

  const handleProceed = () => {
    navigate('/quiz', { state: { explanation } });
  };

  const featureLabels = {
    Dein_Stresslevel: 'Stresslevel',
    Deine_Schlafqualitaet: 'Schlafqualität',
    Anzahl_deiner_sozialen_Kontakte: 'Anzahl sozialer Kontakte',
    Qualitaet_deiner_sozialen_Kontakte: 'Qualität der sozialen Kontakte',
    Qualitaet_deiner_Ernaehrung: 'Qualität der Ernährung',
    Deine_sportliche_Aktivitaet: 'Sportliche Aktivität',
    Zeit_am_Handy: 'Zeit am Handy',
    Laenge_deiner_Telefonate: 'Länge von Telefonaten',
    Deine_Mobilitaet: 'Intensität der Mobilität'
  };


  if (!explanation) {
    return <div>Loading...</div>;
  }

  const onComplete = () => {
    navigate('/quiz', { state: { explanation } })
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Persona Introduction - Omar's Application</title>
      </Helmet>
      <br/>
      <div className={styles.container}>
        <h1 className="text-2xl md:text-4xl font mb-4" style={{ fontSize: '1.4em' }}>
        Wir möchten Sie nun also bitten, sich in eine Person und deren Situation hineinzuversetzen. Bitte lesen Sie dazu die folgende Personenbeschreibung sorgfältig durch nehmen Sie die Perspektive der Person ein. 
        <br/> <br/>
        Die Person, um die es jetzt geht, heißt Flo. Flo nutzt eine Smart-Sensing-App für mentale Gesundheit – also eine App, die Smartphone-Daten nutzt, um Informationen zur mentalen Gesundheit von Flo zu liefern.
        <br/> <br/>
        Die App hat folgende Informationen über Flo gesammelt:
        </h1>
        <ul className={styles.list}>
          {[
            { label: 'Stresslevel', value: explanation.Dein_Stresslevel },
            { label: 'Schlafqualität', value: explanation.Deine_Schlafqualitaet },
            { label: 'Anzahl sozialer Kontakte'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0', value: explanation.Anzahl_deiner_sozialen_Kontakte },
            { label: 'Qualität der sozialen Kontakte' + '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0', value: explanation.Qualitaet_deiner_sozialen_Kontakte },
            { label: 'Qualität der Ernährung'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0', value: explanation.Qualitaet_deiner_Ernaehrung },
            { label: 'Sportliche Aktivität'+ '\u00A0'+ '\u00A0', value: explanation.Deine_sportliche_Aktivitaet },
            { label: 'Zeit am Handy', value: explanation.Zeit_am_Handy },
            { label: 'Länge von Telefonaten'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0', value: explanation.Laenge_deiner_Telefonate },
            { label: 'Intensität der Mobilität'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0', value: explanation.Deine_Mobilitaet }
          ].map((item, index) => (
            <TextField 
              key={index}
              label={item.label + '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'}
              value={item.value || ''}
              variant="outlined"
              fullWidth
              Read only
              margin="normal"
              padding="normal"
              
              InputLabelProps={{
                style: { color: '#19b394', fontSize: '20px'},
                shrink: true
              }}

              inputProps={{
                spellCheck: 'false',
                style:{ boxShadow: 'none', color: 'black', cursor: 'default', marginTop: '10px', marginBottom: '10px' } 
              }}

              sx={{
                pointerEvents: 'none' // This will make the TextField not clickable
              }}
            />
          ))}
          <br/>
        </ul>
        <br/>
        {showProceedButton&& (
          <Button
          variant="contained"
          onClick={onComplete}
          style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}
        >
          Weiter &#x279C;
        </Button>
        )}
      </div>
    </>
  );
}
