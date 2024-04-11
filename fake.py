import json
import random
from faker import Faker
from typing import List

fake = Faker()

ExplanationType = ["FeatureImportance", "Counterfactual"]

def generate_feature_importance_explanation() -> dict:
    return {
        "id": random.randint(1, 100),
        "type": "FeatureImportance",
        "feature_1": fake.word(),
        "feature_2": fake.word()
    }

def generate_counterfactual_explanation() -> dict:
    return {
        "id": random.randint(1, 100),
        "type": "Counterfactual",
        "feature_1": fake.word(),
        "feature_2": fake.word(),
        "percentage_feature_1": random.randint(-100, 100),
        "percentage_feature_2": random.randint(-100, 100)
    }

def generate_explanations() -> List[dict]:
    explanations = []
    for _ in range(10):
        explanations.append(generate_feature_importance_explanation())
        explanations.append(generate_counterfactual_explanation())
    return explanations

def save_explanations_to_file(explanations: List[dict], filename: str):
    with open(filename, 'w') as f:
        json.dump(explanations, f, indent=4)

if __name__ == "__main__":
    explanations = generate_explanations()
    save_explanations_to_file(explanations, "explanations.json")
