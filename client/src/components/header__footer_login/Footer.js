import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//===============================================================================================//

class Footer extends Component {

    render() {
        return (
            <div className="footerContainer">
                <Grid id="centeredFooterText">
                    <Row style={{margin: "0"}}>
                        <Col sm={0} md={2}>{' '}</Col>
                        <Col sm={12} md={8}>
                            <Link to="#">About Us</Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link to="#">Contact Us</Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link to="#">Terms of Use</Link>
                            <br />
                            Follow us on social media:&nbsp;
                            <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
                                <img src="https://png.icons8.com/facebook/dusk/20" title="Facebook" alt="facebook"/>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a target="_blank" href="https://www.twitter.com" rel="noopener noreferrer">
                                <img src="https://png.icons8.com/twitter/dusk/20" title="Twitter" alt="twitter"/>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                                <img src="https://png.icons8.com/instagram-old/dusk/20" title="Instagram Old" alt="instagram"/>
                            </a>
                            <br />
                            © 2018 Alex Ha
                            <br />
                            <hr id="footerBar"/>
                        </Col>
                        <Col sm={0} md={2}>{' '}</Col>
                    </Row>
                </Grid>

                <div id="footerLicensingColor">
                    <h6 id="footerLicensing">
                        <a href="https://www.freepik.com">Flat graphics designed by Freepik</a>.
                        Logo made with <a href="https://logomakr.com/10Sseo">Logomakr.com</a>. <a href="https://icons8.com">Icon pack by Icons8</a>.
                    </h6>
                </div>


            </div>
        )
    }
}

export default Footer;