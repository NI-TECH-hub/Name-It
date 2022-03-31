import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultContainer.css'


const ResultContainer = ({ suggestedNames }) => {

    const SuggestedNameJsx = suggestedNames.map((names) => {
        return <NameCard key={names} names={names} />;
    });

    return (
        <div className="results-container">
            {SuggestedNameJsx}
        </div>
    )
}

export default ResultContainer;