import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class LinkListItem extends Component {
    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy)
        this.clipboard.on('success', () => {
            console.log('it worked');
        }).on('error', () => {
            console.log('error');
        })
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
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
