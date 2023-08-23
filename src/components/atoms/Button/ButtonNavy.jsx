import React from "react";
import "./ButtonNavy.scss";

const ButtonNavy = preps => {

    return (
        <button type="submit" style={{fontSize: `${preps.size}`}}>
            <a href={`${preps.to}`}>{preps.text}</a>
        </button>
    );
};

export default ButtonNavy;