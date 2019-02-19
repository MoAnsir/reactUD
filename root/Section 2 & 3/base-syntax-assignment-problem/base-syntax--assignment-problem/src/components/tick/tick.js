import React from "react";
//import ReactDOM from 'react-dom';
import "./tick.css";

const tick = props => {
    return (
        <div className="tick">
            <p>The time is: {new Date().toLocaleTimeString()}.</p>
        </div>
    );

};

export default tick;

// ReactDOM.render(<Tick />, document.getElementById('tick'));
 //setInterval(tick, 1000);


