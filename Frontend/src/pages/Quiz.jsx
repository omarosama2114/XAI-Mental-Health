// QuizPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';
import styles from '../styles/PersonaPage.module.css';
import { Modal, Box } from '@mui/material';
import PersonaPage from './Persona'; // Import PersonaPage component



const options = ['Stark unterdurchschnittlich', 'Leicht unterdurchschnittlich', 'Durchschnittlich', 'Leicht überdurchschnittlich', 'Stark überdurchschnittlich'];

export default function QuizPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [explanation, setExplanation] = useState(state?.explanation);
  const [answers, setAnswers] = useState({});
  const [features, setFeatures] = useState([]);

  // State to control the visibility of the modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
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

  return (
    <div className={styles.container} style={{marginTop: '90px'}}>
      <h1 className="text-2xl md:text-4xl font mb-4" style={{ fontSize: '1.4em' }}>
        Sie haben eben Flo kennengelernt. Wie ausgeprägt sind die folgenden Eigenschaften bei Flo?
      </h1>
      {features.map((feature, index) => (
        <FormControl key={index} fullWidth margin="normal">
          <InputLabel id={`label-${feature}`} style={{ color: '#19b394', fontSize: '18px' }}>
            {featureLabels[feature]}
          </InputLabel>
          <Select
            labelId={`label-${feature}`}
            label={featureLabels[feature]+ + '\u00A0'+ '\u00A0'+ '\u00A0'+ '\u00A0'}
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
        Nicht sicher? Hier können Sie das Profil von Flo noch einmal ansehen: <Button onClick={handleOpenModal} style={{color: '#19b394'}}>Profil von Flo</Button>
      </p>
      {/* Modal to display the Persona Page */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-persona-page-title"
        aria-describedby="modal-persona-page-description"
      >
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4
        }}>
          <PersonaPage showProceedButton={false} /> {/* This is where you render the Persona Page */}
          <Button variant="contained" onClick={handleCloseModal} style={{ marginTop: '20px', backgroundColor: '#19b394', marginLeft: '40%' }}>
            Schließen
          </Button>
        </Box>
      </Modal>

    </div>
  );
}
