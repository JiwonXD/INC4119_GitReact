import React from "react";

const Display = ({input, result}) => {
    return (
        <div>
            <div>{input || "0"}</div>
            <div style={{fontSize: "10rem", color: "blue"}}>{result}</div>
        </div>
    );
};

export default Display;