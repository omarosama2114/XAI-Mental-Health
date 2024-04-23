import itertools
from otree.api import *

# Define model fields as functions for reuse
def create_age_field():
    return models.IntegerField(
        min=18, max=99, 
        label="What is your age?"
    )

def create_gender_field():
    return models.StringField(
        choices=['Male', 'Female', 'Other'],
        label='What is your gender?',
        widget=widgets.RadioSelect
    )

def create_education_field():
    return models.StringField(
        choices=[
            'High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD'
        ],
        label='What is your highest level of education?',
        widget=widgets.RadioSelect
    )

class Constants(BaseConstants):
    name_in_url = 'demographic_survey'
    players_per_group = None
    num_rounds = 1

class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass

class Player(BasePlayer):
    age = create_age_field()
    gender = create_gender_field()
    education = create_education_field()

# Page definitions
class DemographicSurvey(Page):
    form_model = 'player'
    form_fields = ['age', 'gender', 'education']

class Results(Page):
    pass

class Explanation(Page):
    pass  # Since the content is static, managed by the template, no form_model or form_fields needed.


page_sequence = [DemographicSurvey, Explanation, Results]

