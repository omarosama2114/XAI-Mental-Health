import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';
import styles from '../styles/PersonaPage.module.css';
import PersonaPage from './Persona'; // Import PersonaPage component

const options = ['Stark unterdurchschnittlich', 'Leicht unterdurchschnittlich', 'Durchschnittlich', 'Leicht überdurchschnittlich', 'Stark überdurchschnittlich'];

export default function QuizPage() {
  const navigate = useNavigate();
  const [explanation, setExplanation] = useState({});
  const [answers, setAnswers] = useState({});
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const savedExplanation = sessionStorage.getItem('selectedExplanation');
    const explanationData = savedExplanation ? JSON.parse(savedExplanation) : null;

    if (explanationData) {
      setExplanation(explanationData);
      const featureKeys = Object.keys(featureLabels);
      const selectedFeatures = featureKeys.sort(() => 0.5 - Math.random()).slice(0, 3);
      setFeatures(selectedFeatures);

      const initialAnswers = selectedFeatures.reduce((acc, feature) => ({
        ...acc,
        [feature]: 'med'
      }), {});

      setAnswers(initialAnswers);
    } else {
      navigate('/persona'); // Redirect if no explanation data is found
    }
  }, [navigate]);

  const handleSelectChange = (feature, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [feature]: value
    }));
  };

  const handleSubmit = () => {
    const allCorrect = features.every(feature => answers[feature] === explanation[feature]);
    if (allCorrect) {
      navigate('/pre');
    } else {
      navigate('/wrong');
    }
    window.scrollTo(0, 0);
  };

  const featureLabels = {
    Dein_Stresslevel: 'Dein Stresslevel',
    Deine_Schlafqualitaet: 'Deine Schlafqualität',
    Anzahl_deiner_sozialen_Kontakte: 'Deine Anzahl sozialer Kontakte',
    Qualitaet_deiner_sozialen_Kontakte: 'Deine Qualität sozialer Kontakte',
    Qualitaet_deiner_Ernaehrung: 'Deine Qualität der Ernährung',
    Deine_sportliche_Aktivitaet: 'Deine sportliche Aktivität',
    Zeit_am_Handy: 'Deine Zeit am Handy',
    Laenge_deiner_Telefonate: 'Deine Länge der Telefonate',
    Deine_Mobilitaet: 'Deine Mobilität'
  };

  return (
    <div className={styles.container} style={{marginTop: '90px'}}>
      <h1 className={styles.subTitle} style={{ fontSize: '1.4em' }}>
        Sie haben eben Flo kennengelernt. Wie ausgeprägt sind die folgenden Eigenschaften bei Flo?
      </h1>
      <br />
      {features.map((feature, index) => (
        <FormControl key={index} fullWidth margin="normal">
          <InputLabel id={`label-${feature}`} style={{ color: '#19b394', fontSize: '20px', fontWeight: 'bold' }}>
            {featureLabels[feature]}
          </InputLabel>
          <Select
            labelId={`label-${feature}`}
            label={featureLabels[feature] + '\u00A0'.repeat(16)}
            value={answers[feature]}
            onChange={(e) => handleSelectChange(feature, e.target.value)}
          >
            {options.map((option, idx) => (
              <MenuItem key={idx} value={option}>{option}</MenuItem>
            ))}
          </Select>
          <br />
          <br />
        </FormControl>
      ))}
      <Button variant="contained" onClick={handleSubmit} style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px', marginBottom:'-20px'}}>
        weiter &#x279C;
      </Button>
      {/* Always render the Persona Page */}
      <PersonaPage showProceedButton={false} />
    </div>
  );
}
