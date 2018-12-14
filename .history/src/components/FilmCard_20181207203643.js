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
