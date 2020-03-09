import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Title } from '../../components/common/title/index';
import Icon from '../../components/common/icon/index';
import './footer.scss';

function Footer() {
    return (
        <div className="footer-wrapper">
            <Container>
                <div className="footer-content-wrapper" id="footer">
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="footer-contact-us">
                                <Title Class="footer-title" Name="Contact Me" />
                                <div className="footer-details-link">
                                    <ul>
                                        {/* <li>
                                            <a href="#">
                                                <span>
                                                    <Icon icon={faMapMarkerAlt} />
                                                </span>
                                                <Title
                                                    Class="footer-link"
                                                    Name="Office No - 115 , Street No - 05 , NY, USA"
                                                />
                                            </a>
                                        </li> */}
                                        <li>
                                            {/* <a href="#"> */}
                                                <span>
                                                    <Icon icon={faEnvelopeOpen} />
                                                </span>
                                                <Title
                                                    Class="footer-link footer-email"
                                                    Name="clara@botsfactory.io"
                                                />
                                            {/* </a> */}
                                        </li>
                                        {/* <li>
                                            <a href="#">
                                                <span>
                                                    <Icon icon={faPhoneVolume} />
                                                </span>
                                                <Title Class="footer-link" Name="+1 123 - 564 - 7890" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} sm={12}>
                            <div className="footer-newsletter">
                                <Title Class="footer-social-title" Name="" />
                                <ul className="social-wrapper">
                                    <li>
                                        <a href="https://github.com/clari182">
                                            <span>
                                                <Icon icon={faGithubSquare} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/pikachuss182">
                                            <span>
                                                <Icon icon={faTwitterSquare} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/clarayoudale/">
                                            <span>
                                                <Icon icon={faLinkedin} />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default Footer;