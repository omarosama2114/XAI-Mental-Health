from pydantic import BaseModel, validator
from typing import Literal


ExplanationType = Literal["FeatureImportance", "Counterfactual"]

class FeatureImportanceExplanation(BaseModel):
    id: int
    type: ExplanationType = "FeatureImportance"
    feature_1: str
    feature_2: str

class CounterfactualExplanation(BaseModel):
    id: int
    type: ExplanationType = "Counterfactual"
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



