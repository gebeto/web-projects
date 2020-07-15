import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 28,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex, rowData, dataKey }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <div
        // component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight, backgroundColor: rowData.color }}
        align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </div>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  handleRowDoubleClick = ({ rowData }) => {
    this.props.onRowDoubleClick && this.props.onRowDoubleClick(rowData);
  }

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;

    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            size="small"
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
            onRowDoubleClick={this.handleRowDoubleClick}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  {...console.log(other)}
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                  width={!other.width ? (width - this.props.columnsWidth < 0 ? 200 : width - this.props.columnsWidth) : other.width}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0, 'red'],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3, 'green'],
  ['Eclair', 262, 16.0, 24, 6.0, 'purple'],
  ['Cupcake', 305, 3.7, 67, 4.3, 'blue'],
  ['Gingerbread', 356, 16.0, 49, 3.9, 'pink'],
];

function createData(id, dessert, calories, fat, carbs, protein, color = 'red') {
  return { id, dessert, calories, fat, carbs, protein, color };
}

const rows = [];

for (let i = 0; i < 20000; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
  const [columns, setColumns] = React.useState([
    {
      width: 300,
      label: 'Dessert',
      dataKey: 'dessert',
    },
    {
      width: 300,
      label: 'Calories\u00A0(g)',
      dataKey: 'calories',
      numeric: true,
    },
    {
      width: 300,
      label: 'Fat\u00A0(g)',
      dataKey: 'fat',
      numeric: true,
    },
    {
      width: 300,
      label: 'Carbs\u00A0(g)',
      dataKey: 'carbs',
      numeric: true,
    },
    {
      label: 'Protein\u00A0(g)',
      dataKey: 'protein',
      numeric: true,
      width: 300,
    },
    {
      label: '',
      dataKey: '',
    },
  ]);

  const colsWidth = React.useMemo(() => columns.reduce((curr, i) => curr + (i.width || 0), 0), [ columns ])

  return (
    <Box p={3}>
      <Paper style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
        <VirtualizedTable
          onRowDoubleClick={console.log}
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={columns}
          columnsWidth={colsWidth}
        />
        <button onClick={() => setColumns(columns.map(col => ({ ...col, width: col.width + 10 }))) }>RESIZE</button>
      </Paper>
    </Box>
  );
}