import React, {Component} from 'react';
import api from 'services/api';
import PropTypes from 'prop-types';
import TagContainer from '../TagContainer/TagContainer';

export default class TagsListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTagsIds: [],
            tags: []
        };

        this.handleTagSelect = this.handleTagSelect.bind(this);
    }

    componentDidMount() {
        api.getTopTags()
            .then(response => this.setState({tags: response.data}));
    }

    handleTagSelect(tagId, isSelected) {
        const {selectedTagsIds} = this.state;
        const updatedTags = isSelected
            ? [...selectedTagsIds, tagId]
            : selectedTagsIds.filter(tId => tId !== tagId);
        this.setState({selectedTagsIds: updatedTags},
            ()=> this.props.refreshPlaces(this.state.selectedTagsIds)
        );
    }

    render() {
        const {tags} = this.state;
        return <div className="container margin-top-xl">
            <div className="flex-container __justify-space-around">
                {tags.map(t =>
                    <TagContainer
                        key={t.id}
                        id={t.id}
                        name={t.name}
                        tagSelect={this.handleTagSelect}
                    />)}
            </div>
        </div>;
    }
}

TagsListContainer.propTypes = {
    refreshPlaces: PropTypes.func
};
