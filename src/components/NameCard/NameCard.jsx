import React from 'react'
import './NameCard.css'

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ names }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${nameCheapUrl}${names}`}
        >
            <div className="result-name-card">
                <p className="result-name">{names}</p>
            </div>
        </a>
    )
}

export default NameCard
