import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import Skills_img from '../../assets/images/skills/techs.png';
import Progressbar from './progressbar';
import './skills.scss';
import "../../assets/scss/variable.scss";


function Skills() {
    return (
        <section className="skills-wrapper" id="skills">
            <Container>
                <Row>
                    <Col md={6} sm={0}>
                        <div className="skills-image">
                            <Image Path={Skills_img} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="skills-content-block main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name="My Skills"
                                // Label="The Front"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="What I Do"
                            />

                            <Description
                                Class="skills-dec"
                                Name="I have strong exprience building interactive chatbots, webpages and administrator pages using the following technologies."
                            />
                            <div className="progress-outer-block">
                                <div className="progressbar-wrapper-block">
                                    <div className="progressbar-block">
                                        <Progressbar
                                            Class="progressbar1"
                                            Percenteg="100"
                                            ProgressTitle="Node.js"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar2"
                                            Percenteg="100"
                                            ProgressTitle="ReactJS"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar3"
                                            Percenteg="100"
                                            ProgressTitle="Redux"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar3"
                                            Percenteg="100"
                                            ProgressTitle="Microsoft Bot Framework"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar3"
                                            Percenteg="100"
                                            ProgressTitle="GraphQL"
                                            ProgressClass="progressbar-title"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
