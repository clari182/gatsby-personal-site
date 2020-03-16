import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/common/title/index';
import PortfolioData from '../../data/portfolio/index';
import './portfolio.scss';
import Button from '../../components/common/button';

function Portfolio() {
    return (
        <section className="portfolio-wrapper" id="portfolio">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle"
                        Name="Portfolio"
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name="My latest"
                        Label="Work"
                    />
                    <Description
                        Class="site-dec"
                        Name=""
                    />
                </div>
                <Row>
                    {PortfolioData.map((data, i) => (
                        <Col lg={4} sm={6} key={data.id} className={`portfolio-${i}`}>
                            <div className="portfolio-content">
                                <div className="portfolio-first-block">
                                    <img src={data.img} alt="" title="" />
                                    <div className="portfolio-hover">
                                        <Title
                                            Class="portfolio-hover-title"
                                            Name={data.subtitle}
                                        />
                                        <Description
                                            Class="portfolio-hover-dec"
                                            Name={data.subcontent}
                                        />
                                        <a href={data.url} target="_blank">
                                            <Button
                                            Class="button1 btn button2 gradient-color"
                                            Name="View more"
                                            BtnIcon="btn-icon"
                                        />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;
