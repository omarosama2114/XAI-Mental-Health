import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function SurveyScreenDepressionFIPage() {
  return (
    <>
      <Helmet>
        <title>Omar's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col h-screen bg-white-A700 justify-between p-5">
        <Text as="p" className="text-center text-2xl md:text-4xl mb-8">
          Deine KI-Vorhersage
        </Text>
        <div className="bg-blue-50 rounded-lg mx-auto px-20 py-6">
          <Text className="text-center text-xl md:text-2xl font-semibold mt-4">
            Die KI prognostiziert auf Basis<br />deiner Smartphone-Daten
          </Text>
          <Heading as="h2" style={{ color: '#15b1e2' }} className="text-3xl md:text-5xl text-center">
            Anzeichen einer <br />Depression
          </Heading>
        </div>
        <Text as="p" className="text-center text-base md:text-lg mx-2 my-4">
          <span className="text-gray-900">Wenn du 15% mehr </span>
          <span style={{ color: "#15b1e2", fontWeight: "bold" }}>Sport</span>
          <span className="text-gray-900"> machen und deine </span>
          <span style={{ color: "#15b1e2", fontWeight: "bold" }}>tägliche Schrittzahl</span>
          <span className="text-gray-900">  <br />um 10% erhöhen würdest, wären dir keine Anzeichen einer Depression prognostiziert worden.</span>
        </Text>
        <Text as="p" className="text-blue_gray-400 text-sm md:text-base text-center mt-auto">
          Alle angezeigten Ergebnisse sind lediglich Vorhersagen einer KI. Als solche können sie nur Hinweise auf
          den Gesundheitszustand geben. Sie können keine medizinische Diagnose stellen und ersetzen keinesfalls
          einen Arztbesuch. Wenn du dich deprimiert fühlst, wende dich an einen Arzt.
        </Text>
      </div>
    </>
  );
}
