import './AccordionGray.scss';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AccordionGray = ({ overview, detail, openIndex, handleAccordion, accordionindex }) => {

    return (
        <div className="accordion">
            <button className="accordion-head" onClick={() => handleAccordion()}>
                <p className="accordion-title">{overview}</p>
                {accordionindex !== openIndex && <p className="accordion-button"><FontAwesomeIcon icon={faPlus} /></p>}
            </button>
            {accordionindex === openIndex && <div className="accordion-body">{detail}</div> }
        </div>
    );
};

export default AccordionGray;
