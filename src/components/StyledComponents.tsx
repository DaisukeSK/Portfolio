import Styled from "styled-components";
import { css,keyframes } from "styled-components";

const timingFunc='cubic-bezier(0,1,.7,1)';

// const color_01='#4455CF'
// const color_02='#020B4E'
const color_01='#000037'
const color_02='#000000'
const color_11='#CED71C'
const color_12='#FF4E13'
const color_21='#85FF74'
const color_22='#0077FF'
const color_31='#6455CF'
const color_32='#b20B4E'

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

export const Main=Styled.main< { show: number,direction: number, selected:number} >`
    position: absolute;
    top: 0;
    width: 100%;
    min-height: ${(props) =>props.selected==2? css`101vh`:css`100vh`};
    max-height: ${(props)=>props.show?css`fit-content`:css`100vh`};
    padding-top: 45px;
    overflow-y: ${(props)=>props.show?css`visible`:css`hidden`};
    visibility: ${(props)=>props.show?css`visible`:css`hidden`};
    z-index: ${(props)=>props.show?css`1`:css`0`};
    animation-name:${(props) =>
        props.show && props.direction? css`${fromLeft}`:
        props.show && !props.direction? css`${fromRight}`:
        !props.show && props.direction? css`${toRight}`:
        !props.show && !props.direction? css`${toLeft}`:
        null
    };
    animation-timing-function: ${timingFunc};
    animation-duration: 1s;
    box-sizing: border-box;
    &::before {
        width: 100%;
        height: 100vh;
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(#4455CF, #020B4E);
        background: ${(props) =>
            props.selected==0? css`linear-gradient(${color_01}, ${color_02})`:
            props.selected==1? css`linear-gradient(165deg, ${color_11}, ${color_12})`:
            props.selected==2? css`linear-gradient(20deg, ${color_21}, ${color_22})`:
            props.selected==3? css`linear-gradient(${color_31}, ${color_32})`:
            null
        };
        transition: opacity 3s ease-out;
        opacity: ${(props) =>
            props.show?css`1`:`0`
        };
        z-index: -2;
    }
    &::after {
        width: 100%;
        height: 100vh;
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        background: ${(props) =>
            props.selected==2? css`linear-gradient(110deg, #FFEA097D, transparent, #FF090D7D)`:
            props.selected==3? css`linear-gradient(90deg, transparent, #ffffff55, transparent)`:
            null
        };
        
        transition: opacity 3s ease-out;
        opacity: ${(props) =>
            props.show?css`1`:`0`
        };
        z-index: -1;
    }
`;

const headerNavWidth=450

export const UnderLine=Styled.div< { position: number, still:number} >`
    height: 25px;
    // outline: 1px solid grey;
    width: ${headerNavWidth/4*0.7}px;
    margin-left: ${headerNavWidth/4*0.15}px;
    border-bottom: 2px solid #ffffff;
    position: absolute;
    bottom: -2px;
    left: ${(props)=>
        props.position==0?css`0`:
        props.position==1?css`25%`:
        props.position==2?css`50%`:
        `75%`
    };
    transition: left ${timingFunc} 1s;

    &::before {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        background: ${(props)=>
            props.position==0?css`linear-gradient(transparent, ${'#ffffff'}33)`:
            props.position==1?css`linear-gradient(transparent, ${color_11}77)`:
            props.position==2?css`linear-gradient(transparent, ${color_22}77)`:
            `linear-gradient(transparent, ${color_31}77)`
        };
        opacity: ${(props)=>props.still?css`1`:css`0`};
        transition: all ${(props)=>props.still?`2s`:`0s`} ease-in-out;
        z-index: -1;
    }
`;

export const NavChild=Styled.div<{disabled:number}>`
    pointer-events: ${(props)=>props.disabled?css`none`:css`auto`};
    width: 90px;
    text-align: center;
    border-radius: 7px;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    // outline: 1px solid green;
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
        transition: all ease-out 1s;
    };
`;
    
export const LinkDiv=Styled.div<{bg:string}>`
    width: 400px;
    height: 250px;
    position: relative;
    border-radius: 5px;
    outline: 1px solid rgba(255, 255, 255, 0.3);
    overflow:hidden;
    background-image:${(props)=>css`url(${props.bg})`};
    background-size: cover;
    background-position: top;
    cursor: pointer;
    &:before, &:after {
        opacity: 0;
        transition: opacity .3s ease-in-out;
    }
    &:before {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background: #ffffffaa;
    }
    &:after {
        content:'Click for detail...';
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        color: navy;
        font-style: italic;
        font-weight: bold;
    }
    &:hover {
        &:before, &:after {
            opacity: 1;
        }
    }
`;

export const AnimationDiv=Styled.div<{anime:number}>`
    margin: 50px auto 0;
    width: 430px;
    height: ${(props)=>props.anime<16?css`240px`:css`0`};
    transition: all 3s ease-in-out;
    svg {
        overflow: visible;
    }
`;

export const G3=Styled.g<{anime:number}>`
    opacity:${(props)=>props.anime<20?1:0};
    transition:all .5s ease-in-out;
    .g3_text1, .g3_text2 {
        transition:all .5s ease-in-out;
    }

    .g3_text1 {
        opacity:${(props)=>(props.anime>=1 && props.anime<13.5)?1:0}
    }
    .g3_text2 {
        opacity:${(props)=>(props.anime>=2 && props.anime<14.5)?1:0}
    }

    .g3_text3 {
        fill:${(props)=>props.anime>=10?css`red`:css`white`}
    }
`;

export const Toggle=Styled.div<{teamp:boolean}>`
    position: relative;
    width: fit-content;
    margin: 50px auto;
    padding: 10px 30px;
    padding-left: 40px;
    background-color: #0050FF3E;
    box-shadow: #002E93C2 2px 2px 7px;
    svg {
        position: absolute;
        top: ${(props)=>props.teamp?css`35px`:`13px`};
        left: 10px;
        transition: top .3s ease-out;
    }
    .individual, .team {
        cursor: pointer;
        transition: color .3s ease-out;
        text-align: center;
    }
    .individual {
        color: ${(props)=>props.teamp?css`#ffffff77`:css`#ffffff`};
        pointer-events: ${(props)=>!props.teamp && css`none`};
    }
    .team {
        color: ${(props)=>props.teamp?css`#ffffff`:css`#ffffff77`};
        pointer-events: ${(props)=>props.teamp && css`none`};
    }
`;