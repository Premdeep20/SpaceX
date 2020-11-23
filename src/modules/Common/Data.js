import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Data(props) {
    return (
        <div className="data-div">
            <Typography>
                {props.label}
            </Typography>
            <Typography color="textSecondary">
                {props.value}
            </Typography>
        </div>
    )
}

