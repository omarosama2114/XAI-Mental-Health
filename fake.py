import json

# Path to your existing text file containing the JSON string combined_explanations(1)
input_file_path = 'frontend/src/combined_explanations (1).txt'

# Path for the new JSON file
output_file_path = 'output_data.json'

# Read the JSON string from the file
with open(input_file_path, 'r') as file:
    json_string = file.read()

# Convert the string to a Python object
data_object = json.loads(json_string)

# Write the data to a new JSON file
with open(output_file_path, 'w') as json_file:
    json.dump(data_object, json_file, indent=4)
