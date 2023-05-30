from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = "mongodb+srv://KBNDev:KBNDevucg567@kyiv-bomb-notification.z8ok2ge.mongodb.net/?retryWrites=true&w=majority"



def connect_db():

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        # Return client instance of our KBN_db
        return client["KBN_db"]
    except Exception as e:
        print(e)



