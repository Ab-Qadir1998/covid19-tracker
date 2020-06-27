import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Card.module.css'

export const Cards = (props) => {
    console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                </Typography>
                        <Typography varient="h5">
                            REAL DATA
                </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            REAL DATA
                </Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                    {/*  */}
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                </Typography>
                        <Typography varient="h5">
                            REAL DATA
                </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            REAL DATA
                </Typography>
                        <Typography varient="body2">Number of recovries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                {/*  */}
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                </Typography>
                        <Typography varient="h5">
                            REAL DATA
                </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            REAL DATA
                </Typography>
                        <Typography varient="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
