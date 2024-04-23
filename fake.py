import json
import uuid

filename = 'Frontend/src/combined_explanations_corrected.json'

with open(filename, 'r') as file:
    data = json.load(file)

for item in data:
    item["id"] = str(uuid.uuid4())

with open('Frontend/src/combined_explanations_corrected_with_uuid.json', 'w') as file:
    file.write('[\n')
    last_index = len(data) - 1
    for index, item in enumerate(data):
        json_str = json.dumps(item, indent=4)
        file.write(json_str)
        if index != last_index:
            file.write(',\n')
        else:
            file.write('\n')
    file.write(']')
