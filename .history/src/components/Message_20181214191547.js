import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Message = ({header, message, type}) => (
    <div className={`ui icon message ${type}`}>
    <i className="icon info"></i>
    <div className="content">
        <div className="header">{header}</div>
        <p>{message}</p>
    </div>
    </div>
)

Message.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        im: PropTypes.string.isRequired,
        featured: PropTypes.any.isRequired
    }).isRequired
}

export default Message;
