import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';
import styles from '../styles/PersonaPage.module.css';
import PersonaPage from './Persona'; // Import PersonaPage component

const options = ['Stark unterdurchschnittlich', 'Leicht unterdurchschnittlich', 'Durchschnittlich', 'Leicht überdurchschnittlich', 'Stark überdurchschnittlich'];

export default function QuizPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [explanation, setExplanation] = useState(state?.explanation);
  const [answers, setAnswers] = useState({});
  const [features, setFeatures] = useState([]);
  const [showPersonaPage, setShowPersonaPage] = useState(false); // State to control the visibility of the PersonaPage

  useEffect(() => {
    if (explanation) {
      const featureKeys = Object.keys(featureLabels);
      const selectedFeatures = featureKeys.sort(() => 0.5 - Math.random()).slice(0, 3);
      setFeatures(selectedFeatures);

      const initialAnswers = selectedFeatures.reduce((acc, feature) => ({
        ...acc,
        [feature]: 'med'
      }), {});

      setAnswers(initialAnswers);
    } else {
      navigate('/persona');
    }
  }, [explanation, navigate]);

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

  const togglePersonaPage = () => {
    setShowPersonaPage(prev => !prev);
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

  return (
    <div className={styles.container} style={{marginTop: '90px'}}>
      <h1 className={styles.subTitle} style={{ fontSize: '1.4em' }}>
        Sie haben eben Flo kennengelernt. Wie ausgeprägt sind die folgenden Eigenschaften bei Flo?
      </h1>
      <br />
      {features.map((feature, index) => (
        <FormControl key={index} fullWidth margin="normal">
          <InputLabel id={`label-${feature}`} style={{ color: '#19b394', fontSize: '18px' }}>
            {featureLabels[feature]}
          </InputLabel>
          <Select
            labelId={`label-${feature}`}
            label={featureLabels[feature] + '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'}
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
      <Button variant="contained" onClick={handleSubmit} style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}>
        weiter &#x279C;
      </Button>
      <p style={{ marginTop: '20px' }}>
        Nicht sicher? Hier können Sie das Profil von Flo noch einmal ansehen: <Button onClick={togglePersonaPage} className={styles.flo}>Profil von Flo</Button>
      </p>
      {/* Conditionally render the Persona Page */}
      {showPersonaPage && <PersonaPage showProceedButton={false} />}
    </div>
  );
}
