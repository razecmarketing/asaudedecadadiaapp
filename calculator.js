export class Calculator {
    constructor() {
        this.display = document.getElementById('calculator-display');
        this.initEventListeners();
    }

    initEventListeners() {
        const buttons = document.querySelectorAll('.calc-btn');
        const calculateBtn = document.getElementById('calculate-btn');
        const clearBtn = document.getElementById('clear-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button.dataset.value));
        });

        calculateBtn.addEventListener('click', () => this.calculate());
        clearBtn.addEventListener('click', () => this.clear());
    }

    handleButtonClick(value) {
        // Prevent multiple decimal points
        if (value === '.' && this.display.value.includes('.')) return;

        // Limit input length
        if (this.display.value.length < 15) {
            this.display.value += value;
        }
    }

    calculate() {
        try {
            // Use safer eval alternative
            const result = Function(`'use strict'; return (${this.display.value})`)();
            this.display.value = this.formatResult(result);
        } catch (error) {
            this.display.value = 'Error';
        }
    }

    formatResult(result) {
        // Round to 10 decimal places to prevent long floating point numbers
        return Number(result.toFixed(10)).toString();
    }

    clear() {
        this.display.value = '';
    }
}