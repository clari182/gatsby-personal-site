import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../containers/navbar';
import Loader from 'react-loader-spinner'
import Banner from '../containers/banner';
import Skills from '../containers/skills';
import Portfolio from '../containers/portfolio';
import Testimonial from '../containers/testimonial';
import Chat from '../components/Chat'
import Footer from '../containers/footer';
import '../assets/scss/style.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const BusinessTheme = (props) => {
    const [loader, setLoader] = React.useState(false)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setLoader(true)
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    return (
        loader ?
            <React.Fragment>
                <Navbar />
                <div id="main-content">
                    <Banner ChangeClass={props.ThemeClass} />
                    <Skills />
                    <Testimonial />
                    <Portfolio />
                    <Footer />
                    <Chat />
                    {/* <ThemeColor /> */}
                </div>
            </React.Fragment>
            :
            <div className="theme-loader">
                <Loader
                    type="Triangle"
                    color="#e100ff "
                    height={150}
                    width={150}
                    timeout={3000}
                />
            </div>

    )
}

export default BusinessTheme