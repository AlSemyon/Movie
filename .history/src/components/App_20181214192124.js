import _orderBy from 'lodash/orderBy';
import React, { Component } from 'react';
import data from '../data';
import FilmList from './FilmList';
import { Message } from './Message';

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
        { films.length === 0 ?
        (
<Message
        )
    : (
        <div className="ui container">
        <FilmList films={films}/>
    </div>
    )}
    }
}


export default App;
