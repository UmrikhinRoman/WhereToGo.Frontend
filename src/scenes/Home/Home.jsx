import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from 'services/api'
import TagsListContainer from '../../components/TagsList/TagsListContainer';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleRefreshPlaces = this.handleRefreshPlaces.bind(this);

        this.state = {
            places: []
        };
    }

    componentDidMount() {
        api.getPlaces()
            .then(response => this.setState({places: response.data}))
    }

    handleRefreshPlaces(tagsIds) {
        api.getPlaces(tagsIds).then(response => this.setState({places: response.data}))
    }

    render() {
        const {places} = this.state;
        return <div>
            <TagsListContainer refreshPlaces={this.handleRefreshPlaces}/>
            {places.length
                ?
                <ul>{this.state.places.map(p => <li>{p.name}</li>)}</ul>
                :
                <span>No places</span>}

        </div>;
    }
}

Home.propTypes = {};