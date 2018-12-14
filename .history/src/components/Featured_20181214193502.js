import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({featured}) => (
    <span>
        <a className={`ui right corner label ${featured ? 'yellow' : ''}`}>
            <i className={`start icon`}/>
        </a>
    </span>
)

Featured.propTypes = {
    header: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Featured;
