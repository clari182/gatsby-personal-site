import React from 'react'
// import Shape from '../../components/Shape'
// import Divider from '../../components/Divider'
import './index.scss'

import Project from './Project'

import Carousel from 'nuka-carousel';

const Porfolio = () => {

    const renderDotControls = ({
        cellAlign,
        cellSpacing,
        currentSlide,
        frameWidth,
        goToSlide,
        nextSlide,
        previousSlide,
        slideCount,
        slidesToScroll,
        slidesToShow,
        slideWidth,
        wrapAround
    }) => {
        return (
            <div
                className="slider-control-bottomcenter"
                style={{
                    position: 'relative',
                    bottom: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '15px'
                }}
            >
                <ul
                    style={{
                        position: 'relative',
                        margin: '0px',
                        top: '12px',
                        padding: '0px',
                        display: 'flex'
                    }}
                >
                    {[...Array(slideCount)].map((sc, i) => (
                        <li
                            style={{ listStyleType: 'none', display: 'inline-block' }}
                            key={i + 1}
                        >
                            <div
                                style={{
                                    border: '1px #45689a solid',
                                    width: '10px',
                                    height: '4px',
                                    background: currentSlide === i ? '#45689a' : 'transparent',
                                    borderRadius: '2px',
                                    margin: '0 3px'
                                }}
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (<div className="section portfolio">
        {/* <Divider />
            <div className="content right">
                <p>SAARgreefgerASA</p>
                <Shape type="right" name="Portfolio"/>
            </div> */}
        <h1 class="header">My latest work</h1>
        <Carousel
            // dragging={true}
            // wrapAround={true}
            speed="400"
            renderTopCenterControls={({ currentSlide }) => (
                <></>
            )}
            renderCenterLeftControls={({ previousSlide }) => (
                <></>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <></>
            )}

        // renderBottomCenterControls={props => renderDotControls(props)}
        >

            <Project title="Botsfactory" text="Botsfactory is a Chatbot Building platform, where you can create and deploy Messenger Chatbots without coding." image="images/bf.jpg" url="https://botsfactory.io" tags={["react", "redux", "nodejs", "graphql", "mysql", "ant"]} />
            <Project title="Cosmic Hype" text="Cosmic Hype is a trending news website." image="images/cosmichype.png" url="https://cosmichype.com" tags={["react", "nodejs", "graphql", "mysql", "graphcms"]} />
            <Project title="Astrolobot Chatbot" text="Astrology chatbot" image="images/astrolobot.gif" url="https://m.me/astrolobot" tags={["microsoftbot", "nodejs", "graphql", "mysql"]} />
            <Project title="Whatsapp Chatbot" text="Business Whatsapp Chatbot for Botsfactory" image="images/bfwhatsapp.gif" url="https://wa.me/13134257350" tags={["twilio", "microsoftbot", "nodejs"]} />
        </Carousel>
    </div>)
}

export default Porfolio