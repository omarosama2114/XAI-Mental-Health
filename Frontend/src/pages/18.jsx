import React, { useState } from 'react';
import styles from '../styles/PersonaPage.module.css'; // Ensure this path is correct for your project
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function A18Page() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  const likertScale = {
    'Die ganze Zeit': 5,
    'Meistens': 4,
    'Etwas mehr als die Hälfte der Zeit': 3,
    'Etwas weniger als die Hälfte der Zeit': 2,
    'Ab und zu': 1,
    'Zu keinem Zeitpunkt': 0
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const [showWarning, setShowWarning] = useState(false);
  
  // Check if all questions are answered to enable the button
  const isEveryQuestionAnswered = Object.values(answers).every(answer => answer !== '');

  let navigate = useNavigate();

  const handleProceed = () => {
    if(isEveryQuestionAnswered) {
    const userData = JSON.parse(sessionStorage.getItem('userData')) || {};
  
    // Convert answer labels to numerical values and save them under specific keys
    userData.gesundheitswohlbefinden_item_1 = likertScale[answers.question1];
    userData.gesundheitswohlbefinden_item_2 = likertScale[answers.question2];
    userData.gesundheitswohlbefinden_item_3 = likertScale[answers.question3];
    userData.gesundheitswohlbefinden_item_4 = likertScale[answers.question4];
    userData.gesundheitswohlbefinden_item_5 = likertScale[answers.question5]; 
    userData.gesundheitswohlbefinden_sum =  likertScale[answers.question1] + likertScale[answers.question2] + likertScale[answers.question3] + likertScale[answers.question4] + likertScale[answers.question5];
  
    axios.post('http://134.60.156.225/api/submit-survey', userData)
    .then(() => navigate('/end_of_survey_A_B'))
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config); 
    });
    window.scrollTo(0, 0);
    }
    else {
      setShowWarning(true);
    }
  };


  return (
    <div className={styles.container}>
      <h1 style={{fontSize: '18px', fontWeight:'bold'}}>Zum Abschluss möchten wir gerne noch wissen, wie es Ihnen aktuell geht. Bitte bewerten Sie dazu folgende Aussagen</h1>
      <br />
      <br />
      <form>
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >In den letzten zwei Wochen war ich froh und guter Laune</h2> {/* Change this question to whatever you wish */}
          <br />
          {['Die ganze Zeit', 'Meistens', 'Etwas mehr als die Hälfte der Zeit', 'Etwas weniger als die Hälfte der Zeit', 'Ab und zu', 'Zu keinem Zeitpunkt'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question1"
                value={option}
                checked={answers.question1 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />
        
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >In den letzten zwei Wochen habe ich mich ruhig und entspannt gefühlt</h2>
          <br />
          {['Die ganze Zeit', 'Meistens', 'Etwas mehr als die Hälfte der Zeit', 'Etwas weniger als die Hälfte der Zeit', 'Ab und zu', 'Zu keinem Zeitpunkt'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question2"
                value={option}
                checked={answers.question2 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />  
        
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >In den letzten zwei Wochen habe ich mich energiegeladen und aktiv gefühlt</h2>
          <br />
          {['Die ganze Zeit', 'Meistens', 'Etwas mehr als die Hälfte der Zeit', 'Etwas weniger als die Hälfte der Zeit', 'Ab und zu', 'Zu keinem Zeitpunkt'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question3"
                value={option}
                checked={answers.question3 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >In den letzten zwei Wochen habe ich mich beim Aufwachen frisch und ausgeruht gefühlt</h2>
          <br />
          {['Die ganze Zeit', 'Meistens', 'Etwas mehr als die Hälfte der Zeit', 'Etwas weniger als die Hälfte der Zeit', 'Ab und zu', 'Zu keinem Zeitpunkt'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question4"
                value={option}
                checked={answers.question4 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />    
        <div className={styles.question}>
          <h2 style={{fontSize: '16px', fontWeight:'bold', color: '#19b394'}} >In den letzten zwei Wochen war mein Alltag voller Dinge, die mich interessieren</h2>
          <br />
          {['Die ganze Zeit', 'Meistens', 'Etwas mehr als die Hälfte der Zeit', 'Etwas weniger als die Hälfte der Zeit', 'Ab und zu', 'Zu keinem Zeitpunkt'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="question5"
                value={option}
                checked={answers.question5 === option}
                onChange={handleOptionChange}
                className={styles.radio}
              />
              {option}
              <br /><br />
            </label>
          ))}
        </div>
        <br />
        
        <br />
        
        {showWarning && (
        <p style={{ color: 'red', fontSize: '16px' }}>Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.</p> // Warning message
        )}

        <br />
        
        <Button
          variant="contained"
          onClick={handleProceed}
          style={{ color: 'white', backgroundColor: '#19b394', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px'}}
        > 
          Weiter &#x279C;
        </Button>
      </form>
    </div>
  );
}
