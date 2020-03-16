import React from "react"

import BusinessTheme from '../components/businesstheme';

import 'antd/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "react-helmet";

const IndexPage = () => (
    <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Clara Youdale</title>
            <link rel="canonical" href="https://clarayoudale.com" />
        </Helmet>
        <div className="main-wrapper">
            <BusinessTheme
                ThemeClass="demo1"
            />
        </div>
    </>
)

export default IndexPage
