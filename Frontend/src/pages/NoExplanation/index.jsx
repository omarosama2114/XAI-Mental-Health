import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function SurveyScreenDepressionPage() {
  return (
    <>
      <Helmet>
        <title>No Explanation</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col h-screen bg-white-A700 p-5 justify-between">
        <Text as="p" className="text-center text-2xl md:text-4xl mb-8">
          Deine KI-Vorhersage
        </Text>
        <div className="bg-blue_gray-100 px-20 py-6 rounded-lg max-w-md mx-auto">
          <Text className="text-center text-xl md:text-2xl font-semibold mt-4">
            Die KI prognostiziert auf Basis<br /> deiner Smartphone-Daten
          </Text>
          <Heading as="h2" className="text-red-A700 text-3xl md:text-5xl text-center">
            Anzeichen einer Depression
          </Heading>
        </div>
        <Text as="p" className="text-center text-blue_gray-400 text-base md:text-lg mt-auto">
          Alle angezeigten Ergebnisse sind lediglich Vorhersagen einer KI. Als solche können sie nur Hinweise auf
          den Gesundheitszustand geben. Sie können keine medizinische Diagnose stellen und ersetzen keinesfalls
          einen Arztbesuch. Wenn du dich deprimiert fühlst, wende dich an einen Arzt.
        </Text>
      </div>
    </>
  );
}
