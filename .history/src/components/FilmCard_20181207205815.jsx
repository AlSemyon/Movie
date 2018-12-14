import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FilmCard extends Component {

    render() {
        const film = this.props.film;
        return (
            <div className="ui card">
                <div className="image">
                    <span className="ui green label ribbon"> $ {film.price}</span>
                    <img src="{film.im}" alt="Legacy"/>
                </div>

                <div className="content">
                    <a href='#' className="header">Legacy</a>
                </div>

                <div className="meta content">
                    <i className="icon users"/>Film Director
                    <span className="floated right">
                        <i className="icon wait right"/> 180 min
                    </span>
                </div>
            </div>
        );
    }
}

export default FilmCard;
