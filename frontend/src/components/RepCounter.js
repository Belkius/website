import React, {useRef, useEffect, useState} from 'react';

function RepCounter() {

  const camRef = useRef(null)
  const [camShow, setCamShow] = useState(true)

  function record  () {
    navigator.mediaDevices
      .getUserMedia({video: true})
      .then(stream => {
        let video = camRef.current
        video.srcObject = stream
        video.play()
      })
      setCamShow(true)
  }

  function stop (){
    camRef.current.srcObject = null
    setCamShow(false)
  }
  
  useEffect(() => {
    record()
  }, [camRef])

  return (
    <>
      <div>
        <h1 className="font-primary font-semibold text-2xl lg:text-5xl text-center text-white mb-2 md:py-6">Pull Up Counter</h1>
      </div>
      {/*camera*/}
      <div className={`flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center ${camShow  ? 'visible' : 'invisible'}`}>
        <video ref={camRef} controls muted="muted" className="max-w-[90%] border-2 border-[#09a9c9] rounded-2xl">
          <source src="http://localhost:8000/rep_counter" type="video/mp4" />
        </video>
      </div>
      <div className="flex block items-center justify-center mx-2 my-1">
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={record}>Start Camera</button>
        <button className="btn btn-outline-primary p-3 mx-4 rounded-full bg-[#C4344F] font-semibold text-white" onClick={stop}>Stop Camera</button>
      </div>
    </>
  )
}
export default RepCounter;
