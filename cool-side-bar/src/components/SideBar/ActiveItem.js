import React, { Component } from 'react';

class ActiveItem extends Component {
    render() {
        return (
            <li className="side-bar__item">{this.props.children}</li>
        );
    }
}

export default ActiveItem;