import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import explanationsData from '../240424_xaimh_output-finalized.json';
import { useNavigate } from "react-router-dom";
import styles from '../styles/PersonaPage.module.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function PersonaPage() {
  const [explanation, setExplanation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedExplanation = sessionStorage.getItem('selectedExplanation');
    if (savedExplanation) {
      setExplanation(JSON.parse(savedExplanation));
    } else {
      const randomIndex = Math.floor(Math.random() * explanationsData.length);
      const newExplanation = explanationsData[randomIndex];
      sessionStorage.setItem('selectedExplanation', JSON.stringify(newExplanation));
      setExplanation(newExplanation);
    }
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
            { label: 'Anzahl sozialer Kontakte', value: explanation.Anzahl_deiner_sozialen_Kontakte },
            { label: 'Qualität der sozialen Kontakte', value: explanation.Qualitaet_deiner_sozialen_Kontakte },
            { label: 'Qualität der Ernährung', value: explanation.Qualitaet_deiner_Ernaehrung },
            { label: 'Sportliche Aktivität', value: explanation.Deine_sportliche_Aktivitaet },
            { label: 'Zeit am Handy', value: explanation.Zeit_am_Handy },
            { label: 'Länge von Telefonaten', value: explanation.Laenge_deiner_Telefonate },
            { label: 'Intensität der Mobilität', value: explanation.Deine_Mobilitaet }
          ].map((item, index) => (
            <TextField 
              key={index}
              label={item.label}
              value={item.value || ''}
              variant="outlined"
              fullWidth
              Read only
              margin="normal"
              InputLabelProps={{
              style: { color: '#19b394', fontSize: '16px' },
              shrink: true // Color for the label
              }}
              inputProps={{
              spellCheck: 'false',
              style:{ outline: 'none', boxShadow: 'none', color: 'black', cursor: 'default'} 
              }}

              sx={{
                pointerEvents: 'none' // This will make the TextField not clickable
              }}
                
            />
          ))}
        </ul>
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
