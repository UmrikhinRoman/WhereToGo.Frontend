import React from 'react';
import PropTypes from 'prop-types';

export default function Root({children}) {
    return <div id="app-root">{children}</div>;
}

Root.propTypes = {};