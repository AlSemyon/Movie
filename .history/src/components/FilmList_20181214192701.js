import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard';
import Message from './Message';

const FilmList = ({films}) => (
    <div className="ui cards four">
        { films.length === 0 ?
        (
            <Message header="Not found" 
                     message="Not found any films in store"/>
        )
        : (
    <div>ss</div>        )
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
