import React from "react";
import './AccordionGray.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AccordionGray = ({ overview, detail }) => {

    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-head" onClick={() => setShowDetail(!showDetail)}>
                <p className="accordion-title">{overview}</p>
                {!showDetail && <p className="accordion-button"><FontAwesomeIcon icon={faPlus} /></p>}
            </div>
            {showDetail && <div className="accordion-body">{detail}</div>}
        </div>
    );
};

export default AccordionGray;
