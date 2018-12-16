import React from 'react';
import PropTypes from 'prop-types';

const FormMessage = ({message, type}) => (
    <span className={type === 'error' ? 'red' : 'yellow'}>
    {message}
    </span>
)

FormMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info'])
}

FormMessage.defaultProps = {
    message: '',
    type: 'error'
}

export default FormMessage;
