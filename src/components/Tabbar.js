import React from 'react';
import styled from 'styled-components';
import {
    Link,
    withRouter
} from "react-router-dom";

const Tabbar = withRouter((props) => {

    //Styling Wrapper (Bar)
    const Wrapper = styled.div`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: auto;
        align-content: start;
        position:absolute;
        bottom: 0;
        width:100%;
        `;

    //Styling each buttons
    const Button = styled.button`
        background: ${props => props.color};    
        text-align: center;
        font-size: 1em;
        padding: 0.25em 1em;
        border: none;
        border-radius: 3px;
        flex: 1 1 0px;
        width: 0;
        text-decoration: none;
    `

    //Capitalize function in order to define the Button Label
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return (s.charAt(0).toUpperCase() + s.slice(1))
    }
    //Logic to hide the bar on /cherry & homepage
    const hiddenOnRoutes = ['/cherry','/']
    return (hiddenOnRoutes.indexOf(props.location.pathname) === -1 ? (
        <Wrapper>
            {props.links.map((value, index) => {
                return <Button key={index} color={value.replace(/\//g, '')}><Link to={value}>{capitalize(value.replace(/\//g, ''))}</Link></Button>
            })}
        </Wrapper>
    ) : '');
})


export default Tabbar