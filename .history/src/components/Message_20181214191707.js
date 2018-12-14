import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Message = ({header, message, type}) => (
    <div className={`ui icon message ${type}`}>
    <i className="icon info"/>
    <div className="content">
        <div className="header">{header}</div>
        <p>{message}</p>
    </div>
    </div>
)

Message.propTypes = {
    header: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string
}

export default Message;
