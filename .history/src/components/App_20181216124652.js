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
    
    addFilm = (film) => this.setState({
        films: this.sortFilms([...this.state.films, {...film, id: id()}]),
        showForm: false
    })

    updateFilm = (film) => this.setState(({films, showForm}) => ({
        films: this.sortFilms(films.map(f => f.id !== film.id ? f : film)),
        showForm: false
    }))

    saveFilm = film => film.id ? this.updateFilm(film) : this.addFilm(film)
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


    render() {
        let {films} = this.state;
        if (!films.length) {
            return <h1>Loading.......</h1>
        }
        return (
            <div className="ui container">
                <Nav showForm={this.showForm}/>
                {
                    this.state.showForm ? <FilmForm addFilm={this.addFilm} closeForm={this.closeForm}/> : null
                }
                
                <FilmList films={films}
                          removeFilm={this.removeFilm}
                          toggleFeatured={this.toggleFeatured}/>
            </div>
        );
    }
}


export default App;
