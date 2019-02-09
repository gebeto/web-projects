import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames/bind';

import JSONTree from 'react-json-tree'


const cx = cn.bind({
	base: 'list-item',
	isActive: 'list-item-active',
});


class ListItem extends React.Component<any, any> {
	onClick = () => {
		this.props.onSelect(this.props.data);
	}

	render() {
		const { data, isActive } = this.props;

		return (
			<li className={cx('base', {isActive})} onClick={this.onClick}>
				{this.props.itemTitle(data)}
			</li>
		);
	}
}

const ListItemConnected = connect(
	(state: any, ownProps: any) => ({
		isActive: ownProps.isActiveCheck(state, ownProps),
	})
)(ListItem);


class List extends React.Component<any, any> {
	onItemSelect = (item: any) => {
		this.props.onItemSelect({...this.props.datasource, ...item});
	}

	render() {
		const {
			datasource = {},
			itemKey,
			itemsKey,
			itemTitle,
			isActiveCheck,
		} = this.props;
		return (
			<div className="list">
				<ul>
					{(datasource[itemsKey] || []).map(itemData =>
						<ListItemConnected
							data={itemData}
							itemTitle={itemTitle}
							key={itemData[itemKey]}
							onSelect={this.onItemSelect}
							isActiveCheck={isActiveCheck}
						/>
					)}
				</ul>
			</div>
		);
	}
}


export default List;