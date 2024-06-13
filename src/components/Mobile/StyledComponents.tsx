import Styled, { styled } from "styled-components";

export const Main=Styled.main<{selected:number}>`
    position: absolute;
    top: 0;    
    
    padding: 20px;
    padding-top: 35px;
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    min-height: 100vh;

    &::before, &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        
    }
    &::before {
        
        background: ${(props)=>
            props.selected==0?'linear-gradient(#ffffff,#ffffff)':
            props.selected==1?'linear-gradient(#F7FF0E33,#001046A1)':
            props.selected==2?'linear-gradient(#FFFFFF,#FFFFFF)':
            props.selected==3 && '#00104677'
        };
        background-size: cover;
        background-position: center;
        z-index: -3;

    }
    &::after {
        background: ${(props)=>
            props.selected==0?'linear-gradient(#FF560E55,#95AEFF77)':
            props.selected==1?'linear-gradient(#F7FF0E33,#001046A1)':
            props.selected==2?'linear-gradient(#FFFFFF77,#FFFFFF77)':
            props.selected==3 && '#00104677'
        };
        z-index: -2;
    }
`;

export const Aside=Styled.aside<{aside:number}>`
    width: 150px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props)=>props.aside?'0':'-150px'};
    transition: all .5s ease-in-out;
    z-index: 2;
    background-color: #000088cc;

    &>svg {
        margin: 10px 10px 10px auto;
        display: block;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            display: flex;
            align-items: center;
           
        }
    }

`;

export const ArrowSVG=Styled.svg.attrs({width:'12', height:'10'})<{selected:number}>`
    margin: 10px;
    opacity: ${(props)=>props.selected?1:0};
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
        background-color: ${(props)=>props.team?'#00000055':'#2F60FFD1'};
        box-shadow: #2F60FFD1 0 0 ${(props)=>props.team?'0':'5px'};
        pointer-events: ${(props)=>props.team?'auto':'none'};
        color: ${(props)=>props.team?'#00000077':'#ffffff'};
    }
    div:nth-child(2) {
        background-color: ${(props)=>!props.team?'#00000055':'#2F60FFD1'};
        box-shadow: #2F60FFD1 0 0 ${(props)=>!props.team?'0':'5px'};
        pointer-events: ${(props)=>!props.team?'auto':'none'};
        color: ${(props)=>!props.team?'#00000077':'#ffffff'};
    }
`;