import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // To control the page head elements such as title
import styles from '../styles/introductory.module.css';
import { useState } from "react";

export default function IntroductoryPage() {
  let navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleProceed = () => {
    if (isChecked) {
      navigate("/persona");
    } else {
      setShowWarning(true);
    }
  };


  return (
    <>
      <Helmet>
        <title>Welcome</title>
        <meta name="description" content="Introductory page of the experiment" />
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>Smart-Sensing-Apps für mentale Gesundheit <br/> <br/> </h1>
        <p className={styles.list}>
        <span className={styles.subTitle}>Herzlich Willkommen <br/></span>
        zu diesem wissenschaftlichen Forschungsprojekt zum Thema Mental Health! Es wird durchgeführt vom Institut für Business Analytics der Universität Ulm.
        <br/>
        <br/>

        <span className={styles.subTitle}>Worum geht es? <br/></span>
        So genannte Smart-Sensing-Apps nutzen Künstliche Intelligenz (KI), um auf Basis von Sensordaten von Smartphones, Smart Watches und anderen Geräten ihren Usern Informationen und Ratschläge zu liefern. Zu den Daten gehören u.a. die Schlafdauer und Schlafqualität, die sportliche Aktivität, die Zeit am Bildschirm oder wieviel man unterwegs ist (Mobilität). In unserem Fall geht es um eine App, mit deren Hilfe User erfahren, ob ihre Daten darauf hindeuten, dass sie ein Risiko haben, an einer Depression zu erkranken. 
        <br/>
        <br/>


        <span className={styles.subTitle}>Was muss ich tun? <br/></span>
        Sie werden gleich gebeten, sich in ein hypothetisches Szenario hineinzuversetzen. Dazu wird Ihnen zunächst eine Person präsentiert, die die App nutzt. Dann sehen Sie ein Beispiel, was die App für diese Person anzeigt. Schauen Sie sich die Präsentation der Person und das Beispiel bitte genau an. Anschließend bitten wir Sie, dazu Fragen zu beantworten.
        <br/>
        <br/>
        <br/>
        <br/>

        <span className={styles.list} style={{fontWeight: 'bold'}}>Hinweis:</span> Im Laufe der Befragung werden Sie zu verschiedenen emotionalen Zuständen, einschließlich negativer Gefühle und Gedanken befragt. Falls Sie während der Beantwortung der Fragen eine Belastung empfinden, haben Sie jederzeit die Möglichkeit, Ihre Teilnahme an der Studie ohne Angabe von Gründen abzubrechen. Zusätzlich stehen Ihnen bei akuten psychischen Belastungen oder Suizidgedanken rund um die Uhr folgende Hilfsangebote zur Verfügung:
        <br/>
        <br/>
        •	Telefonseelsorge: 0800 / 11 101 11
        <br/>
        •	Ärztlicher (psychiatrischer) Bereitschaftsdienst: 116 117
        <br/><br/>
        <span className={styles.list} style={{fontWeight: 'bold'}}>Datenschutz:</span> Mir ist bekannt, dass bei dieser Studie personenbezogene Daten verarbeitet werden sollen. Die Verarbeitung der Daten erfolgt nach gesetzlichen Bestimmungen und setzt gemäß Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a der Datenschutz-Grundverordnung folgende Einwilligungserklärung voraus: Ich willige in die Verarbeitung meiner Daten ein. Mir ist bekannt, dass diese Einwilligung jederzeit schriftlich oder mündlich ohne Angabe von Gründen widerrufen werden kann, ohne dass mir dadurch Nachteile entstehen. Die Rechtmäßigkeit, der bis zum Widerruf erfolgten Datenverarbeitung wird davon nicht berührt. In diesem Fall kann ich entscheiden, ob die von mir erhobenen Daten gelöscht werden sollen oder weiterhin für die Zwecke der Studie verwendet werden dürfen.  Alle Daten werden anonym erhoben und werden streng vertraulich behandelt sowie ausgewertet.
        <br/><br/>
          <br/>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            style={{ marginRight: '10px', boxShadow: 'none', outline: 'none'}}
          />
          <span className={styles.list}>Ich habe die Informationen zur Studie sowie zum Datenschutz gelesen und stimme zu</span>
          <br/><br/>
        </p>

        <br/>
        {showWarning && <p className= {styles.list} style={{ color: 'red' }}>Bitte stimmen Sie zu</p>}
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
