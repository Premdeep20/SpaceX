import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Topbar(props) {

    const navigate = () => {
        props.history.push('/home');
    }

    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" onClick={navigate} className="point-cursor">
                        SpaceX
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
