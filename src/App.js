import React, { Component } from 'react';
import styles from  './App.module.css';
import {CountryPicker, DataView, DataGrid} from './components';
import { fetchWorldData, fetchIndianStateData } from './api';
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {
    global: {},
    totalCount : {},
    newCount : {},
    countriesData: [],
    indianStateData: [],
    country: ''
  }
  zeroData = { confirmed: 0, deaths: 0, recovered: 0, date: 0};

  getTotalAndNewCount = (row) => {
    const totalCount = {confirmed: row.TotalConfirmed, deaths: row.TotalDeaths, recovered: row.TotalRecovered, date: row.Date};
    const newCount = { confirmed: row.NewConfirmed, deaths: row.NewDeaths, recovered: row.NewRecovered, date: row.Date};
    return {totalCount, newCount};
  }

  async componentDidMount(){
    const {global, countriesWithId} = await fetchWorldData();
    const indianStateData = await fetchIndianStateData();
    const {totalCount, newCount} = this.getTotalAndNewCount(global);
    this.setState({
      global : global,
      countriesData: countriesWithId, 
      indianStateData: indianStateData,
      totalCount : totalCount,
      newCount : newCount
    });
  }

  handleCountryChange = async (country) => {
    const countryData = country === "World" ? [this.state.global] : this.state.countriesData.filter(row => row.Country === country);
    const {totalCount, newCount} = countryData.length ? this.getTotalAndNewCount(countryData[0]) : {totalCount: this.zeroData, newCount: this.zeroData};
    this.setState({
      country: country === "World" ? "" : country,
      totalCount : totalCount,
      newCount : newCount
    });
  }

  render(){
    const {totalCount, newCount, country, countriesData, indianStateData} = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKER</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Grid container>
          <Grid item xs={12} md={6}><DataView data={totalCount} country={country} type="Line" label={"Total Cases"}/></Grid>
          <Grid item xs={12} md={6}><DataView data={newCount} country={country} type="Bar" label={"New Cases"}/></Grid>
        </Grid>
        <DataGrid countriesData={countriesData} indianStateData={indianStateData}/>
      </div>
    );
  }
}

export default App;
