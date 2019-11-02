import React, { Component, Fragment } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import './App.css';

import GridDataGenerator from './GridDataGenerator';

const COLUMN_COUNT = 3;
const ROW_COUNT = 100;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [],
            rowData: []
        }

        this.gridColumnGenerator = new GridDataGenerator(COLUMN_COUNT, ROW_COUNT);

        this.handleGridReady = this.handleGridReady.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            columnDefs: this.gridColumnGenerator.generateColumnDefs(),
            rowData: this.gridColumnGenerator.generateRowData()
        });
    }

    handleGridReady({ api }) {        
        api.sizeColumnsToFit();
    }

    render() {
        return (
            <Fragment>
                <div style={{ width: "100%", height: "100%" }}>
                    <div id="demo-grid" className="ag-theme-balham" style={{ height: "100%", width: "100%" }}>
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData} 

                            onGridReady={this.handleGridReady}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;