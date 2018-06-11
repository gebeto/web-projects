import React, { Component, Fragment } from 'react';
import ActiveItem from './ActiveItem';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0,
		};
	}

	setActiveIndex(e) {
		var index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
		console.log(index);
		this.setState({activeIndex: index});
	}

    render() {
    	const active = this.props.children.map((el, i) => 
    		<ActiveItem activeIndex={this.state.activeIndex} key={i} >{el.props.children}</ActiveItem>
    	);

        return (
        	<Fragment>
        		<div className="side-bar__list-active-window" style={{top: `${this.state.activeIndex * 64}px`}}>
	        		<ul className="side-bar__list-active" style={{top: `${-this.state.activeIndex * 64}px`}}>
	        			{active}
	        		</ul>
        		</div>
	            <ul className="side-bar__list" onClick={this.setActiveIndex.bind(this)}>
	            	{this.props.children}
	            </ul>
        	</Fragment>
        );
    }
}

export default List;