from pydantic import BaseModel, validator
from typing import Literal
from uuid import UUID

# Define possible values for ExplanationType and HealthStatus
ExplanationType = Literal["FeatureImportance", "Counterfactual"]
HealthStatus = Literal["healthy", "depression"]

class Explanation(BaseModel):
    id: str
    type: ExplanationType
    prediction: HealthStatus  # Prediction about health status

class FeatureImportanceExplanation(Explanation):
    feature_1: str
    feature_2: str

class CounterfactualExplanation(Explanation):
    feature_1: str
    feature_2: str
    percentage_feature_1: int
    percentage_feature_2: int

    # Validator for percentage_feature_1
    @validator('percentage_feature_1')
    def check_percentage_feature_1(cls, v):
        if v < -100:
            raise ValueError('percentage_feature_1 must be larger than -100')
        return v

    # Validator for percentage_feature_2
    @validator('percentage_feature_2')
    def check_percentage_feature_2(cls, v):
        if v < -100:
            raise ValueError('percentage_feature_2 must be larger than -100')
        return v
