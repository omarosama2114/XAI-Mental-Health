import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

export default function SurveyScreenDepressionCFPage({ explanation }) {
  const replaceUmlauts = (text) => {
    return text
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/Ae/g, 'Ä') // for uppercase
      .replace(/Oe/g, 'Ö') // for uppercase
      .replace(/Ue/g, 'Ü') // for uppercase
      .replace(/_/g, ' ');
  };

  const formatCounterfactualText = () => {
    const entries = [];
    if (explanation.feature_1 && explanation.percentages_feature_1 !== undefined)
      entries.push(
        <span key="feature1" style={{ color: "#15b1e2", fontWeight: "bold" }}>
          {replaceUmlauts(explanation.feature_1)} {explanation.percentages_feature_1 >= 0 ? '+' : ''}{Math.round(explanation.percentages_feature_1)}%
        </span>
      );
    if (explanation.feature_2 && explanation.percentages_feature_2 !== undefined)
      entries.push(
        <span key="feature2" style={{ color: "#15b1e2", fontWeight: "bold" }}>
          {replaceUmlauts(explanation.feature_2)} {explanation.percentages_feature_2 >= 0 ? '+' : ''}{Math.round(explanation.percentages_feature_2)}%
        </span>
      );
    if (explanation.feature_3 && explanation.percentages_feature_3 !== undefined)
      entries.push(
        <span key="feature3" style={{ color: "#15b1e2", fontWeight: "bold" }}>
          {replaceUmlauts(explanation.feature_3)} {explanation.percentages_feature_3 >= 0 ? '+' : ''}{Math.round(explanation.percentages_feature_3)}%
        </span>
      );

    return entries.length > 0 ? (
      <Text as="p" className="text-center text-base md:text-xl mx-2 my-4" style={{ fontSize: '1.5em' }}>
        {explanation.prediction === "depression" ? 
          "Die folgenden Veränderungen hätten zur Vorhersage eines niedrigen Depressionsrisikos geführt:" : 
          "Die folgenden Veränderungen hätten zur Vorhersage eines erhöhten Depressionsrisikos geführt:"}
        {entries.map((entry, index) => (
          <React.Fragment key={index}>
            <br />
            <br />

            {entry}
          </React.Fragment>
        ))}
      </Text>
    ) : null;
  };


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
          <Heading as="h2" className={`${explanation.prediction === "depression" ? "text-red-A700" : "text-green-600"} text-3xl md:text-5xl text-center`}>
            {explanation.prediction === "depression" ? "Erhöhtes Depressionsrisiko" : "Niedriges Depressionsrisiko"}
          </Heading>
        </div>
        {formatCounterfactualText()}
        <Text as="p" className="text-blue_gray-400 text-sm md:text-base text-center mt-auto">
          Alle angezeigten Ergebnisse sind lediglich Vorhersagen einer KI. Als solche können sie nur Hinweise auf
          den Gesundheitszustand geben. Sie können keine medizinische Diagnose stellen und ersetzen keinesfalls
          einen Arztbesuch. Wenn du dich deprimiert fühlst, wende dich an einen Arzt.
        </Text>
      </div>
    </>
  );
}
