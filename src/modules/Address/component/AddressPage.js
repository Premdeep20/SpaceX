import React, { Component } from 'react';
import Topbar from '../../Common/Topbar';
import PaginationPage from '../../Common/PaginationPage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment';
import Data from '../../Common/Data';

import './AddressPage.css'

export default class AddressPage extends Component {

    state = {
        count: 0,
        data: [],
        showData: [],
        page: 1,
    }

    componentDidMount() {
        const pages = Math.ceil(this.props.addressData.length / 10);
        this.setState({
            data: this.props.addressData,
            count: pages,
            showData: this.props.addressData.slice(0, 10)
        })
    }

    render() {
        return (
            <>
                <Topbar {...this.props} />
                <div className="margin-div">
                    <Container maxWidth="md">
                        <Grid container spacing={4}>
                            {this.state.showData.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={6}>
                                    <Card>
                                        <CardHeader
                                            title={card.payload_id}
                                            subheader={moment(card.event_date_utc).format('MMMM Do YYYY')}
                                        />
                                        <CardContent>
                                            <Data
                                                label='Nationality :&nbsp;'
                                                value={card.nationality}
                                            />
                                            <Data
                                                label='Customers :&nbsp;'
                                                value={this.combineData(card.customers)}
                                            />
                                            <Data
                                                label='Manufacturer :&nbsp;'
                                                value={card.manufacturer}
                                            />
                                            <Data
                                                label='Type :&nbsp;'
                                                value={card.payload_type}
                                            />
                                            <Data
                                                label='Mass :&nbsp;'
                                                value={card.payload_mass_kg ?
                                                    `${card.payload_mass_kg} kg` : 'No data available'}
                                            />
                                            <Data
                                                label='Orbit :&nbsp;'
                                                value={card.orbit}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <PaginationPage
                        count={this.state.count}
                        changeData={this.changeData}
                        page={this.state.page}
                    />
                </div>
            </>
        );
    }

    changeData = (page) => {
        const newData = this.state.data.slice((page - 1) * 10, page * 10);
        this.setState({
            showData: newData,
            page,
        })
    }

    combineData = (data) => {
        let string = '';
        for (let index = 0; index < data.length - 1; index++) {
            string = string + data[index] + ',';
        }
        string = string + data[data.length - 1];
        return string;
    }
}
