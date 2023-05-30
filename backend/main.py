from data.db_config import connect_db
from data.schemas import *

# Connect to db
db = connect_db()

# This gets the user collection
users_coll = db.get_collection("Users")
# This gets the district collection
districts_coll = db.get_collection("Districts")





