import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LinkListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
            </div>
        );
    }
}

LinkListItem.prototype = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired
};
