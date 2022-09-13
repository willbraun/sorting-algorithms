(() => {
    'use strict'

    const makeNewArray = () => Array.apply(null, Array(10)).map(() => Math.floor(Math.random() * 100));

    let array = makeNewArray();
    const $array = document.querySelector('#array');
    const updateDisplay = newArr => $array.innerHTML = newArr.join(', ');
    updateDisplay(array);

    const newSet = () => {
        array = makeNewArray()
        updateDisplay(array);
        $array.setAttribute('style', `color: #000;`);
    }

    const verifyOrder = arr => {
        const newArray = [...array];
        const sorted = newArray.sort((a, b) => a - b);

        let result = true;
        for (let i = 0; i < arr.length; i++)  {
            if (arr[i] !== sorted[i]) {
                result = false;
                break;
            }
        }

        $array.setAttribute('style', `color: ${result ? 'rgb(70, 190, 70)' : '#F00'};`);
    }

    const updateAndVerify = newArr => {
        verifyOrder(newArr);
        updateDisplay(newArr);
    }


    
    const $newSet = document.querySelector('#new-set');
    const $bubbleSort = document.querySelector('#bubble-sort');
    const $selectionSort = document.querySelector('#selection-sort');
    const $insertionSort = document.querySelector('#insertion-sort');
    // const $mergeSort = document.querySelector('#merge-sort');
    // const $quickSort = document.querySelector('#quick-sort');
    // const $heapSort = document.querySelector('#heap-sort');
    // const $countingSort = document.querySelector('#counting-sort');
    // const $radixSort = document.querySelector('#radix-sort');
    // const $bucketSort = document.querySelector('#bubble-sort');

    

    const bubbleSort = arr => {
        // Checks each pair of adjacent elements and swaps if they are out of order
        // Goes through array until no swaps are made

        let newArray = [...arr];
        let didSwap = true;

        while (didSwap) {
            didSwap = false;
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i] > newArray[i+1]) {
                    [newArray[i], newArray[i+1]] = [newArray[i+1], newArray[i]];
                    didSwap = true;
                };
            }
        }

        updateAndVerify(newArray);
    }

    const selectionSort = arr => {
        // Scans for the smallest item and swaps it with the 1st position, then 2nd, and so on to the end of the array

        let newArray = [...arr];
        let index = 0;

        while (index < newArray.length) {
            const smallIndex = newArray.lastIndexOf(Math.min(...newArray.slice(index)));
            [newArray[index], newArray[smallIndex]] = [newArray[smallIndex], newArray[index]];
            index++;
        }

        updateAndVerify(newArray);
    }

    const insertionSort = arr => {

    }

    $newSet.addEventListener('click', newSet);
    $bubbleSort.addEventListener('click', () => bubbleSort(array));
    $selectionSort.addEventListener('click', () => selectionSort(array));
    $insertionSort.addEventListener('click', () => insertionSort(array));
    // $mergeSort.addEventListener('click', () => mergeSort(array));
    // $quickSort.addEventListener('click', () => quickSort(array));
    // $heapSort.addEventListener('click', () => heapSort(array));
    // $countingSort.addEventListener('click', () => countingSort(array));
    // $radixSort.addEventListener('click', () => radixSort(array));
    // $bucketSort.addEventListener('click', () => bucketSort(array));
})();