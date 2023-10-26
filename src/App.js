// Import the React library to use React functionality
import React from 'react';

// Import the 'Calculator' component from the 'Calculator' file
import Calculator from './Calculator';

// Define a functional component called 'App'
function App() {
  return (
    // Render a div with the 'App' class
    <div className="App">
      {/* Render the 'Calculator' component within the 'App' component */}
      <Calculator />
    </div>
  );
}

// Export the 'App' component as the default export of this module
export default App;
