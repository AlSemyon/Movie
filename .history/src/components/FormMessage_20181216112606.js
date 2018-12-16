import React from 'react';
import PropTypes from 'prop-types';

const FormMessage = ({header, message, type}) => (
    <div className={`ui icon message ${type}`}>
    <i className="icon info"/>
    <div className="content">
        <div className="header">{header}</div>
        <p>{message}</p>
    </div>
    </div>
)

FormMessage.propTypes = {
    header: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string
}

FormMessage.defaultProps = {
    type: 'info'
}

export default FormMessage;
