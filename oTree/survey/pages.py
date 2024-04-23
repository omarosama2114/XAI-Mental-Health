from otree.api import Page, WaitPage

class DemographicSurvey(Page):
    form_model = 'player'
    form_fields = ['age', 'gender', 'education']

class ResultsWaitPage(WaitPage):
    pass

class Results(Page):
    pass

# Make sure this is at the bottom of the file and correctly formatted
page_sequence = [DemographicSurvey, ResultsWaitPage, Results]
