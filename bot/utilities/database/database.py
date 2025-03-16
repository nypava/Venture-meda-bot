from pymongo import MongoClient
from dotenv import load_dotenv
from os import getenv, environ

load_dotenv()

_mongo_token = getenv("mongo_token")

class Database:
    def __init__(self) -> None:
        self.client = MongoClient(_mongo_token)
        self._register_db = self.client.database.registered_users
        self._enroll_db = self.client.database.enroll

    def get_registration(self, user_id) -> dict|None:
        return self._register_db.find_one({"user_id": user_id})

    def get_enrolled(self, user_id) -> dict|None:
        return self._enroll_db.find_one({"user_id": user_id})
