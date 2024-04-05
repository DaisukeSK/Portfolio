
import Styled from "styled-components";
import { css,keyframes } from "styled-components";

const timingFunc='cubic-bezier(0,1,.7,1)';


const color_01='#4455CF'
const color_02='#020B4E'
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
    // height: fit-content;
    min-height: 100vh;
    max-height: ${(props)=>props.show?css`fit-content`:css`100vh`};
    padding-top: 60px;

    overflow-y: ${(props)=>props.show?css`visible`:css`hidden`};

    // background-color:#000055;

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
        // background: #000055;
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
            // props.selected==0? css`linear-gradient(${color_01}, ${color_02})`:
            // props.selected==1? css`linear-gradient(210deg, #ffffff77, transparent)`:
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

export const UnderLine=Styled.div< { position: number,testprop:number, still:number} >`
    position: relative;
    height: 30px;
    width: ${(props)=>(props.testprop/4)*0.6}px;
    margin-left: ${(props)=>(props.testprop/4)*0.2}px;
    border-bottom: 2px solid #ffffff;
    position: absolute;
    bottom: -5px;
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

        // background: linear-gradient(transparent, #ffffff55);
        background: ${(props)=>
            props.position==0?css`linear-gradient(transparent, ${color_01}77)`:
            props.position==1?css`linear-gradient(transparent, ${color_12}77)`:
            props.position==2?css`linear-gradient(transparent, ${color_22}77)`:
            `linear-gradient(transparent, ${color_32}77)`
        };
        // background: linear-gradient(transparent, #ffffff55);
        opacity: ${(props)=>props.still?css`1`:css`0`};
        transition: ${(props)=>props.still?css`all 2s ease-in-out`:css`all 0s`};
        z-index: -1;
        

    }
`;

export const HeaderRightChild=Styled.div<{disabled:number}>`
    pointer-events: ${(props)=>props.disabled?css`none`:css`auto`};
    width: 100px;
    // font-weight: bold;
    text-align: center;
    border-radius: 7px;
    padding: 5px;
    box-sizing: border-box;
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
    

`

export const AnimationDiv=Styled.div<{anime:number}>`
    margin: 50px auto 0;
    width: 430px;
    height: ${(props)=>props.anime<30?css`240px`:css`0`};
    transition: all 3s ease-in-out;

    svg {
        overflow: visible;
    }
`;

export const G1=Styled.g<{anime:number}>`

opacity:${(props)=>(props.anime>=1 && props.anime<6)?1:0};
transition:all .5s ease-in-out;
    path {
        transition:all .5s ease-in-out;
    }
    .g1_path1 {
        opacity:${(props)=>props.anime>=1?1:0};
    }
    .g1_path2 {
        opacity:${(props)=>props.anime>=2?1:0};
        // opacity:1;
    }
    .g1_path3 {
        opacity:${(props)=>props.anime>=3?1:0};
        // opacity:1;
    }

`;

export const G2=Styled.g<{anime:number}>`

opacity:${(props)=>(props.anime>=8 && props.anime<14)?1:0};
// transition:all .5s ease-in-out;
    rect {
        // transition:all .5s ease-in-out;
    }
    .g2_rect1 {
        opacity:${(props)=>props.anime>=8?1:0};
    }
    .g2_rect2 {
        opacity:${(props)=>props.anime>=10?1:0};
    }
    .g2_rect3 {
        opacity:${(props)=>props.anime>=9?1:0};
    }

`;

export const G3=Styled.g<{anime:number}>`

opacity:${(props)=>props.anime<34?1:0};
// overflow: visible;

transition:all .5s ease-in-out;
.g3_text1, .g3_text2 {
    transition:all .5s ease-in-out;
}

.g3_text1 {
    opacity:${(props)=>(props.anime>=15 && props.anime<27.5)?1:0}
}
.g3_text2 {
    opacity:${(props)=>(props.anime>=16 && props.anime<28.5)?1:0}
}

.g3_text3 {
    fill:${(props)=>props.anime>=24?css`red`:css`white`}
}




`;

export const Toggle=Styled.div<{teamP:boolean}>`
    position: relative;
    width: fit-content;
    margin: 30px auto;
    padding: 10px 30px;
    padding-left: 40px;
    background-color: #0050FF3E;
    box-shadow: #002E93C2 2px 2px 7px;
    svg {
        position: absolute;
        top: ${(props)=>props.teamP?css`35px`:`13px`};
        left: 10px;
        transition: top .3s ease-out;
    }
    .individual, .team {
        cursor: pointer;
        transition: color .3s ease-out;
        text-align: center;
        
    }
    .individual {
        color: ${(props)=>props.teamP?css`#ffffff77`:css`#ffffff`};
        pointer-events: ${(props)=>!props.teamP && css`none`};
    }
    .team {
        color: ${(props)=>props.teamP?css`#ffffff`:css`#ffffff77`};
        pointer-events: ${(props)=>props.teamP && css`none`};
    }
`;