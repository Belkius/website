import React, { useRef, useState } from 'react'
import * as poseDetection from '@tensorflow-models/pose-detection'
import * as tf from '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import { drawKeypoints, drawSkeleton } from './RepCounterDraw'

  


 function RepCounter() {
  const camRef = useRef(null)
  const canvasRef = useRef(null)
  const [camShow, setCamShow] = useState(false)
  const [position, setPosition] = useState(0)
  const [repCount, setRepCount] = useState(0)

  async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  
    camRef.current.srcObject = stream
    await camRef.current.play()
  
    setCamShow(true)
    startDetection()
  }

  async function startDetection (){
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const video = camRef.current
    const videoWidth = video.videoWidth
    const videoHeight = video.videoHeight
    let currentPosition = 0
    let reps = 0

    const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING}
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig)
    
    canvasRef.current.width = videoWidth
    canvasRef.current.height = videoHeight

    setInterval(async () => {
      const poses = await detector.estimatePoses(video)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      poses.forEach(({ keypoints }) => {
        drawKeypoints(keypoints, 0.4, ctx)
        drawSkeleton(keypoints, 0.4, ctx)
        const isDown = detectDownPosition(keypoints, 0.4)
        if (isDown === true && currentPosition === 1) {
          currentPosition = 0
          setPosition(0)
        }
        const isUp = detectUpPosition(keypoints, 0.4)
        if (isUp === true && currentPosition === 0) {
          currentPosition = 1
          reps += 1
          setPosition(1)
          setRepCount(reps)
        }
      });
    }, 100);
  }
  
  function detectDownPosition(keypoints, minConfidence) {
    if ([0, 5, 6, 7, 8, 9, 10].some(i => keypoints[i].score < minConfidence)) {
      return false
    }

    const leftElbowAngle = getAngle(keypoints[5], keypoints[7], keypoints[9])
    const rightElbowAngle = getAngle(keypoints[6], keypoints[8], keypoints[10])
    const minAngle = 140
    const maxAngle = 180

    if (leftElbowAngle >= minAngle &&
      leftElbowAngle <= maxAngle &&
      rightElbowAngle >= minAngle &&
      rightElbowAngle <= maxAngle &&
      keypoints[9].y < keypoints[0].y &&
      keypoints[10].y < keypoints[0].y) {
      return true
    } 
    return false
  }  

  function detectUpPosition(keypoints, minConfidence) {
    if ([0, 5, 6, 7, 8, 9, 10].some(i => keypoints[i].score < minConfidence)) {
      return false
    }

    const leftElbowAngle = getAngle(keypoints[5], keypoints[7], keypoints[9])
    const rightElbowAngle = getAngle(keypoints[6], keypoints[8], keypoints[10])
    const maxAngle = 100
    if (leftElbowAngle <= maxAngle &&
      rightElbowAngle <= maxAngle &&
      keypoints[9].y > keypoints[0].y &&
      keypoints[10].y > keypoints[0].y) {
      return true
    } 
    return false
  }
  
  function getAngle(point1, point2, point3) {
    const vector1 = { x: point1.x - point2.x, y: point1.y - point2.y }
    const vector2 = { x: point3.x - point2.x, y: point3.y - point2.y }
    const dotProduct = vector1.x * vector2.x + vector1.y * vector2.y
    const crossProduct = vector1.x * vector2.y - vector1.y * vector2.x
    const angle = Math.abs(Math.atan2(crossProduct, dotProduct) * (180 / Math.PI))
    return Math.round(angle)
  }
  

  function stop() {
    setCamShow(false)
  }

  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-4xl text-center text-white mb-2 md:py-6">
          Pull Up Counter
        </h1>
      </div>   
      <div className={`flex md:hidden py-4 grid grid-cols-2 place-items-center justify-between gap-x-2 ${camShow ? 'visible' : 'invisible'}`}>
        <div className="h-14 w-24 py-1 px-1 rounded-md text-center text-white font-medium text-sm lg:text-2xl bg-[#C4344F]">
          <p>Position:{position}</p>
          <p>{position === 0 ? 'Down' : 'Up'}</p>
        </div>
        <div className="h-14 w-24 py-2 px-2 rounded-md text-center text-white font-medium text-sm lg:text-2xl bg-[#C4344F]">
          <p>Reps:</p>
          <p>{repCount}</p>
        </div>
      </div>
      <div className={`flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center ${camShow ? 'visible' : 'invisible'}`}>
        <div className="hidden md:block h-16 w-24 lg:h-20 lg:w-32 py-1 px-1 rounded-md text-center text-white font-medium text-sm lg:text-2xl bg-[#C4344F]">
          <p>Position:</p>
          <p>{position === 0 ? 'Down' : 'Up'}</p>
        </div>
        <video id="video" ref={camRef} className="flex max-w-[90%] border-2 border-[#22d3ee] rounded-2xl" playsInline autoPlay/>
        <canvas id="canvas" ref={canvasRef} className="absolute max-w-[90%] rounded-2xl" />
        <div className="hidden md:block h-16 w-24 lg:h-20 lg:w-32 py-2 px-2 rounded-md text-center text-white font-medium text-sm lg:text-2xl bg-[#C4344F]">
          <p>Reps:</p>
          <p>{repCount}</p>
        </div>
      </div>
      <div className="flex block items-center justify-center mx-2 my-1">
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={record}>
          Start Camera
        </button>
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={stop}>
          Stop Camera
        </button>
        {/* <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={() => startDetection()}>
          Start Detection
        </button> */}
      </div>
    </>
  );
}

export default RepCounter;
