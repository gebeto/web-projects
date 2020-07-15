import React from 'react';
import classNames from 'classnames';
import { VariableSizeList } from 'react-window';
import RCTable from 'rc-table';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


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


const columns = [
    { title: 'A', dataIndex: 'a', width: 100 },
    { title: 'B', dataIndex: 'b', width: 100 },
    { title: 'C', dataIndex: 'c', width: 100 },
];

const data = [];
for (let i = 0; i < 100000; i += 1) {
    data.push({
        key: i,
        a: `a${i}`,
        b: `b${i}`,
        c: `c${i}`,
    });
}

const Cell = (props) => (
    <TableRow
        // className={classNames('virtual-row', {
        //     'virtual-row-last': columnIndex === columns.length - 1,
        // })}
        style={props.style}
    >
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
        <TableCell>Hello</TableCell>
    </TableRow>
);

const App = () => {
    // const gridRef = React.useRef();

    // React.useEffect(() => {
    //     gridRef.current.resetAfterIndices({
    //         columnIndex: 0,
    //         shouldForceUpdate: false,
    //     });
    // }, []);

    const renderVirtualList = (rawData, { scrollbarSize }) => (
        <TableBody>
            <VariableSizeList
                // columnCount={columns.length}
                // columnWidth={index => {
                //     const { width } = columns[index];
                //     return index === columns.length - 1 ? width - scrollbarSize - 1 : width;
                // }}
                // rowCount={rawData.length}
                // rowHeight={() => 50}
                itemCount={1000}
                itemSize={() => 55}
                height={300}
                width={600}
            >
                {Cell}
            </VariableSizeList>
        </TableBody>
    );

    return (
        <Box p={2}>
            <Paper>
                <RCTable
                    style={{ width: '100%' }}
                    tableLayout="fixed"
                    columns={columns}
                    data={data}
                    scroll={{ y: 300 }}
                    components={{
                        table: props => <Table {...props} size="small" />,
                        header: {
                            wrapper: TableHead,
                            row: TableRow,
                            cell: TableCell,
                        },
                        body: renderVirtualList,
                        // body: {
                        //     wrapper: TableBody,
                        //     row: (props) => <TableRow {...props} style={{ backgroundColor: 'red' }} />,
                        //     cell: TableCell,
                        // }
                    }}
                />
            </Paper>
        </Box>
    );
};

export default App;