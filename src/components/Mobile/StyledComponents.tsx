import Styled from "styled-components";

export const Toggle=Styled.div<{team:number}>`
    display: flex;
    justify-content: center;
    // background: pink;
    margin: 30px auto;
    div {
        width: 120px;
        padding: 2px 10px;
        border: 1px solid #ffffff55;
        box-sizing: border-box;
        text-align: center;
        border-radius: 5px;
        margin: 0 10px;
        transition: all .3s ease-in-out;
    }
    div:first-child {
        background-color: ${(props)=>props.team?'#00000055':'#2F60FFD1'};
        pointer-events: ${(props)=>props.team?'auto':'none'};
        color: ${(props)=>props.team?'#00000077':'#ffffff'};
    }
    div:nth-child(2) {
        background-color: ${(props)=>!props.team?'#00000055':'#2F60FFD1'};
        pointer-events: ${(props)=>!props.team?'auto':'none'};
        color: ${(props)=>!props.team?'#00000077':'#ffffff'};
    }
`;