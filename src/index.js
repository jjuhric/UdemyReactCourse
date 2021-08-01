// Import React and ReactDOM libraries
import React from 'react';
import reactDom from 'react-dom';

function getButtonText() {
    return "Click on me!";
}
// Create a react component
const App = () => {
    return (
        <div>
            <label for="name" className="label">Enter Name:</label>
            <input id="name" type="text" />
            <button onClick={() => alert("Clicked")} style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    );
}

// Take the react component and show it on the screen
reactDom.render(
    <App />,
    document.querySelector('#root')
)

//code to force hot-reload
if (module.hot) { 
    module.hot.accept();
}