from fastapi import FastAPI, HTTPException
from typing import Union
import json

app = FastAPI()

def load_explanations_data():
    with open('../explanations.json', 'r') as file:
        return json.load(file)

# Load the explanations data into a variable
explanations_data = load_explanations_data()

@app.get("/explanations/{explanation_id}")
def get_explanation(explanation_id: str) -> Union[dict, None]:
    """
    API endpoint to fetch an explanation by its ID.
    """
    for explanation in explanations_data:
        if explanation["id"] == str(explanation_id):
            return explanation
    raise HTTPException(status_code=404, detail="Explanation not found")

@app.post("/start-session")
def start_session():
    # Placeholder: Logic to start a session
    return {"session_id": "123456"}


