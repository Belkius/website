import React, {useRef, useEffect, useState} from 'react';




function RepCounter() {

  const camRef = useRef(null)

  function record  () {
    navigator.mediaDevices
      .getUserMedia({video:{}})
      .then(stream => {
        let video = camRef.current
        video.srcObject = stream
        video.play()
      })
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
      <div className="flex w-[90%] h-[70vh] mx-auto my-auto  rounded-2xl justify-center items-center">
        <video ref={camRef} className="max-w-[90%] border-2 border-[#09a9c9] rounded-2xl"></video>
      </div>
    </>
  )
}
export default RepCounter;
