#! python3.
import calculations
import algorithms
import time
import cv2
from fastapi.responses import HTMLResponse
from starlette.responses import StreamingResponse
from fastapi import FastAPI, Request, Form, HTTPException, Response
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

@app.get("/dart")
async def dart():
    return {"another":"route"}

@app.get("/rep_counter")
async def rep_counter():
    return {"another":"route"}
""" 
class VideoCamera(object):
    def __init__(self):
      self.video = cv2.VideoCapture(0)

    def __del__(self):
      self.video.release()

    def get_frame(self):
      ret, frame = self.video.read()
      ret, jpeg = cv2.imencode('.jpg', frame)
      return jpeg.tobytes()

async def video_stream(camera):
    while True:
        frame = camera.get_frame()
        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n'
        )

@app.get('/video_feed')
async def video_feed():
    return StreamingResponse(video_stream(VideoCamera()), media_type='multipart/x-mixed-replace; boundary=frame') """