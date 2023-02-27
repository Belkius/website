import React, {ReactDOM, useState, useEffect} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';


function Sort (){

  const color_1 = "#8AC80B"
  const color_2 = "#222629"
  const color_3 = "#94989B"

  const [array, setArray] = useState([]);
  const [duplicates, setDuplicates] = useState(false);
  const [arrayLength, setArrayLength] = useState(10);
  const [algorithm, setAlgorithm] = useState('bubbleSort')
  const [speed, setSpeed] = useState(100)
  const [speedName, setSpeedName] = useState('Fast')
  const [buttonBlock, setButtonBlock] = useState(false)

  const handleArrayLength = event => {
    setArrayLength(event.target.value);
  } 

  const handleSpeedChange = event => {
    setSpeed(event.target.value);
    if (event.target.value === "100") {
      setSpeedName("Fast");
    } else if (event.target.value === "500") {
      setSpeedName("Mid");
    } else {
      setSpeedName("Slow");
    }
  }

  const handleDuplicates = event => {
    setDuplicates(event.target.checked);
  }

  const handleAlgorithmChange = event => {
    setAlgorithm(event.target.value);
  } 

  async function fetchData() {
    const result = await axios.get('http://127.0.0.1:8000/sort', {params: {duplicates: duplicates, length: arrayLength}});
    setArray(result.data);
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = color_3
    }
  }
  async function sortData() {
    if (algorithm === "bubbleSort"){
      bubbleSort();
    }
    else if (algorithm === "selectionSort"){
      selectionSort();
    }
    else if (algorithm === "quickSort"){
      await quickSort(array, 0, array.length - 1);
      finishedAnimation();
    }
    else if (algorithm === "heapSort"){
      heapSort(array);
    }
    else if (algorithm === "insertionSort"){
      insertionSort();
    }
    else if (algorithm === "mergeSort"){
      await mergeSort(0, arrayLength);
      finishedAnimation();
    }
    else if (algorithm === "shellSort"){
      shellSort();
    }
    else if (algorithm === "pancakeSort"){
      pancakeSort();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App list-group-item block mx-auto" >
      <h1 className="card text-white bg-primary m-4 w-7/8">Sorting algorithms visualization</h1>
      <div className="card-body block mx-auto justify-between w-7/8">
        
      <div className="flex justify-center mx-auto w-5/6">
        <label htmlFor="array-length" className="block w-full m-4 px-3 py-2 bg-transparent text-sm text-white font-bold shadow-sm mb-3" disabled>
          <input id="array-length" type="range" min="5" max="30" value={arrayLength} step="1" className="block w-full h-2 bg-[#94989B] accent-[#8AC80B] rounded-lg appearance-none cursor-pointer " onChange={handleArrayLength} disabled={buttonBlock} />
          Array length: {arrayLength} 
        </label>
      </div>


      <div className="flex justify-center items-center mx-auto w-5/6">
          <label htmlFor="speed" className="block w-1/4 px-3 py-2 bg-transparent  rounded-md text-sm text-white font-semibold shadow-sm mb-3">
            <input id="speed" type="range" min="100" max="900" value={speed} step="400" className="w-full h-2 bg-[#94989B] accent-[#8AC80B] rounded-lg appearance-none cursor-pointer " onChange={handleSpeedChange} disabled={buttonBlock} />
            Animation speed: {speedName}
          </label>
        <label className="block btn btn-outline-primary mx-2 mb-3 font-semibold accent-[#8AC80B] text-white">
            <input type="checkbox" onChange={handleDuplicates} disabled={buttonBlock} /> Duplicates
        </label>
        <select className="block btn mx-2 mb-3 rounded-full font-semibold text-white border-none bg-transparent focus:ring-4 focus:outline-none focus:ring-[#8AC80B]" onChange={handleAlgorithmChange} disabled={buttonBlock}>
          <option value='bubbleSort' className="bg-[#222629]">Bubble Sort</option>
          <option value='selectionSort' className="bg-[#222629]">Selection Sort</option>
          <option value='quickSort' className="bg-[#222629]">Quick Sort</option>
          <option value='heapSort' className="bg-[#222629]">Heap Sort</option>
          <option value='insertionSort' className="bg-[#222629]">Insertion Sort</option>
          <option value='mergeSort' className="bg-[#222629]">Merge Sort</option>
          <option value='shellSort' className="bg-[#222629]">Shell Sort</option>
          <option value='pancakeSort' className="bg-[#222629]">Pancake Sort</option>
        </select>
      </div>


        <div className="block items-center justify-between mx-2 my-6">
          <button className="btn btn-outline-primary p-2 mx-2 rounded-full bg-[#8AC80B] font-semibold text-white" onClick={fetchData} disabled={buttonBlock}>New array</button>
          <button className="btn btn-outline-primary p-2 mx-2 rounded-full bg-[#8AC80B] font-semibold text-white" onClick={sortData} disabled={buttonBlock}>Sort array</button>
        </div>
      </div>

      <div className="border-t-2 border-[#94989B} mb-0 mx-6 justify-center grid grid-flow-col auto-cols-max gap-1">
        {array &&
          array.map((val, key) => {
            return (
              <div
                className="bg-[#94989B] mx-0 my-0 w-1.5 sm:w-3 md:w-5 lg:w-8 inline-block"
                id={key}
                style={{ height: val * 400 / array.length }}>
              <p className='hidden md:block text-white text-xs'>{val}</p>
              </div>
            );
          })}
      </div>        
    </div>
  );

  //SORTING ANIMATIONS
 
  function sleep(milliSeconds){
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }
  
  async function finishedAnimation(){
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = '#8AC80B'
      await sleep(50)
    }
    setButtonBlock(false)
  }

  async function swap(array, left, right){
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp
  }

  // SELECTION SORT    do zmiany
  async function selectionSort (){
    setButtonBlock(true)

    for (let i = 0; i < array.length - 1; i++) {
      let minimum = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minimum]) {
          minimum = j
        }
      }
          if (minimum !== i) {
            swap(array, i, minimum)
            setArray([...array])
      
            document.getElementById(minimum).style.backgroundColor = '#DC143C'
            document.getElementById(i).style.backgroundColor = '#6A5ACD'
            await sleep(speed)
            document.getElementById(minimum).style.backgroundColor = color_3
            document.getElementById(i).style.backgroundColor = color_3
      }
    }
    await finishedAnimation()
  }

  // BUBBLE SORT
  async function bubbleSort(){
    setButtonBlock(true)

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1)
          setArray([...array])

          document.getElementById(j).style.backgroundColor = '#DC143C'
          document.getElementById(j + 1).style.backgroundColor = '#6A5ACD'
          await sleep(speed)
          document.getElementById(j).style.backgroundColor = color_3
          document.getElementById(j + 1).style.backgroundColor = color_3
        }
      }
    }
    await finishedAnimation()
  }

  // QUICK SORT     blue === pivot  ,,,,  pointer === #DC143C ,,,, green === done
  async function quickSort(currentArr, low, high) {
    setButtonBlock(true);

    if (low < high){
      let pivot = currentArr[high]
      let pointer = low - 1
      
      await sleep(speed)
      document.getElementById(high).style.backgroundColor = '#6A5ACD'

      for (let i = low; i < high; i++) {          
        document.getElementById(i).style.backgroundColor = '#DC143C'
          if (currentArr[i] <= pivot){
            pointer = pointer + 1;
            swap(currentArr, pointer, i)
            setArray([...array])
          }
          await sleep(speed)
          document.getElementById(i).style.backgroundColor = color_3
        }
          swap(currentArr, pointer + 1, high)
          setArray([...array])
          
          await sleep(speed)
          document.getElementById(high).style.backgroundColor = color_3
          document.getElementById(pointer + 1).style.backgroundColor = color_1
          await quickSort(currentArr, low, pointer)
          await quickSort(currentArr, pointer + 2, high)          
    }
  }

  // HEAP SORT
  async function heapSort() {
    setButtonBlock(true)
    let length = array.length

    for (let index = Math.floor(length / 2) - 1; index >= 0; index--) {
      await heapify(length, index)
    }

    for (let index = length - 1; index >= 0; index--) {
      swap(array, 0, index)
      setArray([...array])
      
      document.getElementById(index).style.backgroundColor = color_1
      document.getElementById(0).style.backgroundColor = '#6A5ACD'
      await sleep(speed)
      document.getElementById(index).style.backgroundColor = color_3
      document.getElementById(0).style.backgroundColor = color_3
      
      await heapify(index, 0)
    }
    await finishedAnimation()
  }

  async function heapify(length, index) {
    let largest = index
    let left = 2 * index + 1
    let right = 2 * index + 2
    
    if (left < length && array[left] > array[largest]) {
      largest = left
    }

    if (right < length && array[right] > array[largest]) {
      largest = right
    }
    
    if (largest !== index) {
      swap(array, index, largest)
      setArray([...array])
      
      document.getElementById(largest).style.backgroundColor = '#DC143C'
      document.getElementById(index).style.backgroundColor = '#6A5ACD'
      await sleep(speed)
      document.getElementById(largest).style.backgroundColor = color_3
      document.getElementById(index).style.backgroundColor = color_3

      await heapify(length, largest)
    }
  }

  //INSERTION SORT
  async function insertionSort() {
    setButtonBlock(true)

    for (let i = 1; i < array.length; i++) {
      let pointer = array[i]
      let j = i - 1
      while (j >= 0 && array[j] > pointer) {
        swap(array, j, j + 1)
        setArray([...array])

        document.getElementById(j + 1).style.backgroundColor = '#DC143C'
        document.getElementById(j).style.backgroundColor = '#6A5ACD'
        await sleep(speed);
        document.getElementById(j + 1).style.backgroundColor = color_3
        document.getElementById(j).style.backgroundColor = color_3

        j--
      }
    }
    await finishedAnimation()
  }

  // MERGE SORT
  async function mergeSort(low, high) {
    setButtonBlock(true)

    if (low < high) {
      const mid = Math.floor((low + high) / 2)
  
      await mergeSort(low, mid)
      await mergeSort(mid + 1, high)
  
      const leftArray = array.slice(low, mid + 1)
      const rightArray = array.slice(mid + 1, high + 1)
  
      let i = 0
      let j = 0
      let k = low
  
      while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
          array[k] = leftArray[i]
          i++
        } else {
          array[k] = rightArray[j]
          j++
        }
        setArray([...array])

        document.getElementById(k).style.backgroundColor = '#DC143C'
        await sleep(speed);
        document.getElementById(k).style.backgroundColor = color_3
        
        k++
      }
  
      while (i < leftArray.length) {
        array[k] = leftArray[i]
        setArray([...array])
            
        i++
        k++
      }
    }
  }

  // SHELL SORT
  async function shellSort() {
    setButtonBlock(true)
  
    let sequence = Math.floor(arrayLength / 2)
  
    while (sequence > 0) {
      for (let i = sequence; i < arrayLength; i++) {
        let key = array[i]
        let j = i
  
        while (j >= sequence && array[j - sequence] > key) {
          swap(array, j, j - sequence)
          setArray([...array])
  
          document.getElementById(j).style.backgroundColor = '#DC143C'
          document.getElementById(j - sequence).style.backgroundColor = '#DC143C'
          await sleep(speed)
          document.getElementById(j).style.backgroundColor = color_3
          document.getElementById(j - sequence).style.backgroundColor = color_3
  
          j = j - sequence
        }
      }
      sequence = Math.floor(sequence / 2)
    }
  
    await finishedAnimation()
  }
  
  // PANCAKE SORT
  async function flip(array, index) {
    let x = Math.ceil(index / 2)

    for (let i = 0; i < x ; i++) {
      document.getElementById(i).style.backgroundColor = '#DC143C'
      document.getElementById(index - i).style.backgroundColor = '#6A5ACD'
    }
    
    await sleep(speed * 2)

    for (let i = 0; i < x ; i++) {
      swap(array, i, index - i)
      setArray([...array])
      x--
    }

    for (let i = 0; i < index ; i++) {
      document.getElementById(i).style.backgroundColor = color_3
      document.getElementById(index - i).style.backgroundColor = color_3
    }
    
    await sleep(speed)
  }
  
  async function searchMax(array, length) {
    let max = 0
    for (let i = 1; i < length; i++) {
      if (array[max] < array[i]) {
        max = i
      }
    }
    return max
  }
  
  async function pancakeSort() {
    setButtonBlock(true)

    let max = 0
    for (let i = arrayLength; i > 1; i--){
      max = await searchMax(array, i)
      if (max != i - 1) {
        await flip(array, max)
        await flip(array, i - 1)
            
        for (let j = i - 1; j < arrayLength ; j++) {
          document.getElementById(j).style.backgroundColor = color_1
        }
      }     
    }
    await finishedAnimation();
  }
}
export default Sort;
