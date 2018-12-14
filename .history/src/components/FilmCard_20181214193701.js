import React from 'react';
import PropTypes from 'prop-types';
import Featured from './Featured';

const FilmCard = ({film}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green label ribbon"> $ {film.price}</span>
            <Featured featured={film.featured}/>
            <img src={film.im} alt={film.title} />
        </div>

        <div className="content">
            <a className="header">{film.title}</a>

            <div className="meta">
                <i className="icon users" />{film.director}
                <i className="icon wait" />{film.duration} min
            </div>
        </div>


    </div>
)

FilmCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        im: PropTypes.string.isRequired,
        featured: PropTypes.any.isRequired
    }).isRequired
}

export default FilmCard;
