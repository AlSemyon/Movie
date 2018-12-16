import React from 'react';
import PropTypes from 'prop-types';
import Featured from './Featured';

const FilmCard = ({film, toggleFeatured, editFilm, removeFilm}) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green label ribbon"> $ {film.price}</span>
            <Featured featured={film.featured} toggleFeatured={() => toggleFeatured(film.id)}/>
            <img src={film.im} alt={film.title} />
        </div>

        <div className="content">
            <a className="header">{film.title}</a>

            <div className="meta">
                <i className="icon users" />{film.director}
                <i className="icon wait" />{film.duration} min
            </div>

            <div className="extra">
                <a className="ui basic green button" onClick={() =>editFilm(film)}>
                    <i className="ui icon edit"/>
                </a>

                <a className="ui basic red button" onClick={() =>removeFilm(film.id)}>
                    <i className="ui icon trash"/>
                </a>
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
        featured: PropTypes.bool.isRequired
    }).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    editFilm: PropTypes.func.isRequired,
    removeFilm: PropTypes.func.isRequired
}

export default FilmCard;
