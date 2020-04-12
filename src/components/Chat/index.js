import React, { useState } from 'react'
import BubbleImg from '../../assets/images/bubble.png'
import Image from '../../components/common/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Chat = (props) => {

    const [convo, setConvo] = useState(false)

    const onClick = () => {
        console.log(convo)
        setConvo(!convo)
    }

    return <div className="chatbot">
        <div className={`convo ${convo}`}>
            <iframe src="https://clara-youdale-bot-iframe.azurewebsites.net" width="100%" height="100%" />
            <div className="close-convo" onClick={onClick} ><FontAwesomeIcon icon={faTimes} size="3x" /></div>
        </div>
        <div className="chat" onClick={onClick} ><Image Path={BubbleImg}/></div>
    </div >
}

export default Chat