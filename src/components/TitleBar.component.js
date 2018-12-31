/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="name">Paloma &amp; Thanh</span>
                <div className="wedding-date">24<sup>st</sup> October, 2020</div>
            </header>
        );
    }
}

export default TitleBar;
