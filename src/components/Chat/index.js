import React, { useState } from 'react'

const Chat = (props) => {

    const [convo, setConvo] = useState(false)

    const onClick = () => {
        console.log(convo)
        setConvo(!convo)
    }

    return <>
        {convo && <div className="convo"><iframe src="https://clara-youdale-bot-iframe.azurewebsites.net" width="300" height="400" /></div>}
        <div className="chat" ><img onClick={onClick} src="images/bubble.png" /></div>
    </>
}

export default Chat