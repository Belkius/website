import React, { useRef, useEffect, useState } from 'react';

function RepCounter() {
  const camRef = useRef(null);
  const [camShow, setCamShow] = useState(true);
  const [camData, setCamData] = useState({});

  function record() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      let video = camRef.current;
      video.srcObject = stream;
      video.play();
    });
    setCamShow(true);
  }

  function stop() {
    camRef.current.srcObject = null;
    setCamShow(false);
  }

  async function processFrame() {
    let video = camRef.current;
    let canvas = document.createElement('canvas');
    canvas.width = 12 //video.videoWidth;
    canvas.height = 12 //video.videoHeight;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    let json = {
      width: canvas.width,
      height: canvas.height,
      data: imageData.data,
    };
    setCamData(json);
  
    try {
      const response = await fetch('http://localhost:8000/process_cam_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      });
      
      console.log(JSON.stringify(json));
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    record()
  }, [camRef])

  useEffect(() => {
    if (camShow) {
      let intervalId = setInterval(processFrame, 1000); // process a frame every 1s
      return () => clearInterval(intervalId)
    }
  }, [camShow])

  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-5xl text-center text-white mb-2 md:py-6">
          Pull Up Counter
        </h1>
      </div>
      {/*camera*/}
      <div
        className={`flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center ${
          camShow ? 'visible' : 'invisible'
        }`}
      >
        <video
          ref={camRef}
          controls
          muted="muted"
          className="max-w-[90%] border-2 border-[#09a9c9] rounded-2xl"
        >
          <source src="http://localhost:8000/rep_counter" type="video/mp4" />
        </video>
      </div>
      <div className="flex block items-center justify-center mx-2 my-1">
        <button
          className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white"
          onClick={record}
        >
          Start Camera
        </button>
        <button
          className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white"
          onClick={stop}
        >
          Stop Camera
        </button>
      </div>
      {/* <div className="mt-4">
        <pre>{JSON.stringify(camData, null, 2)}</pre>
      </div> */}
    </>
  );
}

export default RepCounter;
