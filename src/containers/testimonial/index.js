import React from 'react';
import { Container } from 'reactstrap';
import { Subtitle, Titlespan2 } from '../../components/common/title/index';
import CarouselSlider from './testimonial';
import './testimonial.scss';

function Testimonial() {
    return (
        <section className="testimonial-wrapper gradient-color" id="testimonial">
            <Container>
                <div className="main-title-wrapper">
                    <Subtitle
                        Class="site-subtitle gradient-color"
                        Name="testimonial"
                    />
                    <Titlespan2
                        Class="sitemain-subtitle"
                        Name="Clients"
                        Label="Feedback"
                    />
                    <p className="site-dec">I'm a Top Rated Freelancer on Upwork.</p>
                    {/* <Description
                        Class="site-dec"
                        Name="I'm a Top Rated Freelancer on Upwork. Feel free to take a look at my <a href='https://www.upwork.com/o/profiles/users/~01c11fe2c048e649f8/'>profile</a>."
                    /> */}
                </div>
                <CarouselSlider />
            </Container>
        </section>
    );
}

export default Testimonial;
