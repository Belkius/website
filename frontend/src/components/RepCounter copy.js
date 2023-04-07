/* import React, { useRef, useEffect, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as pn from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from './RepCounterDraw';

function RepCounter() {
  const camRef = useRef(null)
  const canvasRef = useRef(null)
  const [camShow, setCamShow] = useState(true)

  function record() {
    startPosenet()
    setCamShow(true)
  }

  function stop() {
    setCamShow(false)
  }

  //posenet
  async function startPosenet (){
    const net = await pn.load({
      inputResolution:{width:640, height:480},
      scale: 0.5
    })
    setInterval(()=>{
      detector(net)
    }, 100)
  }

  async function detector(net){
    if(typeof camRef.current !== "undefined" && camRef.current !== null && camRef.current.video.readyState===4 ){
      const camFeed = camRef.current.video
      const camWidth = camRef.current.video.videoWidth
      const camHeight = camRef.current.video.videoHeight

      camRef.current.video.width = camRef.current.video.videoWidth
      camRef.current.video.height = camRef.current.video.videoHeight

      const signlePose = await net.estimateSinglePose(camFeed)

      updateCanvas(signlePose, camFeed, camWidth, camHeight, canvasRef)
    }
  }
//do i need video in this function???
  async function updateCanvas(pose, video, camWidth, camHeight, canvas){
    const ctx = canvas.current.getContext("2d")
    canvas.current.width = camWidth
    canvas.current.height = camHeight

    drawKeypoints(pose['keypoints'], 0.5, ctx)
    drawSkeleton(pose['keypoints'], 0.5, ctx)

  }

  startPosenet()

  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-5xl text-center text-white mb-2 md:py-6">
          Pull Up Counter
        </h1>
      </div>
      <div className={`flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center ${camShow ? 'visible' : 'invisible'}`}>
        <Webcam ref={camRef} className='max-w-[90%] border-2 border-[#09a9c9] rounded-2xl'/>
        <canvas ref={canvasRef} className='absolute max-w-[90%] rounded-2xl' />
      </div>
      <div className="flex block items-center justify-center mx-2 my-1">
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={record}>
          Start Camera
        </button>
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={stop}>
          Stop Camera
        </button>
      </div>
    </>
  );
}

export default RepCounter;
 */