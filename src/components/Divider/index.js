import React from 'react'
import styled from 'styled-components'

const DividerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 15px 0;
`

const Line = styled.div`
    min-width: 25px;
    height: 0px;
    border: 1px solid #FFFFFF;
    min-width: 40%;
`

const Square = styled.div`
    width: 15px;
    height: 15px;

    border: 2px solid #FFFFFF;
    box-sizing: border-box;
`

class Divider extends React.Component {
    render() {
        return <DividerContainer>
            <Line />
            <Square />
            <Line />
        </DividerContainer>
    }
}

export default Divider