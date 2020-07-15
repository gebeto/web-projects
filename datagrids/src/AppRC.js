import React from 'react';
import RCTable from 'rc-table';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { Resizable } from 'react-resizable';


const COLUMNS = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 200,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		width: 200,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
		width: 200,
	},
	{
		title: 'Operations',
		dataIndex: '',
		key: 'operations',
		render: () => <a href="#">Delete</a>,
	},
];


const materialComponents = {
	table: props => <Table {...props} size="small" />,
	header: {
		wrapper: TableHead,
		row: TableRow,
		cell: TableCell,
	},
	body: {
		wrapper: TableBody,
		row: (props) => <TableRow {...props} style={{ backgroundColor: 'red' }} />,
		cell: TableCell,
	}
}

const data = Array.from({ length: 3 }).map((_, i) => (
	{ name: `Jack ${i}`, age: 28 + i, address: 'some where', key: i }
));

 
export default () => {
	const [columns, setColumns] = React.useState(COLUMNS);

	return (
		<Box p={2} height="600px" overflow="auto">
			<Paper variant="outlined">
				<RCTable
					size="small"
					columns={columns}
					data={data}
					components={materialComponents}
				/>
			</Paper>
		</Box>
	);
}