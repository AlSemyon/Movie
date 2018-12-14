import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';
import Message from './Message';

const FilmList = ({films, toggleFeatured}) => (
    <div className="ui cards four">
        { films.length === 0 ?
        (
            <Message header="Not found" 
                     message="Not found any films in store"/>
        )
        : (
            films.map(film => <FilmCard key={film.id} film={film}/>)
        )
        }
    </div>
)

FilmList.propTypes = {
    films: PropTypes.array.isRequired
}

FilmList.defaultProps = {
    films: []
}

export default FilmList;
