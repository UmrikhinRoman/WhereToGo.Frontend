import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

export default function Tag({name, selected, tagSelect}) {
    return <Button
        className={`tag margin-s ${selected && 'selected'}`}
        onClick={(e) => tagSelect(e)}>
        {name}
    </Button>;
}

Tag.propTypes = {
    name: PropTypes.string
};