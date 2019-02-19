import React from "react";
import "./userOutput.css";

const userOutput = props => {
    return (
        <div className="userOutput">
            <p>Hi there: {props.name}</p>
            <p>Welcome!</p>
        </div>
    );
};

export default userOutput;
