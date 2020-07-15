import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DataGrid, { Scrolling, Sorting, LoadPanel } from 'devextreme-react/data-grid';

const dataSource = generateData(100000);


const Row = (rowInfo) => {
	return <tbody>
		<tr className="dx-row dx-data-row dx-column-lines" style={{ backgroundColor: 'red' }}>
			<td>111</td>
			<td>111</td>
			<td>111</td>
			<td>111</td>
			<td>111</td>
		</tr>
	</tbody>
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPanelEnabled: true
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <DataGrid
        elementAttr={{
          id: 'gridContainer'
        }}
        // rowComponent={Row}
        // rowRender={Row}
        dataSource={dataSource}
        showBorders={true}
        customizeColumns={this.customizeColumns}
        onContentReady={this.onContentReady}
      >
        <Sorting mode="none" />
        <Scrolling mode="virtual" />
        <LoadPanel enabled={this.state.loadPanelEnabled} />
      </DataGrid>
    );
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }

  onContentReady() {
    this.setState({
      loadPanelEnabled: false
    });
  }
}

export default App;
