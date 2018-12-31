import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="name">Paloma &amp; Thanh</span>
                <div className="wedding-date">October, 24<sup>th</sup> 2020</div>
            </header>
        );
    }
}

export default TitleBar;
