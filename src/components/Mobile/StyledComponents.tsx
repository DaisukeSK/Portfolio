import Styled, { styled } from "styled-components";
import BG1 from '../../../public/mb_BG1.png'
import BG2 from '../../../public/mb_BG2.png'
import BG3 from '../../../public/mb_BG3.png'
import BG4 from '../../../public/mb_BG4.png'
import BG5 from '../../../public/mb_BG5.png'
import BG6 from '../../../public/mb_BG6.png'
// import { css,keyframes } from "styled-components";

console.log(BG1,BG2,BG3,BG4,BG5,BG6)

export const Main=Styled.main<{selected:number}>`

    position: absolute;
    top: 0;
    background-color: #85CCE9;
    
    padding: 20px;
    padding-top: 35px;
    box-sizing: border-box;
    width: 100vw;
    height: fit-content;
    min-height: 100vh;

`;

export const Aside=Styled.aside<{aside:number}>`
    width: 150px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props)=>props.aside?'0':'-160px'};
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

export const Toggle=styled.div<{team:number}>`
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: 30px auto;
    div {
        width: 120px;
        padding: 2px 10px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 5px;
        outline: 1px solid #ffffff55;
        margin: 0 15px;
        transition: all .3s ease-in-out;
    }
    div:first-child {
        background-color: ${(props)=>props.team?'#00000055':'#ffffff55'};
        box-shadow: #ffffff 0 0 ${(props)=>props.team?'0':'5px'};
        pointer-events: ${(props)=>props.team?'auto':'none'};
    }
    div:nth-child(2) {
        background-color: ${(props)=>!props.team?'#00000055':'#ffffff55'};
        box-shadow: #ffffff 0 0 ${(props)=>!props.team?'0':'5px'};
        pointer-events: ${(props)=>!props.team?'auto':'none'};
    }
`;