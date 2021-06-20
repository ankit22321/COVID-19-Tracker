import React from 'react';
import { default as CardItem } from '../CardItem/CardItem';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {

    if(!props.data)
        return "Loading...";

    const {confirmed, recovered, deaths, date} = props.data;

    return(
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">
                <CardItem count={confirmed} label={"Infected"} lastUpdate={date}/>
                <CardItem count={recovered} label={"Recovered"} lastUpdate={date}/>
                <CardItem count={deaths} label={"Deceased"} lastUpdate={date}/>
            </Grid>
        </div>
    )
}

export default Cards;