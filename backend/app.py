#! python3.
import calculations
import algorithms
import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
async def home():
    return {"Hello": "World"}

@app.get("/sort")
async def sort(duplicates, length):
    if duplicates.lower() == "true":
        dupli = True
    else:
        dupli = False
    array = []
    calculations.generate(array, int(length), dupli)
    return array

