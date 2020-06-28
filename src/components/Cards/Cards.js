import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(confirmed)
    if (!confirmed) {
        return 'loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                     {/* infected */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>


                {/* recovered */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>


                {/* deaths */}

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
