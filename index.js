(() => {
    'use strict'

    const array = Array.apply(null, Array(10)).map(() => Math.floor(Math.random() * 100));
    const $array = document.querySelector('#array');
    const updateDisplay = newArr => $array.innerHTML = newArr.join(', ');
    updateDisplay(array);

    const verifyOrder = arr => {
        const newArray = [...array];
        const sorted = newArray.sort((a, b) => a - b);
        if (arr.every(el => arr.indexOf(el) === sorted.indexOf(el))) {
            $array.setAttribute('style', 'color: rgb(70, 190, 70);');
        }
        else {
            $array.setAttribute('style', 'color: #F00;');
        }
    }

    const updateAndVerify = newArr => {
        verifyOrder(newArr);
        updateDisplay(newArr);
    }
    

    const $bubbleSort = document.querySelector('#bubble-sort');
    const $selectionSort = document.querySelector('#selection-sort');
    // const $insertionSort = document.querySelector('#insertion-sort');
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
        // Scans for the smallest item and swaps it with the 1st position, then 2nd, and so on

        let newArray = [...arr];
        let index = 0;

        while (index < newArray.length) {
            const smallIndex = newArray.indexOf(Math.min(...newArray.slice(index)));
            [newArray[index], newArray[smallIndex]] = [newArray[smallIndex], newArray[index]];
            index++;
        }

        updateAndVerify(newArray);
    }

    $bubbleSort.addEventListener('click', () => bubbleSort(array));
    $selectionSort.addEventListener('click', () => selectionSort(array));
    // $insertionSort.addEventListener('click', () => insertionSort(array));
    // $mergeSort.addEventListener('click', () => mergeSort(array));
    // $quickSort.addEventListener('click', () => quickSort(array));
    // $heapSort.addEventListener('click', () => heapSort(array));
    // $countingSort.addEventListener('click', () => countingSort(array));
    // $radixSort.addEventListener('click', () => radixSort(array));
    // $bucketSort.addEventListener('click', () => bucketSort(array));
})();