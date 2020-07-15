import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { cars } from './data';
// import {CarService} from '../service/CarService';

// import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import jss from 'jss'


// const colors = [ "orange", "black", "gray", "blue", "red" ];



// console.log(ttt);

const App = (props) => {
	const classes = React.useMemo(() => {
		const styles = jss
			.createStyleSheet(
				cars.map(i => i.color)
					.filter((item, i, arr) => arr.indexOf(item) === i)
					.reduce((curr, color) => {
						return {...curr, [color]: { 'background-color': `${color} !important` }};
					}, {}),
			).attach()
		return styles.classes;
	}, [cars]);

	return (
		<Box p={2}>
			<Paper>
				<DataTable
					// header="Horizontal and Vertical"
					value={cars}
					scrollable={true}
					scrollHeight="calc(100vh - 120px)"
					style={{width: '100%'}}
					rowClassName={(row) => {
						// console.log(row, classes[row.color]);
						return {[classes[row.color]]: true};
					}}
					resizableColumns
					columnResizeMode="expand"
				>
					<Column field="year" header="Year" style={{width:'250px'}} />
					<Column field="brand" header="Brand" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
					<Column field="color" header="Color" style={{width:'250px'}} />
				</DataTable>
			</Paper>
		</Box>
	);
}

export default App;