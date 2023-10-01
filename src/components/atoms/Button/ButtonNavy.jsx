import React from "react";
import "./ButtonNavy.scss";

const ButtonNavy = ({ text, size, to }) => {

    return (
        <button type="submit" style={{fontSize: `${size}`}}>
            <a href={`${to}`}>{text}</a>
        </button>
    );
};

export default ButtonNavy;