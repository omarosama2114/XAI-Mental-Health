import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // To control the page head elements such as title
import styles from '../styles/introductory.module.css';

export default function WrongPage() {
    let navigate = useNavigate();
  
    const handleProceed = () => {
        navigate("/persona");
    };

    return (
        <>
          <Helmet>
            <title>Welcome - Omar's Application</title>
            <meta name="description" content="Introductory page of the experiment" />
          </Helmet>
          <div className={styles.container} style={{marginTop: '225px'}}>
            <h1 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontSize: '2.0em' }}>Das hat leider nicht gestimmt<br/> <br/> </h1>
            <p className="mb-4 text text-xl md:text-2xl">
            Für diese Studie ist es extrem wichtig, dass Sie sich gut in die Person Flo hinenversetzen. Daher bitten wir Sie, sich das Profil von Flo erneut in Ruhe anzuschauen.
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