import React, { Component } from 'react';
import { DataGrid as Table} from '@material-ui/data-grid';
import { Tabs, Tab } from '@material-ui/core';
import { worldColumn, indianStateColumn } from './GridData';
import styles from './DataGrid.module.css';

class DataGrid extends Component{
    constructor(props){
        super(props);
        this.state={
          value:0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }
    render(){
        return(
            <div className={styles.dataGridContainer}>
                
                <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary"  textColor="primary" centered>
                    <Tab label="World Data" />
                    <Tab label="India States Data" />
                </Tabs>
                <div style={{ height: 400, width: '100%' }}>
                    {this.state.value ? <Table rows={this.props.indianStateData} columns={indianStateColumn}/>
                        : <Table rows={this.props.countriesData} columns={worldColumn}/>}
                </div>
            </div>
        );
    }
}
export default DataGrid;