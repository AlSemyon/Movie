import React, { Component } from 'react';
import data from '../data';
import FilmCard from './FilmCard';
import _orderBy from "lodash/orderBy"

class App extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        this.setState({
            films: _orderBy(data.films, ['title'], ['asc'])
        })
    }


    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading.......</h1>
        }
        return (
            <div className="ui container">
                <FilmCard film={films[0]}/>
            </div>
        );
    }
}


export default App;
