import React from 'react';

import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

// import { AgGridReact, AgGridColumn } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import './App.css';


const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomPrice = () => Math.round(Math.random() * 100) * 1000;

const makes = ["Toyota", "Ford", "Porshe", "Tesla"];
const models = ["Model S", "Model 3", "Model X", "Boxer", "Bimber", "Cross", "Celicca", "Mamba"];
const colors = ["red", "green", "blue", "#af0964", "#009274"];

function createRow(id) {
  return {
    make: randomItem(makes),
    model: randomItem(models),
    modelka: randomItem(models),
    price: randomPrice(),
    price1: randomPrice(),
    price2: randomPrice(),
    price3: randomPrice(),
    price4: randomPrice(),
    price5: randomPrice(),
    price6: randomPrice(),
    price7: randomPrice(),
    price8: randomPrice(),
    price9: randomPrice(),
    color: randomItem(colors),
  };
}

const rowData = (new Array(1000).fill(0)).map(i => createRow());
 
const columns = [
  { key: 'make', name: 'Make', resizable: true, sortable: true, width: 50, minWidth: 70, },
  { key: 'make', name: 'Make', resizable: true, sortable: true,  },
  { key: 'model', name: 'Model', resizable: true, sortable: true,  },
  { key: 'price', name: 'Price', resizable: true, sortable: true,  },
  { key: 'price1', name: 'Price1', resizable: true, sortable: true,  },
  { key: 'price2', name: 'Price2', resizable: true, sortable: true,  },
  { key: 'price3', name: 'Price3', resizable: true, sortable: true,  },
  { key: 'price4', name: 'Price4', resizable: true, sortable: true,  },
  { key: 'price5', name: 'Price5', resizable: true, sortable: true,  },
  { key: 'price6', name: 'Price6', resizable: true, sortable: true,  },
  { key: 'price7', name: 'Price7', resizable: true, sortable: true,  },
  { key: 'price8', name: 'Price8', resizable: true, sortable: true,  },
  { key: 'price9', name: 'Price9', resizable: true, sortable: true,  },
];
 
function App() {
  const [ sortColumn, setSortColumn ] = React.useState(null);
  const [ sortDirection, setSortDirection ] = React.useState(null);

  return (
    <DataGrid
      columns={columns}
      rows={rowData}
      rowHeight={28}
      height={window.innerHeight - 100}
      rowClass={(row) => `color-${row.color}`}
      onSort={(colKey, colDir) => {
        console.log("SORTTTT", colKey, colDir);
        setSortColumn(colKey);
        setSortDirection(colDir);
      }}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  );
}

export default App;
