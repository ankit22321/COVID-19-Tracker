import React, { Component } from 'react';
import { Cards, LineChart, BarChart } from '../../components';
import styles from './DataView.module.css';

class DataView extends Component{
    
    render(){
        return(
            <div className={styles.dataviewContainer}>
                <h2>{this.props.label}</h2>
                <Cards data={this.props.data} />
                {this.props.type === "Line" ? 
                    <LineChart country={this.props.country} />
                    : <BarChart data={this.props.data} country={this.props.country} />}
            </div>
        );
    }
}
export default DataView;