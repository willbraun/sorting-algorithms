(() => {
    'use strict'

    const array = [17, 5, 8, 2, 11, 4, 9, 1];
    const $array = document.querySelector('#array');
    const updateDisplay = newArr => $array.innerHTML = newArr.join(', ');
    updateDisplay(array);
    

    const $bubbleSort = document.querySelector('#bubble-sort');

    

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

        updateDisplay(newArray);
    }

    $bubbleSort.addEventListener('click', () => bubbleSort(array));
})();