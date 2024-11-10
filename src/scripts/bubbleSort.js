function bubblesortLayout() {
    const container = UI.createElement('div', { class: "container-root" }, [
        UI.createElement('h1', { class: "heading" }, 'BUBBLE SORT'),
        UI.createElement('p', { class: "text" }, 'Enter numbers separated by commas or spaces'),
        UI.createElement('input', { type: "text", id: "numberInput" }, []),
        UI.createElement('div', { class: "buttons" }, [
            UI.createElement('button', { class: "btn btn-outline-primary", id: "sortButton" }, 'Sort'),
            UI.createElement('button', { class: "btn btn-outline-primary", id: "clearButton" }, 'Clear'),
            UI.createElement('p', { id: "errorMessage", class: "error" }, [])
        ]),
        UI.createElement('div', {}, [
            UI.createElement('h2', {}, 'Sorted Numbers:'),
            UI.createElement('p', { id: "result", class: "text" }, [])
        ])
    ]);

    UI.render(container, document.querySelector('body'));
}

function init() {
    bubblesortLayout();

    const numberInput = document.getElementById('numberInput');
    const sortButton = document.getElementById('sortButton');
    const clearButton = document.getElementById('clearButton');
    const errorMessage = document.getElementById('errorMessage');
    const result = document.getElementById('result');

    function bubbleSort(arr) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    function withCache(sortFunction) {
        const cache = {};
        return function (numbers) {
            const key = numbers.join(',');
            if (cache[key]) {
                return cache[key];
            }
            const sortedNumbers = sortFunction([...numbers]);
            cache[key] = sortedNumbers;
            return sortedNumbers;
        };
    }

    const cachedSort = withCache(bubbleSort);

    function validateInput(input) {
        const numbers = input.split(/[\s,]+/).map(Number);
        if (numbers.some(isNaN)) {
            return { valid: false, numbers: [] };
        }
        return { valid: true, numbers };
    }

    function handleSort() {
        errorMessage.textContent = '';
        result.textContent = '';

        const input = numberInput.value.trim();
        if (!input) {
            errorMessage.textContent = 'Please enter valid numbers separated by commas or spaces.';
            return;
        }

        const { valid, numbers } = validateInput(input);
        if (!valid) {
            errorMessage.textContent = 'Please enter valid numbers separated by commas or spaces.';
            return;
        }

        const sortedNumbers = cachedSort(numbers);
        result.textContent = sortedNumbers.join(', ');
    }

    function handleClear() {
        numberInput.value = '';
        errorMessage.textContent = '';
        result.textContent = '';
    }

    sortButton.addEventListener('click', handleSort);
    clearButton.addEventListener('click', handleClear);
}

document.addEventListener('DOMContentLoaded', init);

