import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FilmCard extends Component {

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <span className="ui green label ribbon"> $ 100</span>
                    <img src="/img/legacy.jpg" alt="Legacy"/>
                </div>

                <div className="content">
                    <a href='#' className="header">Legacy</a>
                </div>
            </div
        );
    }
}

export default FilmCard;
