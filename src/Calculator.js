import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super();
        // Initialize the component's state with an empty equation and a result of '0'.
        this.state = {
            equation: '',
            result: '0',
        };
    }

    // Handler for number buttons
    handleNumberClick = (number) => {
        this.setState((prevState) => ({
            equation: prevState.equation + number, // Append the clicked number to the equation.
        }));
    };

    // Handler for operator buttons
    handleOperatorClick = (operator) => {
        this.setState((prevState) => ({
            equation: prevState.equation + operator, // Append the clicked operator to the equation.
        }));
    };

    // Handler to clear the equation and result
    handleClear = () => {
        this.setState({
            equation: '',
            result: '0',
        });
    };

    // Handler to delete the last character in the equation
    handleBackspace = () => {
        this.setState((prevState) => ({
            equation: prevState.equation.slice(0, -1), // Remove the last character from the equation.
        }));
    };

    // Handler for the equals button
    handleEquals = () => {
        try {
            const result = this.evaluateExpression(this.state.equation); // Evaluate the expression
            this.setState({
                result: result.toString(), // Update the result with the calculated value.
            });
        } catch (error) {
            this.setState({
                result: 'Error', // Handle errors by displaying 'Error' in the result.
            });
        }
    };

    // Function to evaluate the mathematical expression
    evaluateExpression = (expression) => {
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ''); // Sanitize the expression

        // Replace multiple operators with a single one (e.g., "--" with "+")
        const normalizedExpression = sanitizedExpression.replace(/[-+*/]{2,}/g, (match) => match[0]);

        // Evaluate the expression using the Function constructor (use with caution)
        // eslint-disable-next-line no-new-func
        return new Function('return ' + normalizedExpression)(); // Calculate and return the result.
    };

    render() {
        return (
            <div className="calculator">
                <div className="calculator-heading">Realistic Calculator</div>
                <div className="output-area">
                    <div className="equation">{this.state.equation}</div>
                    <div className="result">{this.state.result}</div>
                </div>
                <div className="buttons">
                    {/* Buttons for numbers, operators, clear, backspace, equals */}
                    <button onClick={() => this.handleNumberClick('7')}>7</button>
                    <button onClick={() => this.handleNumberClick('8')}>8</button>
                    <button onClick={() => this.handleNumberClick('9')}>9</button>
                    <button onClick={() => this.handleOperatorClick('+')}>+</button>
                    <button onClick={() => this.handleNumberClick('4')}>4</button>
                    <button onClick={() => this.handleNumberClick('5')}>5</button>
                    <button onClick={() => this.handleNumberClick('6')}>6</button>
                    <button onClick={() => this.handleOperatorClick('-')}>-</button>
                    <button onClick={() => this.handleNumberClick('1')}>1</button>
                    <button onClick={() => this.handleNumberClick('2')}>2</button>
                    <button onClick={() => this.handleNumberClick('3')}>3</button>
                    <button onClick={() => this.handleOperatorClick('*')}>*</button>
                    <button onClick={() => this.handleNumberClick('0')}>0</button>
                    <button onClick={() => this.handleOperatorClick('.')}>.</button>
                    <button onClick={() => this.handleClear()}>C</button>
                    <button onClick={() => this.handleBackspace()}>DEL</button>
                    <button onClick={() => this.handleEquals()}>=</button>
                    <button onClick={() => this.handleOperatorClick('/')}>/</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
