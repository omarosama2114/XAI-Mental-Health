import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";

// Assume 'explanation' is passed as a prop to this component
export default function SurveyScreenDepressionFIPage({ explanation }) {
  // Helper function to format features text with style
  const formatFeaturesText = () => {
    const features = [];
    const textStyle = { color: "#15b1e2", fontWeight: "bold" }; // Increased font size for feature text
    if (explanation.feature_1) features.push(<span style={textStyle}>{explanation.feature_1.replace(/_/g, ' ')}</span>);
    if (explanation.feature_2) features.push(<span style={textStyle}>{explanation.feature_2.replace(/_/g, ' ')}</span>);
    if (explanation.feature_3) features.push(<span style={textStyle}>{explanation.feature_3.replace(/_/g, ' ')}</span>);

    if (features.length === 0) return "";
    if (features.length === 1) return <Text style={{ fontSize: "1.5em" }}>{features[0]} hatte einen besonders großen Einfluss auf diese Vorhersage Deines Depressionsrisikos durch die KI.</Text>;
    if (features.length === 2) return <Text style={{ fontSize: "1.5em" }}>{features[0]} und {features[1]} hatten einen besonders großen Einfluss auf diese Vorhersage Deines Depressionsrisikos durch die KI.</Text>;
    return <Text style={{ fontSize: "1.5em" }}>{features[0]}, {features[1]} und {features[2]} hatten einen besonders großen Einfluss auf diese Vorhersage Deines Depressionsrisikos durch die KI.</Text>;
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
        <Text as="p" className="text-center text-base md:text-lg mx-2 my-4">
          {formatFeaturesText()}
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
