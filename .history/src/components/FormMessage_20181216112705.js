import React from 'react';
import PropTypes from 'prop-types';

const FormMessage = ({message, type}) => (
    <div className={`ui icon message ${type}`}>
    <i className="icon info"/>
    <div className="content">
        <div className="header">{header}</div>
        <p>{message}</p>
    </div>
    </div>
)

FormMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info'])
}

FormMessage.defaultProps = {
    message: ''
    type: 'error'
}

export default FormMessage;
