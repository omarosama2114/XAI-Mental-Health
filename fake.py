# import models
from Models.Explanation import FeatureImportanceExplanation, CounterfactualExplanation
import json
from faker import Faker
from typing import List
from uuid import uuid4

# Initialize Faker
fake = Faker()

def generate_feature_importance_explanation() -> FeatureImportanceExplanation:
    return FeatureImportanceExplanation(
        id=str(uuid4()),  # Convert UUID to string
        type="FeatureImportance",
        prediction=fake.random_element(["healthy", "depression"]),
        feature_1=fake.word(),
        feature_2=fake.word()
    )

def generate_counterfactual_explanation() -> CounterfactualExplanation:
    return CounterfactualExplanation(
        id=str(uuid4()),  # Convert UUID to string
        type="Counterfactual",
        prediction=fake.random_element(["healthy", "depression"]),
        feature_1=fake.word(),
        feature_2=fake.word(),
        percentage_feature_1=fake.random_int(-100, 100),
        percentage_feature_2=fake.random_int(-100, 100)
    )

def generate_explanations() -> List[dict]:
    explanations = []
    for _ in range(10):
        explanations.append(generate_feature_importance_explanation().dict())
        explanations.append(generate_counterfactual_explanation().dict())
    return explanations

def save_explanations_to_file(explanations: List[dict], filename: str):
    with open(filename, 'w') as f:
        json.dump(explanations, f, indent=4)

if __name__ == "__main__":
    explanations = generate_explanations()
    save_explanations_to_file(explanations, "explanations.json")
