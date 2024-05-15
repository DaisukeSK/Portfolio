import Styled from "styled-components";
// import { css,keyframes } from "styled-components";

export const Aside=Styled.aside<{aside:number}>`
width: 150px;
height: 100vh;
position: absolute;
top: 0;
right: ${(props)=>props.aside?'0':'-200px'};
transition: all .5s ease-in-out;
z-index: 2;
background-color: navy;

svg {
    margin: 10px 10px 10px auto;
    display: block;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        
    }
}

`;