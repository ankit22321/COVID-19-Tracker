import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './CardItem.module.css';
import CountUp from 'react-countup';

const CardItem = (props) => {
    // if(!props.count)
    //     return "Loading...";
    console.log(props);
    return(
        <Grid item component={Card} md={3} xs={10} className={cx(styles.card, styles[props.label])}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom  align="center">{props.label}</Typography>
                <Typography variant="h6" align="center">
                    <CountUp start={0} end={props.count ? props.count : 0} duration={2.5} separator=","/>
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">{new Date(props.lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}
export default CardItem;