import React from 'react';
import PropTypes from 'prop-types';

export default function Flex() {
    return <div className="flex-container __justify-space-between">
        <div className="red-box">1</div>
        <div className="red-box">2</div>
        <div className="red-box">3</div>
        <div className="red-box">4</div>
        <div className="red-box">5</div>
    </div>;
}

Flex.propTypes = {};