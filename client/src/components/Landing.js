import React, { Component } from 'react';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router';
//===============================================================================================//

class Landing extends Component {

    render() {
        return (
            <div className="landing">
                <div className="mainSplash">
                    <Grid id="container">
                        <Row>
                            <Col sm={8} md={7}>
                                <Jumbotron id="jumbotron">
                                    <h1>Engage with the world.</h1>
                                    <p>
                                        List your active social platforms and rough metrics. Advertisers will reach
                                        out to you if they are interested in partnering. Leverage our platform to reach
                                        out to influential content creators and expand your market presence. Promote a new product.
                                    </p>
                                    <br/>
                                    <Button bsStyle="primary">Learn more</Button>
                                    &nbsp;
                                    <Button bsStyle="info">Browse content creators</Button>
                                    &nbsp;
                                    <Button bsStyle="success">Register</Button>
                                </Jumbotron>
                            </Col>
                            <Col sm={2} md={1} />
                            <Col sm={2} md={4}>
                                <img src="https://i.imgur.com/n6INZhE.png" alt="magnetSocial" />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Landing;
