import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Tag from './Tag/Tag';

export default class TagContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    /**
     *
     */
    handleSelect() {
        this.setState({selected: !this.state.selected},
            () => this.props.tagSelect(this.props.id, this.state.selected)
        );
    }

    render() {
        const {selected} = this.state;
        const {name} = this.props;
        return <Tag selected={selected} name={name} tagSelect={this.handleSelect}/>;
    }
}

TagContainer.propTypes = {
    tagSelect: PropTypes.func,
    name: PropTypes.string
};
