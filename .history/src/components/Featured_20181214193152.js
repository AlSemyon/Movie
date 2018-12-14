import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({header, message, type}) => (
    <div className={`ui icon message ${type}`}>
    <i className="icon info"/>
    <div className="content">
        <div className="header">{header}</div>
        <p>{message}</p>
    </div>
    </div>
)

Featured.propTypes = {
    header: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Featured;
