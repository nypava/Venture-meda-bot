from json import load
from os import path

current_dir = path.dirname(__file__)

with open(path.join(current_dir, "text.json")) as file:
    text = load(file)
