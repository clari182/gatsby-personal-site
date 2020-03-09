import React from 'react'
import Shape from '../../components/Shape'
import Divider from '../../components/Divider'
import './index.scss'


class Contact extends React.Component {
    render() {
        return <div className="section contact">
            {/* <Divider />
            <div className="content right">
                <Shape type="bottom" name="Contact"/>
            </div> */}
            <div class="header">Contact</div>
            <h1>The Contact section</h1>
        </div>
    }
}

export default Contact