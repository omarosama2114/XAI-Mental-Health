import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // To control the page head elements such as title
import styles from '../styles/introductory.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";



export default function IntroductoryPage() {
  let navigate = useNavigate();
  let location = useLocation();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => { 
    // Parse the URL parameters on component mount
    const params = queryString.parse(location.search);
    // Save the initial data to sessionStorage
    sessionStorage.setItem('userData', JSON.stringify(params));
  }, [location]);

  const handleProceed = () => {
    if (isChecked) {
      navigate("/persona");
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Welcome - Omar's Application</title>
        <meta name="description" content="Introductory page of the experiment" />
      </Helmet>
      <div className={styles.container} style = {{marginTop:'45px'}}>
        <p className="mb-4 text text-xl md:text-2xl">
        
        Sie haben nun alle Teile der Studie durchlaufen. Wir danken Ihnen herzlich für Ihre wertvollen Antworten. Alle Daten wurden anonym erhoben und werden streng vertraulich behandelt sowie ausgewertet. Rückschlüsse auf Ihre Person sind nicht möglich.       

        <br/>
        
        <br/>

        <span style={{fontWeight: 'bold', color: '#19b394', fontSize: '22px'}}>Hinweis:</span> Im Laufe der Befragung werden Sie zu verschiedenen emotionalen Zuständen, einschließlich negativer Gefühle und Gedanken befragt. Falls Sie während der Beantwortung der Fragen eine Belastung empfinden, haben Sie jederzeit die Möglichkeit, Ihre Teilnahme an der Studie ohne Angabe von Gründen abzubrechen. Zusätzlich stehen Ihnen bei akuten psychischen Belastungen oder Suizidgedanken rund um die Uhr folgende Hilfsangebote zur Verfügung:
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Telefonseelsorge: 0800 / 11 101 11
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•	Ärztlicher (psychiatrischer) Bereitschaftsdienst: 116 117
        <br/><br/><br/>

        Mit freundlichen Grüßen

        <br/><br/>
        Das Studienteam <br/>
        Institut für Business Analytics<br/>
        Universität Ulm 
        <br/><br/>
        Kontakt: <span style={{color: 'red'}}>XXX (TBD)</span>
        <br/>
 
        </p>
      </div>
    </>
  );
}
