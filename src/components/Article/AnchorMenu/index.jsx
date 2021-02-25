import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnchorMenu extends Component {
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    };

    render() {
        const {anchors} = this.props;

        return (
            <div>
                {
                    anchors ? anchors.map((anchor, index) => {
                        return (
                            <div key={index} onClick={() => this.scrollToAnchor(anchor.value)}>{anchor.value}</div>);
                    }) : null
                }
            </div>
        );
    }

}

export default connect(
    state => ({anchors: state.anchorMenu})
)(AnchorMenu);
