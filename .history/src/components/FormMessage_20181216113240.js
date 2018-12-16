import React from 'react';
import PropTypes from 'prop-types';

const FormMessage = ({content, type}) => (
    <span className={type === 'error' ? 'ui red' : 'ui yellow'}>
        {content}
    </span>
)

FormMessage.propTypes = {
    content: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info'])
}

FormMessage.defaultProps = {
    content: '',
    type: 'error'
}

export default FormMessage;
