import React, { Component } from 'react';
import data from '../data';
import FilmCard from './FilmCard';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

    render() {
        return (
            <div className="ui container">
                <FilmCard/>
                <h1>Movies</h1>
            </div>
        );
    }
}


export default App;
