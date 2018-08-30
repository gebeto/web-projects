import React, { PureComponent } from 'react';


function valueByKey(item: any, key: string | null | undefined): string {
	return key ? item[key] : item.title || item;
}


class AdvancedSelect extends React.PureComponent<AdvancedSelectProps, {}> {
	selectElement: HTMLSelectElement | null;

	constructor(props) {
		super(props);
		this.selectElement = null;
	}

	setValue = (value) => {
		
	}

	onChange = (e) => {
		const index = parseInt(e.currentTarget.value);
		if (index >= 0) {
			this.props.onChange(this.props.data[index]);
		}
	}

	componentDidUpdate(oldProps, oldState) {
		if (this.props.onUpdate) {
			this.props.onUpdate(oldProps, this.props, this);
		}
	}


	render() {
		const {
			data,
			label,
			onChange,
			dataItemTitle,
			dataItemTitleKey,
		} = this.props;

		const labelGenerator = dataItemTitle ? dataItemTitle : valueByKey;
		const dataList = data.map((item, index) => {
			const key = labelGenerator(item, dataItemTitleKey);
			return (
				<option value={index} key={key}>
					{key}
				</option>
			)
		});

		return (
			<select
				className="form-control"
				onChange={this.onChange}
				ref={selectElement => this.selectElement = selectElement}
			>
				{dataList.length ? <option value="-1">{label}</option> : null}
				{dataList}
			</select>
		);
	}
}


export default AdvancedSelect;