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
                console.log(newArray, sorted)
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
    const $mergeSort = document.querySelector('#merge-sort');
    const $quickSort = document.querySelector('#quick-sort');
    const $heapSort = document.querySelector('#heap-sort');
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
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            result.push(value);

            // current last index of result array
            let j = i - 1; 

            // Move all result values higher than current value to the right, then add current value after that finishes
            while (j >= 0 && result[j] > value) {
                result[j + 1] = result[j];
                j--;
            }

            result[j + 1] = value;
        }

        updateAndVerify(result);
    }

    const mergeSort = arr => {
        // Recursively splits array into smaller pieces, then merges them back together in a sorted order
        updateAndVerify(mergeSortRecursive(arr));
    }

    const mergeSortRecursive = arr => {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(mergeSortRecursive(left), mergeSortRecursive(right));
    }

    const merge = (left, right) => {
        const array = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                array.push(left.shift());
            }
            else {
                array.push(right.shift());
            }
        }

        return [...array, ...left, ...right];
    }

    const quickSort = arr => {
        updateAndVerify(quickSortRecursive(arr));
    }

    const quickSortRecursive = arr => {
        if (arr.length <= 1) {
            return arr;
        }

        const newArr = [...arr];

        const pivot = newArr.pop();
        const left = [];
        const right = [];

        newArr.forEach(x => x < pivot ? left.push(x) : right.push(x));

        return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
    }

    const heapify = (arr, length, parentIndex) => {
        let largest = parentIndex;
        const left = parentIndex * 2 + 1;
        const right = left + 1;

        if (left < length && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < length && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== parentIndex) {
            [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
            heapify(arr, length, largest);
        }

        return arr;
    }

    const heapSort = arr => {
        const length = arr.length;
        let lastParentNode = Math.floor(length / 2 - 1);
        let lastChild = length - 1;

        while (lastParentNode >= 0) {
            heapify(arr, length, lastParentNode);
            lastParentNode--;
        }

        while (lastChild >= 0) {
            [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
            heapify(arr, lastChild, 0);
            lastChild--;
        }

        updateAndVerify(arr);
    }

    $newSet.addEventListener('click', newSet);
    $bubbleSort.addEventListener('click', () => bubbleSort(array));
    $selectionSort.addEventListener('click', () => selectionSort(array));
    $insertionSort.addEventListener('click', () => insertionSort(array));
    $mergeSort.addEventListener('click', () => mergeSort(array));
    $quickSort.addEventListener('click', () => quickSort(array));
    $heapSort.addEventListener('click', () => heapSort(array));
    // $countingSort.addEventListener('click', () => countingSort(array));
    // $radixSort.addEventListener('click', () => radixSort(array));
    // $bucketSort.addEventListener('click', () => bucketSort(array));
})();