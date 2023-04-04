#! python3.
import calculations
import algorithms
import time
import cv2
import numpy as np
import base64

from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from starlette.responses import StreamingResponse
from fastapi import FastAPI, Request, Form, HTTPException, Response, WebSocket
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

class CamData(BaseModel):
    width: int
    height: int
    data: dict

@app.post("/process_cam_data")
async def process_cam_data(cam_data: CamData):
    # process the received data here
    # for example, you can access the width, height, and data fields of cam_data
    print(cam_data.width, cam_data.height)
    print(list(cam_data.data.items()))
    """ # convert the received data to a NumPy array
    img_array = np.array(cam_data.data, dtype=np.uint8).reshape((cam_data.height, cam_data.width, 3))
    # convert the NumPy array to an OpenCV image
    img = cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR)
    # save the image as a JPG file
    cv2.imwrite("cam_image.jpg", img) """
    # return a response
    return {"message": "Cam data processed successfully"}
