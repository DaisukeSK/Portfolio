
import Styled from "styled-components";
import { css,keyframes } from "styled-components";

const timingFunc='cubic-bezier(0,1,.7,1)';

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

export const Main=Styled.main< { show: number,direction: number} >`
    position: absolute;
    top: 0;

    width: 100%;
    height: fit-content;
    min-height: 100vh;
    max-height: ${(props)=>props.show?css`fit-content`:css`100vh`};
    padding-top: 50px;

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
        // background: #000055;
        z-index: -1;
    }
`;

export const UnderLine=Styled.div< { position: number,testprop:number, still:number} >`
    position: relative;
    height: 32px;
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

    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        // background: linear-gradient(transparent, #ffffff55);
        background: ${(props)=>
            props.position==0?css`linear-gradient(transparent, #ffffff35)`:
            props.position==1?css`linear-gradient(transparent, #F2000054)`:
            props.position==2?css`linear-gradient(transparent, #00F22834)`:
            `linear-gradient(transparent, #F2F2003E)`
        };
        opacity: ${(props)=>props.still?css`1`:css`0`};
        transition: ${(props)=>props.still?css`all 1s ease-in-out`:css`all 0s`};
        

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
    
    export const LinkDiv=Styled.div<{onmouse:number, bg:string}>`
    //width:400px
    
    height: 250px;
    position: relative;
    border-radius: 5px;
    outline: 1px solid rgba(255, 255, 255, 0.3);
    overflow:hidden;

    &:before {
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        background-image:${(props)=>css`url(${props.bg})`};
        background-size: cover;
        background-position: center;
        z-index:-1;
    }

    .linkFlex {
        opacity:0;
        transition: ${(props)=>props.onmouse?css`all 0s ease-in`:css`all .5s ease-in`};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        // background:navy;
        display: flex;

        // .demo {
        //     border-right: 1px solid black;
        // }

        .demo, .github {

            width:fit-content;
            padding: 0 25px;
            // outline: 1px solid grey;

            a {
                // width: fit-content;
                text-decoration: none;
                svg {
                    height:80px;
                    // background: orange;
                    display: block;
                    margin: 0 auto;
                    path {
                        fill: black;
                    }
                }
                span {
                    opacity: 0;
                    display: block;
                    text-align:center;
                    color:#0000CD;
                }

                &:hover {
                    svg {
                        path {
                            fill: #0000CD;
                        }
                    }
                    span {
                        opacity: 1;
                    }
                }

            }
        }
    }

    &:hover {
        background: #ffffffbb;
        .linkFlex {
            opacity:1;
        }
    }
`

export const AnimationDiv=Styled.div<{anime:number}>`
    margin: 50px auto 0;
    width: 430px;
    height: ${(props)=>props.anime<31?css`240px`:css`0`};
    transition: all 3s ease-in-out;

    svg {
        overflow: visible;
    }
`;

export const G1=Styled.g<{anime:number}>`

opacity:${(props)=>(props.anime>=2 && props.anime<7)?1:0};
transition:all .5s ease-in-out;
    path {
        transition:all .5s ease-in-out;
    }
    .g1_path1 {
        opacity:${(props)=>props.anime>=2?1:0};
    }
    .g1_path2 {
        opacity:${(props)=>props.anime>=3?1:0};
        // opacity:1;
    }
    .g1_path3 {
        opacity:${(props)=>props.anime>=4?1:0};
        // opacity:1;
    }

`;

export const G2=Styled.g<{anime:number}>`

opacity:${(props)=>(props.anime>=9 && props.anime<15)?1:0};
// transition:all .5s ease-in-out;
    rect {
        // transition:all .5s ease-in-out;
    }
    .g2_rect1 {
        opacity:${(props)=>props.anime>=9?1:0};
    }
    .g2_rect2 {
        opacity:${(props)=>props.anime>=11?1:0};
    }
    .g2_rect3 {
        opacity:${(props)=>props.anime>=10?1:0};
    }

`;

export const G3=Styled.g<{anime:number}>`

opacity:${(props)=>props.anime<35?1:0};
// overflow: visible;

transition:all .5s ease-in-out;
.g3_text1, .g3_text2 {
    transition:all .5s ease-in-out;
}

.g3_text1 {
    opacity:${(props)=>(props.anime>=16 && props.anime<28.5)?1:0}
}
.g3_text2 {
    opacity:${(props)=>(props.anime>=17 && props.anime<29.5)?1:0}
}

.g3_text3 {
    fill:${(props)=>props.anime>=25?css`red`:css`white`}
}




`;