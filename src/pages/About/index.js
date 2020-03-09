import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'
import './index.scss'


class About extends React.Component {
    render() {
        return <><div className="section about" >
            {/* <Divider />
            <div className="content left">
                <Shape type="top" name="About"/>
                <p>laknfwekjbfwe</p>
            </div> */}
            <div className="image-cropper col-3">
                <img className="avatar" src="images/clara.jpg" />
            </div>
            <div className="col-9">
                <h1>Hi! I'm Clara Youdale and I'm a software engineer, co-founder of <a href="https://botsfactory.io">Botsfactory</a> and <a href="https://luyten.ai">Luyten AI</a></h1>
            </div>
        </div >
        </>
    }
}

export default About