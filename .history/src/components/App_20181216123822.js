import _orderBy from 'lodash/orderBy';
import {generate as id} from 'shortid';
import React, { Component } from 'react';
import data from '../data';
import FilmList from './FilmList';
import FilmForm from './FilmForm';
import Nav from './Nav';

class App extends Component {
    state = {
        films: [],
        showForm: false
    }

    componentDidMount() {
        this.setState({
            films: this.sortFilms(data.films)
        })
    }
    
    removeFilm = (idFilm) =>this.setState(({films}) => ({
        films: films.filter(film => film.id !== idFilm)
    }))

    showForm = () => this.setState({
        showForm: !this.state.showForm
    })

    closeForm = () => this.setState({showForm: false})

    sortFilms = (films) => _orderBy(films, ['featured', 'title'], ['desc', 'asc']);
    
    toggleFeatured = (id) =>this.setState({
        films: this.sortFilms(this.state.films.map(
            film => film.id === id ? {...film, featured: !film.featured} : film
        ))
    })

    saveFilm = (film) => this.setState({
        films: this.sortFilms([...this.state.films, {...film, id: id()}]),
        showForm: false
    })
    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading.......</h1>
        }
        return (
            <div className="ui container">
                <Nav showForm={this.showForm}/>
                {
                    this.state.showForm ? <FilmForm saveFilm={this.saveFilm} closeForm={this.closeForm}/> : null
                }
                
                <FilmList films={films}
                          removeFilm={this.removeFilm}
                          toggleFeatured={this.toggleFeatured}/>
            </div>
        );
    }
}


export default App;
