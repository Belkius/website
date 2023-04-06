import React, { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import { drawKeypoints, drawSkeleton } from './RepCounterDraw';

  


 function RepCounter() {
  const camRef = useRef(null)
  const canvasRef = useRef(null)
  const [camShow, setCamShow] = useState(false)

  function stop() {
    setCamShow(false)
  }

  async function record() {
    // Get access to the webcam
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  
    // Display the webcam data in the video element
    camRef.current.srcObject = stream
    camRef.current.play()
  
    // Start pose detection
    //startPosenet()
    setCamShow(true)
  }

  async function detection (){
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = camRef.current;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);

    const poses = await detector.estimatePoses(video);
    
    canvasRef.current.width = videoWidth
    canvasRef.current.height = videoHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // add a square to the canvas

    poses.forEach(({keypoints}) => {
      console.log(keypoints)
      drawKeypoints(keypoints, 0.4, ctx);
      drawSkeleton(keypoints, 0.7, ctx);
    }) 
  }

  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-5xl text-center text-white mb-2 md:py-6">
          Pull Up Counter
        </h1>
      </div>
      <div className={`flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center ${camShow ? 'visible' : 'invisible'}`}>
        <video id="video" ref={camRef} className="flex max-w-[90%] border-2 border-[#22d3ee] rounded-2xl" playsInline autoPlay/>
        <canvas id="canvas" ref={canvasRef} className="absolute max-w-[90%] rounded-2xl" />
      </div>
      <div className="flex block items-center justify-center mx-2 my-1">
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={record}>
          Start Camera
        </button>
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={stop}>
          Stop Camera
        </button><button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={() => detection()}>
          akcja
        </button>
      </div>
    </>
  );
}

export default RepCounter;
