import React, { Component } from 'react';
import PropTypes from 'prop-types'

const FilmCard = ({film}) => {

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <span className="ui green label ribbon"> $ {film.price}</span>
                    <img src={film.im} alt={film.title} />
                </div>

                <div className="content">
                    <a href='#' className="header">{film.title}</a>

                    <div className="meta">
                        <i className="icon users" />{film.director}
                        <i className="icon wait" />{film.duration} min
                    </div>
                </div>


            </div>
        );
    }
}

FilmCard.propTypes = {
    films: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        im: PropTypes.string.isRequired,
        featured: PropTypes.boolean.isRequired
    }).isRequired
}

export default FilmCard;
