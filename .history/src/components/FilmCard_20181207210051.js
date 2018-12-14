import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FilmCard extends Component {

    render() {
        const film = this.props.film;
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

export default FilmCard;
