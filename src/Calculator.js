// Import React and the Component class from the 'react' library
import React, { Component } from 'react';
// Import the styles defined in the 'Calculator.css' file
import './Calculator.css';

// Define a class component called 'Calculator' that extends the 'Component' class
class Calculator extends Component {
    // Constructor method, called when an instance of the component is created
    constructor() {
        super(); // Call the constructor of the parent class
        // Initialize the component's state with 'equation' and 'result' properties
        this.state = {
            equation: '', // Stores the input equation
            result: '0', // Stores the calculation result
        };
    }

    // Handler for clicking on a number button
    handleNumberClick = (number) => {
        this.setState((prevState) => ({
            equation: prevState.equation + number, // Append the clicked number to the equation
        }));
    };

    // Handler for clicking on an operator button (+, -, *, /)
    handleOperatorClick = (operator) => {
        this.setState((prevState) => ({
            equation: prevState.equation + operator, // Append the clicked operator to the equation
        }));
    };

    // Handler for clicking the "C" button to clear the equation
    handleClear = () => {
        this.setState({
            equation: '', // Clear the equation
            result: '0', // Reset the result to '0'
        });
    };

    // Handler for clicking the "=" button to evaluate the equation
    handleEquals = () => {
        try {
            const result = this.evaluateExpression(this.state.equation); // Call a function to evaluate the equation
            this.setState({
                result: result.toString(), // Set the result to the evaluated result
            });
        } catch (error) {
            this.setState({
                result: 'Error', // Display 'Error' if an exception occurs during evaluation
            });
        }
    };

    // Function to evaluate a given expression
    evaluateExpression = (expression) => {
        // Remove any characters that are not digits, parentheses, or basic operators (+, -, *, /)
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');

        // Replace multiple consecutive operators with a single one (e.g., "--" with "+")
        const normalizedExpression = sanitizedExpression.replace(/[-+*/]{2,}/g, (match) => match[0]);

        // Use the 'new Function' constructor to evaluate the expression as JavaScript code
        // Note: Using 'new Function' can be dangerous if the input is not trusted, as it can execute arbitrary code
        return new Function('return ' + normalizedExpression)();
    };

    // Render method that defines the structure and layout of the component
    render() {
        return (
            <div className="calculator">
                <div className="calculator-heading">Casio Calculator</div>
                <div className="output-area">
                    <div className="equation">{this.state.equation}</div> {/* Display the input equation */}
                    <div className="result">{this.state.result}</div> {/* Display the calculation result */}
                </div>
                <div className="buttons">
                    {/* Define buttons for numbers, operators, and control actions with click handlers */}
                </div>
            </div>
        );
    }
}

// Export the 'Calculator' component as the default export of this module
export default Calculator;
