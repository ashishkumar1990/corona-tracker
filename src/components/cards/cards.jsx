import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import cx from 'classnames';
import styles from './cards.module.css'
import CountUp from 'react-countup'

const Cards = ({data: {confirmed, recovered, deaths, active, lastUpdate}, stateName}) => {
    if (!confirmed) {
        return "Loading...";
    }
    const mdLength = stateName ? 2:3;
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={mdLength} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration="2.5" separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={mdLength} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"> <CountUp start={0} end={recovered.value} duration="2.5"
                                                           separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={mdLength} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration="2.5"
                                                          separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>

                </Grid>
                {stateName && <Grid item component={Card} xs={12} md={mdLength} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5"><CountUp start={0} end={active.value} duration="2.5"
                                                          separator=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases caused by COVID-19</Typography>
                    </CardContent>

                </Grid>}
            </Grid>

        </div>
    )
};
export default Cards;