import React from 'react'
import './Project.scss'
import { Tag } from 'antd'
import styled from 'styled-components'

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    margin-top: 20px;
`

const tagsInfo = {
    "ant": {
        name: "Ant Design",
        url: "https://ant.design/"
    },
    "microsoftbot": {
        name: "Microsoft Bot Framework",
        url: "https://dev.botframework.com/"
    },
    "react": {
        name: "React JS",
        url: "https://reactjs.org/"
    },
    "redux": {
        name: "Redux",
        url: "https://redux.js.org/"
    },
    "graphql": {
        name: "GraphQL",
        url: "https://graphql.org/"
    },
    "nodejs": {
        name: "Node.js",
        url: "https://nodejs.org/en/"
    },
    "mysql": {
        name: "MySQL",
        url: "https://www.mysql.com/"
    },
    "twilio": {
        name: "Twilio",
        url: "https://twilio.com/"
    },
    "graphcms": {
        name: "Graph CMS",
        url: "https://graphcms.com/"
    }
}

const Project = (props) => {

    const { title, image, text, url, tags } = props

    return <div className="project">
        <h2> {title}</h2>
        <a href={url}><img src={image} /></a>
        <TagContainer>{tags.map(tag => <Tag color="blue"><img src={`icons/${tag}.png`} style={{ maxWidth: '20px', marginRight: '3px' }} />{tagsInfo[`${tag}`].name}</Tag>)}</TagContainer>
        <p>{text}</p>
    </div>

}

export default Project