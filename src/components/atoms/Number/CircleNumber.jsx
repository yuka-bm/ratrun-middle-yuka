import React from "react";
import "./CircleNumber.scss";

const CircleNumber = ({text}) => {

    return (
        <div className="circle-number">
            {text}
        </div>
    );
};

export default CircleNumber;