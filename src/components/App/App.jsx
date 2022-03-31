import React, { Component } from 'react'
import Header from '../Header/Header'
import ResultContainer from '../ResultContainer/ResultContainer'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'

const name = require('@rstacruz/startup-name-generator')

class App extends Component {
    state = {
        headerText: 'Name-It!',
        headerExpanded: true,
        suggestedNames: [],
    }

    HandleInputChange = (inputtext) => {
        this.setState({
            headerExpanded: !inputtext,
            suggestedNames: inputtext ? name(inputtext) : [],
        })
    }

    render() {
        return (
            <div>
                <Header
                    Title={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox HandleInputChange={this.HandleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App
