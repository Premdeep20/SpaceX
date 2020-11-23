import React, { Component } from 'react';
import Topbar from '../../Common/Topbar';
import PaginationPage from '../../Common/PaginationPage';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment';
import RedditIcon from '@material-ui/icons/Reddit';

export default class HistoryPage extends Component {

    state = {
        count: 0,
        data: [],
        showData: [],
        page: 1,
    }

    componentDidMount() {
        const pages = Math.ceil(this.props.historyData.length / 10);
        this.setState({
            data: this.props.historyData,
            count: pages,
            showData: this.props.historyData.slice(0, 10)
        })
    }

    render() {
        return (
            <>
                <Topbar {...this.props} />
                <div className="">
                    <Container maxWidth="md">
                        <Grid container spacing={4}>
                            {this.state.showData.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={6}>
                                    <Card>
                                        <CardHeader
                                            title={card.title}
                                            subheader={moment(card.event_date_utc).format('MMMM Do YYYY')}
                                        />
                                        <CardContent>
                                            {
                                                card.flight_number &&
                                                <Typography color="textSecondary">
                                                    Flight number : {card.flight_number}
                                                </Typography>
                                            }
                                            <Typography>
                                                {card.details}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {
                                                card.links.reddit &&
                                                <Button size="small" href={card.links.reddit} target="__blank">
                                                    <RedditIcon />
                                                </Button>
                                            }
                                            <Button size="small" color="primary" href={card.links.article} target="__blank">
                                                Article
                                                </Button>
                                            <Button size="small" color="secondary" href={card.links.wikipedia} target="__blank">
                                                Wikipedia
                                                </Button>
                                        </CardActions>
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
}
