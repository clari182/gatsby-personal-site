import React, { useState } from 'react'
import BubbleImg from '../../assets/images/bubble.png'
import Image from '../../components/common/image';

const Chat = (props) => {

    const [convo, setConvo] = useState(false)

    const onClick = () => {
        console.log(convo)
        setConvo(!convo)
    }

    return <>
        {convo && <div className="convo"><iframe src="https://clara-youdale-bot-iframe.azurewebsites.net" width="300" height="400" /></div>}
        <div className="chat" ><Image onClick={onClick} Path={BubbleImg} /></div>
    </>
}

export default Chat