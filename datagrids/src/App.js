import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';

import { Resizable } from 'react-resizable';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { Table } from 'antd';
import 'antd/dist/antd.css';


const useResizableColumns = (cols, tableWidth) => {
	const widthColumnCount = cols.filter(({ width }) => !width).length;
	const mergedColumns = cols.map(column => {
		if (column.width) {
			return column;
		}

		return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
	});

	return mergedColumns;
}


function VirtualTable(props) {
	const { scroll, className } = props;
	const [tableWidth, setTableWidth] = useState(0);
	const columns = useResizableColumns(props.columns, tableWidth)
	
	const gridRef = useRef();
	const [connectObject] = useState(() => {
		const obj = {};
		Object.defineProperty(obj, 'scrollLeft', {
			get: () => null,
			set: scrollLeft => {
				if (gridRef.current) {
					gridRef.current.scrollTo({
						scrollLeft,
					});
				}
			},
		});
		return obj;
	});

	const resetVirtualGrid = () => {
		gridRef.current.resetAfterIndices({
			columnIndex: 0,
			shouldForceUpdate: false,
		});
	};

	useEffect(() => resetVirtualGrid, []);
	useEffect(() => resetVirtualGrid, [tableWidth]);

	const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
		ref.current = connectObject;
		return (
			<Grid
				ref={gridRef}
				className="virtual-grid"
				columnCount={columns.length}
				columnWidth={index => {
					const { width } = columns[index];
					return index === columns.length - 1 ? width - scrollbarSize - 1 : width;
				}}
				height={scroll.y}
				rowCount={rawData.length}
				rowHeight={() => 54}
				width={tableWidth}
				onScroll={({ scrollLeft }) => {
					onScroll({
						scrollLeft,
					});
				}}
			>
				{({ columnIndex, rowIndex, style }) => (
					<div
						className={classNames('virtual-table-cell', {
							'virtual-table-cell-last': columnIndex === columns.length - 1,
						})}
						style={style}
					>
						{rawData[rowIndex][columns[columnIndex].dataIndex]}
					</div>
				)}
			</Grid>
		);
	};

	console.log('AAAAA', props);

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setTableWidth(width);
			}}
		>
			<Table
				{...props}
				bordered
				size="small"
				className={classNames(className, 'virtual-table')}
				columns={columns}
				pagination={false}
				components={{
					body: renderVirtualList,
				}}
			/>
		</ResizeObserver>
	);
} // Usage

const columns = [
	{ title: 'A', dataIndex: 'key', width: 150, },
	{ title: 'B', dataIndex: 'key', },
	{ title: 'C', dataIndex: 'key', },
	{ title: 'D', dataIndex: 'key', },
	{ title: 'E', dataIndex: 'key', width: 200, },
	{ title: 'F', dataIndex: 'key', width: 100, },
];

const data = Array.from(
	{
		length: 100000,
	},
	(_, key) => ({
		key,
	}),
);

export default () => {
	return (
		<Box p={2}>
			<Box component={Paper} p={2}>
				<VirtualTable columns={columns} dataSource={data} scroll={{ y: 300, x: '100vw' }} />
			</Box>
		</Box>
	);
}

// ReactDOM.render(
//	 <VirtualTable columns={columns} dataSource={data} scroll={{ y: 300, x: '100vw' }} />,
//	 mountNode,
// );