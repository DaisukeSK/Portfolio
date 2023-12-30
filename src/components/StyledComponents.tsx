
import Styled from "styled-components";
import { css,keyframes } from "styled-components";

const timingFunc='cubic-bezier(0,1,.7,1)';
// const timingFunc='cubic-bezier(1,0,0,1)';

const toRight=keyframes`
    from{ left: 0; opacity:1; }
    to{ left: 100%; opacity:0; }
`;
const toLeft=keyframes`
    from{ left: 0; opacity:1; }
    to{ left: -100%; opacity:0; }
`;
const fromRight=keyframes`
    from{ left: 100%; opacity:0; }
    to{ left: 0; opacity:1; }
`;
const fromLeft=keyframes`
    from{ left: -100%; opacity:0; }
    to{ left: 0; opacity:1; }
`;

export const Main=Styled.main< { show: number,direction: number,aa:number} >`
position: absolute;
top: 0;

width: 100%;

height: fit-content;
min-height: 100vh;

max-height: ${(props)=>props.show?css`fit-content`:css`100vh`};
overflow-y: ${(props)=>props.show?css`visible`:css`hidden`};

padding-top: 100px;
    

// background:linear-gradient(black,blue);
// background-color:#000040;
//         background-attachment: fixed;

background-color:#000055;

// background: url(../../../public/wallpaper.jpg);
// background-size: cover;


    opacity: ${(props)=>props.show?css`1`:css`0`};
    z-index: ${(props)=>props.show?css`1`:css`0`};


    

    

    // animation-name:${(props) => props.show? css`${fromRight}`: css`${toLeft}`};

    animation-name:${(props) =>
        props.aa && props.show && props.direction? css`${fromLeft}`:
        props.aa && props.show && !props.direction? css`${fromRight}`:
        props.aa && !props.show && props.direction? css`${toRight}`:
        
        props.aa && !props.show && !props.direction? css`${toLeft}`:null};

        animation-timing-function: ${timingFunc};

    animation-duration: 1s;
    box-sizing: border-box;
`;

export const UnderLine=Styled.div< { position: number,testprop:number} >`
    width: ${(props)=>(props.testprop/4)*0.6}px;
    margin-left: ${(props)=>(props.testprop/4)*0.2}px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -5px;
    left: ${(props)=>
        props.position==0?css`0`:
        props.position==1?css`25%`:
        props.position==2?css`50%`:
        `75%`
    };
    transition: all ${timingFunc} 1s;
    // box-shadow: 0 0 3px 2px white;

`;

export const HeaderRightChild=Styled.div<{disabled:number}>`

    pointer-events: ${(props)=>props.disabled?css`none`:css`auto`};
    width: 100px;
    text-align: center;
    border-radius: 15px;
    padding: 5px;
    box-sizing: border-box;
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
        transition: all ease-out 1s;
    }

`;

