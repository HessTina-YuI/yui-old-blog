import React, { Component } from 'react';
import tocbot from 'tocbot';
import { scrollToView } from '../../../lib/scroller';

require('./index.less');

class AnchorMenu extends Component {

    componentDidMount() {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.markdown',
            headingSelector: 'h1, h2, h3, h4, h5',
            ignoreSelector: '.ignoreToc',
            headingsOffset: 200,
            hasInnerContainers: true,
            collapseDepth: 0
        });
        const tocElements = document.getElementsByClassName('toc-link');
        Array.from(tocElements).forEach(ele => {
            ele.parentElement.onclick = (event) => {
                if (event && event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
                scrollToView(ele.text, 100);
            };
        });

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        tocbot.refresh();
    }

    componentWillUnmount() {
        tocbot.destroy();
    }

    render() {
        return (
            <div className="toc">
            </div>
        );
    }
}

export default AnchorMenu;
