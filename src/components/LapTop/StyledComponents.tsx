import Styled from "styled-components";
import { css,keyframes } from "styled-components";
import butonBG1 from '../../../public/buttonBg1.png'
import butonBG2 from '../../../public/buttonBg2.png'

const timingFunc='cubic-bezier(0,1,.7,1)';

const color_01='#000037'
const color_02='#000000'
const color_11='#CED71C'
const color_12='#FF4E13'
const color_21='#85FF74'
const color_22='#0077FF'
const color_31='#6455CF'
const color_32='#b20B4E'

const num=0

const toRight=keyframes`
    from{ left: 0; opacity:1; }
    to{ left: 100%; opacity:${num}; }
`;
const toLeft=keyframes`
    from{ left: 0; opacity:1; }
    to{ left: -100%; opacity:${num}; }
`;
const fromRight=keyframes`
    from{ left: 100%; opacity:${num}; }
    to{ left: 0; opacity:1; }
`;
const fromLeft=keyframes`
    from{ left: -100%; opacity:${num}; }
    to{ left: 0; opacity:1; }
`;

export const Main=Styled.main< { show: number, direction: number, selected:number} >`
    position: absolute;
    top: 0;
    width: ${(props) =>props.selected==2? css`100vw`:css`100%`};
    min-height: 100vh;
    max-height: ${(props)=>props.show?css`fit-content`:css`100vh`};

    padding-top: 45px;
    overflow-y: ${(props)=>props.show?css`visible`:css`hidden`};
    z-index: ${(props)=>props.show?css`1`:css`0`};

    animation-name:${(props) =>
        props.show && props.direction? css`${fromLeft}`:
        props.show && !props.direction? css`${fromRight}`:
        !props.show && props.direction? css`${toRight}`:
        !props.show && !props.direction && css`${toLeft}`
    };
    animation-timing-function: ${timingFunc};
    animation-duration: ${(props)=>props.show?css`1s`:css`0s`};;
    animation-fill-mode: both;
    box-sizing: border-box;

    &::before, &::after {
        width: 100%;
        height: 100vh;
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        transition: opacity 3s ease-out;
        opacity: ${(props) =>
            props.show?css`1`:`0`
        };
    }
    &::before {
        background: ${(props) =>
            props.selected==0? css`linear-gradient(${color_01}, ${color_02})`:
            props.selected==1? css`linear-gradient(165deg, ${color_11}, ${color_12})`:
            props.selected==2? css`linear-gradient(20deg, ${color_21}, ${color_22})`:
            props.selected==3? css`linear-gradient(${color_31}, ${color_32})`:
            'none'
        };
        z-index: -2;
    }
    &::after {
        background: ${(props) =>
            props.selected==2? css`linear-gradient(110deg, #FFEA097D, transparent, #FF090D7D)`:
            props.selected==3? css`linear-gradient(90deg, transparent, #ffffff55, transparent)`:
            'none'
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


export const Toggle=Styled.div<{teamp:number}>`
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


export const VideoDiv=Styled.div<{bg:number, vidloading:number}>`
    @keyframes showUp {
        from {
            opacity: 1;
        }
        to {
            opacity: .7;
        }
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: ${(props)=>props.vidloading?-3:-1};
    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        opacity: 0;
        animation-name: ${(props)=>props.bg==2?'showUp':'none'};
        animation-fill-mode: both;
        animation-duration: 5s;
        animation-iteration-count: 1;
    }
    &::after {
        animation-name: ${(props)=>props.bg==3?'showUp':'none'};
    }
    video {
        min-width: 100%;
        min-height: 100vh;
    }
`;

export const BG_Button=Styled.button`
    cursor: pointer;
    position: relative;
    bottom: 0;
    height: 25px;
    width: 35px;

    outline: 1px solid #ffffff33;
    border-radius: 5px;
    border: none;
    transition: all .2s ease-in-out;
    &:hover {
        bottom: 3px;
    }
`;

export const BG_Button1=Styled(BG_Button)<{bg:number, vidloading:number}>`
    pointer-events: ${(props)=>props.bg==1 || props.vidloading?'none':'auto'};
    background: linear-gradient(#000055,#00001f);
    box-shadow: #0000ff80 0 0 10px;
    `;
export const BG_Button2=Styled(BG_Button)<{bg:number, vidloading:number}>`
    pointer-events: ${(props)=>props.bg==2 || props.vidloading?'none':'auto'};
    background: url(${butonBG1});
    background-size: 200%;
    box-shadow: #42ff42b6 0 0 10px;
`;
export const BG_Button3=Styled(BG_Button)<{bg:number, vidloading:number}>`
    pointer-events: ${(props)=>props.bg==3 || props.vidloading?'none':'auto'};
    background: url(${butonBG2});
    background-size: 130%;
    box-shadow: #00c3ffb6 0 0 10px;
`;