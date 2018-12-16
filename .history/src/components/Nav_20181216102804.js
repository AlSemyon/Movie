import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ showForm }) => (
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
        </div>


    </div>
)

Nav.propTypes = {
    showForm: PropTypes.func.isRequired
}

export default Nav;
