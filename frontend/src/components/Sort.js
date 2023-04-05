import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { bubbleSort, selectionSort, quickSort, heapSort, insertionSort, mergeSort, shellSort, pancakeSort, finishedAnimation } from './SortingAlgorithms.js';



function Sort (){

  //const color_1 = "#0BC823"
  //const color_2 = "#C4344F"
  const color_3 = "#1A1A1A"

  const [array, setArray] = useState([])
  const [duplicates, setDuplicates] = useState(false)
  const [arrayLength, setArrayLength] = useState(10)
  const [algorithm, setAlgorithm] = useState('bubbleSort')
  const [speed, setSpeed] = useState(100)
  const [speedName, setSpeedName] = useState('Fast')
  const [buttonBlock, setButtonBlock] = useState(false)

  const handleArrayLength = event => {
    setArrayLength(event.target.value)
  } 

  const handleSpeedChange = event => {
    setSpeed(event.target.value);
    if (event.target.value === "100") {
      setSpeedName("Fast")
    } else if (event.target.value === "500") {
      setSpeedName("Mid")
    } else {
      setSpeedName("Slow")
    }
  }

  const handleDuplicates = event => {
    setDuplicates(event.target.checked)
  }

  const handleAlgorithmChange = event => {
    setAlgorithm(event.target.value)
  } 

  async function fetchData() {
    const result = await axios.get('http://127.0.0.1:8000/sort', {params: {duplicates: duplicates, length: arrayLength}})
    setArray(result.data)
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = color_3
    }
  }
  async function sortData() {
    setButtonBlock(true)

    if (algorithm === "bubbleSort"){
      await bubbleSort(array, setArray, speed)
    }
    else if (algorithm === "selectionSort"){
      await selectionSort(array, setArray, speed)
    }
    else if (algorithm === "quickSort"){
      await quickSort(array, 0, array.length - 1, array, setArray, speed)
    }
    else if (algorithm === "heapSort"){
      await heapSort(array, setArray, speed)
    }
    else if (algorithm === "insertionSort"){
      await insertionSort(array, setArray, speed)
    }
    else if (algorithm === "mergeSort"){
      await mergeSort(0, arrayLength, array, setArray, speed);
    }
    else if (algorithm === "shellSort"){
      await shellSort(array, setArray, arrayLength, speed)
    }
    else if (algorithm === "pancakeSort"){
      await pancakeSort(array, setArray, arrayLength, speed)
    }
    
    await finishedAnimation(array, setButtonBlock)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App list-group-item block mx-auto" >
      <h1 className="card text-2xl text-white bg-primary m-4 w-7/8">Sorting algorithms visualization</h1>
      <div className="card-body block mx-auto justify-between w-7/8"> 
        <div className="flex justify-center mx-auto w-5/6">
          <label htmlFor="array-length" className="block w-full m-4 px-3 py-2 bg-transparent text-sm text-white font-bold shadow-sm mb-3" disabled>
            <input id="array-length" type="range" min="5" max="30" value={arrayLength} step="1" className="block w-full h-2 bg-[#1A1A1A] accent-[#22d3ee] rounded-lg appearance-none cursor-pointer " onChange={handleArrayLength} disabled={buttonBlock} />
            Array length: {arrayLength} 
          </label>
        </div>


        <div className="flex justify-center items-center mx-auto w-5/6">
            <label htmlFor="speed" className="block w-1/4 px-3 py-2 bg-transparent  rounded-md text-sm text-white font-semibold shadow-sm mb-3">
              <input id="speed" type="range" min="100" max="900" value={speed} step="400" className="w-full h-2 bg-[#1A1A1A] accent-[#22d3ee] rounded-lg appearance-none cursor-pointer " onChange={handleSpeedChange} disabled={buttonBlock} />
              Animation speed: {speedName}
            </label>
          <label className="block btn btn-outline-primary mx-2 mb-3 font-semibold accent-[#22d3ee] text-white">
              <input type="checkbox" onChange={handleDuplicates} disabled={buttonBlock} /> Duplicates
          </label>
          <select className="block btn mx-2 mb-3 rounded-full font-semibold text-white border-none bg-transparent focus:ring-4 focus:outline-none focus:ring-[#22d3ee]" onChange={handleAlgorithmChange} disabled={buttonBlock}>
            <option value='bubbleSort' className="bg-black">Bubble Sort</option>
            <option value='selectionSort' className="bg-black">Selection Sort</option>
            <option value='quickSort' className="bg-black">Quick Sort</option>
            <option value='heapSort' className="bg-black">Heap Sort</option>
            <option value='insertionSort' className="bg-black">Insertion Sort</option>
            <option value='mergeSort' className="bg-black">Merge Sort</option>
            <option value='shellSort' className="bg-black">Shell Sort</option>
            <option value='pancakeSort' className="bg-black">Pancake Sort</option>
          </select>
        </div>


        <div className="block items-center justify-between mx-2 my-6">
          <button className="btn btn-outline-primary p-2 mx-2 rounded-full bg-[#C4344F] font-semibold text-white" onClick={fetchData} disabled={buttonBlock}>New array</button>
          <button className="btn btn-outline-primary p-2 mx-2 rounded-full bg-[#C4344F] font-semibold text-white" onClick={sortData} disabled={buttonBlock}>Sort array</button>
        </div>
      </div>

      <div className="border-t-2 border-[#1A1A1A] mb-0 mx-6 justify-center grid grid-flow-col auto-cols-max gap-1">
        {array &&
          array.map((val, key) => {
            return (
              <div
                className="bg-[#1A1A1A] mx-0 my-0 w-1.5 sm:w-3 md:w-5 lg:w-8 inline-block"
                id={key}
                style={{ height: val * 400 / array.length }}>
              <p className='hidden md:block text-white text-xs'>{val}</p>
              </div>
            );
          })}
      </div>        
    </div>
  )
}
export default Sort;
