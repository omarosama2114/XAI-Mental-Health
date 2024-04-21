from pydantic import BaseModel, validator, Field
from typing import Literal, Optional, Union
from uuid import UUID

ExplanationType = Literal["FeatureImportance", "Counterfactual"]
HealthStatus = Literal["healthy", "depression"]

class Explanation(BaseModel):
    id: str
    type: ExplanationType
    prediction: HealthStatus

class FeatureImportanceExplanation(Explanation):
    feature_1: str
    feature_2: Optional[str] = None
    feature_3: Optional[str] = None

class CounterfactualExplanation(Explanation):
    feature_1: str
    feature_2: Optional[str] = None
    feature_3: Optional[str] = None
    percentage_feature_1: Optional[Union[int, float]] = None
    percentage_feature_2: Optional[Union[int, float]] = None
    percentage_feature_3: Optional[Union[int, float]] = None
