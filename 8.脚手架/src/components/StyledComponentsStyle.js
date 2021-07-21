import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100px;
    height: 100px;
    background: orange;
    p {
        color: black
    }
`

const Title = styled.h3`
    color: white;
    background: ${ props => props.background };
`

function StyledComponentsStyle () {
    const color = 'red'
    return (
        <Container>
            <Title background={ color }>标题</Title>
            <p>内容</p>
        </Container>
    )
}


export default StyledComponentsStyle