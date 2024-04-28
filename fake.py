from pymongo import MongoClient
import pandas as pd

# Connect to MongoDB
client = MongoClient('mongodb+srv://omar2114:omar2114@cluster0.anngims.mongodb.net/Mental-Health')
db = client.yourDatabaseName
collection = db.yourCollectionName

# Query the data you want to export
data = collection.find()

# Convert to Pandas DataFrame
df = pd.DataFrame(list(data))

# Export to CSV
df.to_csv('output.csv', index=False)
