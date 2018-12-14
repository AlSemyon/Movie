import _orderBy from 'lodash/orderBy';
import React, { Component } from 'react';
import data from '../data';
import FilmList from './FilmList';

class App extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        this.setState({
            films: _orderBy(data.films, ['featured', 'title'], ['desc', 'asc'])
        })
    }


    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading.......</h1>
        }
        return (
            <div className="ui container">
                <FilmList films={films}/>
            </div>
        );
    }
}


export default App;
