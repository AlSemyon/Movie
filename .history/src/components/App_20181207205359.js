import React, { Component } from 'react';
import data from '../data';
import FilmCard from './FilmCard';

class App extends Component {
    state = {
        films: data.films
    }

    render() {
        return (
            <div className="ui container">
                <FilmCard film={this.state.films[0]}/>
            </div>
        );
    }
}


export default App;
