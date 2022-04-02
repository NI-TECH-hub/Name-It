import React, { useState } from 'react'
import Header from '../Header/Header'
import ResultContainer from '../ResultContainer/ResultContainer'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'


const name = require('@rstacruz/startup-name-generator')


const App = () => {
    const [headerText, setheaderText] = useState('Name It!')
    const [headerExpanded, setheaderExpanded] = useState(true)
    const [suggestedNames,setsuggestedNames] = useState([])
    
    const HandleInputChange = (inputtext) => {
        setheaderExpanded(!inputtext);
        setsuggestedNames(inputtext ? name(inputtext) : [])

        
     }
    return (
        <div>
            <Header
                Title={headerText}
                headerExpanded={headerExpanded}
            />
            <SearchBox HandleInputChange={HandleInputChange} />
            <ResultContainer suggestedNames={suggestedNames} />
        </div>
    );
}

export default App
