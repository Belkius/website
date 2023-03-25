const color_1 = "#0BC823"
const color_2 = "#C4344F"
const color_3 = "#1A1A1A"


  //SORTING ANIMATIONS
  function sleep(milliSeconds){
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }
  
  export async function finishedAnimation(array, setButtonBlock){
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = "#22d3ee"
      await sleep(50)
    }
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = color_2
      await sleep(50)
    }
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = '#1A1A1A'
      await sleep(50)
    }
    setButtonBlock(false)
  }

  async function swap(array, left, right){
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp
  }

  // SELECTION SORT
  export async function selectionSort (array, setArray, speed){
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
      
            document.getElementById(minimum).style.backgroundColor = '#22d3ee'
            document.getElementById(i).style.backgroundColor = '#C4344F'
            await sleep(speed)
            document.getElementById(minimum).style.backgroundColor = color_3
            document.getElementById(i).style.backgroundColor = color_3
      }
    }
  }

  // BUBBLE SORT
  export async function bubbleSort(array, setArray, speed){
    
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1)
          setArray([...array])

          document.getElementById(j).style.backgroundColor = '#22d3ee'
          document.getElementById(j + 1).style.backgroundColor = '#C4344F'
          await sleep(speed)
          document.getElementById(j).style.backgroundColor = color_3
          document.getElementById(j + 1).style.backgroundColor = color_3
        }
      }
    }
  }
  
  // QUICK SORT
  export async function quickSort(currentArr, low, high, array, setArray, speed) {
    
    if (low < high){
      let pivot = currentArr[high]
      let pointer = low - 1
      
      await sleep(speed)
      document.getElementById(high).style.backgroundColor = '#22d3ee'

      for (let i = low; i < high; i++) {          
        document.getElementById(i).style.backgroundColor = '#C4344F'
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
          await quickSort(currentArr, low, pointer, array, setArray, speed)
          await quickSort(currentArr, pointer + 2, high, array, setArray, speed)          
    }
  }

  // HEAP SORT
  export async function heapSort(array, setArray, speed) {
    let length = array.length

    for (let index = Math.floor(length / 2) - 1; index >= 0; index--) {
      await heapify(length, index, array, setArray, speed)
    }

    for (let index = length - 1; index >= 0; index--) {
      swap(array, 0, index)
      setArray([...array])
      document.getElementById(0).style.backgroundColor = '#22d3ee'
      await sleep(speed)
      document.getElementById(index).style.backgroundColor = color_3
      document.getElementById(0).style.backgroundColor = color_3
      
      await heapify(index, 0, array, setArray, speed)
    }
  }

  async function heapify(length, index, array, setArray, speed) {
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
      
      document.getElementById(largest).style.backgroundColor = '#C4344F'
      document.getElementById(index).style.backgroundColor = '#22d3ee'
      await sleep(speed)
      document.getElementById(largest).style.backgroundColor = color_3
      document.getElementById(index).style.backgroundColor = color_3

      await heapify(length, largest, array, setArray, speed)
    }
  }

  //INSERTION SORT
  export async function insertionSort(array, setArray, speed) {

    for (let i = 1; i < array.length; i++) {
      let pointer = array[i]
      let j = i - 1
      while (j >= 0 && array[j] > pointer) {
        swap(array, j, j + 1)
        setArray([...array])

        document.getElementById(j + 1).style.backgroundColor = '#C4344F'
        document.getElementById(j).style.backgroundColor = '#22d3ee'
        await sleep(speed);
        document.getElementById(j + 1).style.backgroundColor = color_3
        document.getElementById(j).style.backgroundColor = color_3

        j--
      }
    }
  }

  // MERGE SORT
  export async function mergeSort(low, high, array, setArray, speed) {
    if (low < high) {
      const mid = Math.floor((low + high) / 2)
  
      await mergeSort(low, mid, array, setArray, speed)
      await mergeSort(mid + 1, high, array, setArray, speed)
  
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

        document.getElementById(k).style.backgroundColor = '#C4344F'
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
  export async function shellSort(array, setArray, arrayLength, speed) {
    let sequence = Math.floor(arrayLength / 2)
  
    while (sequence > 0) {
      for (let i = sequence; i < arrayLength; i++) {
        let key = array[i]
        let j = i
  
        while (j >= sequence && array[j - sequence] > key) {
          swap(array, j, j - sequence)
          setArray([...array])
  
          document.getElementById(j).style.backgroundColor = '#C4344F'
          document.getElementById(j - sequence).style.backgroundColor = '#22d3ee'
          await sleep(speed)
          document.getElementById(j).style.backgroundColor = color_3
          document.getElementById(j - sequence).style.backgroundColor = color_3
  
          j = j - sequence
        }
      }
      sequence = Math.floor(sequence / 2)
    }
  }

  // PANCAKE SORT
  async function flip(array, setArray, index, speed) {
    let x = Math.ceil(index / 2)

    for (let i = 0; i < x ; i++) {
      document.getElementById(i).style.backgroundColor = '#C4344F'
      document.getElementById(index - i).style.backgroundColor = '#22d3ee'
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
  
  export async function pancakeSort(array, setArray, arrayLength, speed) {
    let max = 0
    for (let i = arrayLength; i > 1; i--){
      max = await searchMax(array, i)
      if (max != i - 1) {
        await flip(array, setArray, max, speed)
        await flip(array, setArray, i - 1, speed)
            
        for (let j = i - 1; j < arrayLength ; j++) {
          document.getElementById(j).style.backgroundColor = color_3
        }
      }     
    }
  }


  
  

  