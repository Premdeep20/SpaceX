import React from 'react';
import Topbar from '../Common/Topbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export default function HomePage(props) {
    const classes = useStyles();

    const navigate = (isHistory) => {
        if (isHistory) {
            props.history.push('/history');
        } else {
            props.history.push('/address');
        }
    }

    return (
        <>
            <Topbar {...props}/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            SpaceX
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary">
                            Welcome to SpaceX
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={() => navigate(true)}>
                                        History
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" onClick={() => navigate(false)}>
                                        Address
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    );
}
