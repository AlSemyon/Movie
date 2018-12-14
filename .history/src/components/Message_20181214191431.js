import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Message = ({header, message, type}) => (
    <div className={`ui icon message ${type}`}
    <i className="icoxn info"></i>
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
