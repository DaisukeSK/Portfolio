
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

export const Main=Styled.main`
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
    // display: ${(props)=>props.block?css`block`:css`none`};

    

    

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

export const UnderLine=Styled.div`
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

export const HeaderRightChild=Styled.div`

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




///////////////////////////////////////////////////////////////////////////
export const Section=Styled.section`
    position:relative;

    left:${props=>props.aside? css`250px`:css`0`};
    transition: left .5s;
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const HamburgerDiv=Styled.div`
    position:absolute;
    top:15px;
    left:15px;
    width:35px;
    height:25px;
        div {
            position:absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            z-index:1;
        }
        svg {
            path {
                fill:  ${(props)=>props.textcolor ? css`white`: css`black`}
            }
        }
`;

export const Frame=Styled.div`
    background: rgba(200, 200, 200, 0.5);
    padding: 7px 0;
    border-radius: 5px;
    overflow: hidden;
    border: ${props=>props.textcolor? css`1px solid white;`:css`1px solid grey;`};
    box-sizing: border-box;
`;

export const HSLFrame=Styled(Frame)`
    margin-right: ${props=>props.aside? css`20px`:css`40px`};
    transition: margin-right .5s;
    padding-bottom: 15px;
`;

export const OutputFrame=Styled(Frame)`
    z-index: 1;//Need this to put the element in front of output_color element.
    .grid {
        display: grid;
        grid-template-columns: 75px 210px 15px;
        grid-template-rows: repeat(5, 22px);
        gap: 2px 0;
        // width: fit-content;
        margin: 10px 45px;
        align-items: center;
        
        input[type="text"]:focus {
            outline: none;
        }
        input[type="text"]::selection {
            background: none;
            
        }
        input[type="text"]::-moz-selection {
            background: none;
            
        }
        

    }
`;


export const Aside=Styled.aside`
    position: absolute;
    left:${props=>props.aside? css`0`:css`-500px`};
    top:0;
    height: 100vh;
    width:500px;
    background-color: #161616;
    z-index:1;
    transition: left .5s;

    &>div {
        position: relative;
        padding: 30px 0;
        box-sizing:border-box;

        .close {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 20px;
            height: 20px;
            svg {
                path,rect {
                    stroke: #717171;
                    stroke-width:2;
                    fill: none;
                }
            }
        }// .close
        
        .logo {
            margin: 0 auto;
            width: 80%;
            height: 150px;
            // background-color: #0F0F0F;
            border: 1px #242424 solid;

            img {
                width: 100%;
            }
            .presentedBy{
                color: white;
                text-align: center;
            }
        }
        &>h4 {
            text-align:center;
            margin: 20px auto 0;
            color: white;
        }
    }//div

    &>ul {
        display:flex;
        flex-wrap:wrap;
        justify-content: space-evenly;
        list-style:none;
        padding: 0;
        margin: 0;
        overflow:auto;
        
        &>li{
            margin: 7px 0;
            width: 150px;
            height:60px;
            padding-top:12px;
            box-sizing: border-box;
            border-radius:5px;
            &>div{
                width: fit-content;
                margin: 0 auto;
                font-weight: bold;
            }
        }

        /* width */
        &::-webkit-scrollbar {
        width: 8px;
        }
    
        /* Track */
        &::-webkit-scrollbar-track {
        background-color: #999999;
        }
    
        /* Handle */
        &::-webkit-scrollbar-thumb {
        background-color: #eeeeee;
        outline: none;

            &:hover {
                background-color: #ffffff;
                outline: 1px white solid;
            }
            &:active {
                background-color: #dddddd;
                outline: 1px white solid;
            }
        }
    }//ul
`;



// export const ToggleDiv=Styled.div`
//     position: absolute;
//     width: 48px;
//     height: 100%;
//     top: 0;
//     left: 0;
//     background-color: hsl(0, 0%, 30%);
//     border-radius: 7px;
//     // z-index: -1;

//     animation-duration: .3s;
//     animation-timing-function: ease-out;
//     animation-iteration-count:1;/*can be "infinite"*/
//     animation-fill-mode: both;
//     animation-name:${(props) => props.toggle? css`${toLeft}`: css`${toRight}`};
// `;

export const ToggleDiv=Styled.div`
    position: absolute;
    width: 48px;
    height: 100%;
    top: 0;

    left: ${(props) => props.toggle? css`0`: css`100%`};
    transform: ${(props) => props.toggle? css`none`: css`translateX(-100%);`};
    transition: all .3s ease-out;


    background-color: hsl(0, 0%, 30%);
    border-radius: 7px;
    // z-index: -1;

    // animation-duration: .3s;
    // animation-timing-function: ease-out;
    // animation-iteration-count:1;/*can be "infinite"*/
    // animation-fill-mode: both;
    // animation-name:${(props) => props.toggle? css`${toLeft}`: css`${toRight}`};
`;

export const InputNumber=Styled.input.attrs({type:"number"})`
    width: 40px;
    background: rgba(255, 255, 255, 0);
    outline: none;
    border: none;
    color:  ${(props)=>props.textcolor ? css`white`: css`black`}
`;

export const CN_Label=Styled.h4`
    margin: 0;
    text-align:center;
    color:  ${(props)=>props.textcolor ? css`white`: css`black`}
`;

export const CN_Label4HSL_HSV=Styled(CN_Label)`
    padding-top: 2px;
    z-index:1;
    color:  ${(props)=>props.toggle ? css`white`: css`#888888`};

`;

export const CN_Label4Output=Styled(CN_Label)`
    text-align:left;
`;

export const Hr=Styled.hr`
    border-bottom: none;
    border-top: ${props=>props.textcolor? css`1px solid white;`:css`1px solid grey;`};
`;


export const Label=Styled.label`
    color:  ${(props)=>props.textcolor ? css`white`: css`black`};
    font-size: 0.9rem;
    margin-left: auto;
    font-size: 97%;
`;

export const OutputText=Styled.input.attrs({type:"text", readOnly:true})`
    background: none;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 0.9rem;
    color:  ${(props)=>props.textcolor ? css`white`: css`black`}  
`;

export const ColorSpaceDiv=Styled.div`
    display: ${(props)=>props.toggle ? css`block`: css`none`};
    position: relative;
    width: 360px;
    height: 200px; 
    overflow: hidden;
    margin-bottom: 15px;
    background: ${(props)=>props.bg?css`${props.csbg[0]}`:css`${props.csbg[1]}`};
    
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: ${(props)=>props.bg?css`linear-gradient(white, rgba(0, 0, 0, 0),black)`:css`linear-gradient(rgba(0, 0, 0, 0),black)`};

    }
    img {
        position: absolute;
        top: ${(props)=>props.bg?css`${props.pointerposition.HSL_top}`:css`${props.pointerposition.HSV_top}`};
        left: ${(props)=>props.bg?css`${props.pointerposition.HSL_left}`:css`${props.pointerposition.HSV_left}`};
        
    }
    div {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
    }
`;

export const Range=Styled.div`
    position:relative;
    height: 15px;
    div, input{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 0;
    }
`;

export const Grid=Styled.div`
    display: grid;
    gap: 5px;
    margin: 7px auto;
    align-items: center;
    grid-template-columns: 40px 255px 40px;
    grid-template-rows: 20px;
`;

export const OpacityGrid=Styled(Grid)`
    grid-template-columns: 55px 150px 45px;
    margin: 7px auto;
    width: fit-content;
    div {
        input {
            background: linear-gradient(90deg, #00000000,#ffffff);
            border: ${(props)=>props.textcolor ? css`1px solid white`: css`1px solid #888888`};
        }
    }
`;

export const HGrid=Styled(Grid)`
    grid-template-columns: 40px 360px 40px;
`;

export const HSLGrid=Styled(HGrid)`
    display: ${(props)=>props.toggle ? css`grid`: css`none`};
`;

export const Hexainput=Styled.input`
    display: block;
    margin: 7px auto 0;
    width: 75px;
    border: none;
    border-bottom: ${(props)=>props.textcolor ? css`1px solid white`: css`1px solid black`};
    background: transparent;
    color: ${(props)=>props.textcolor ? css`white`: css`black`};

    &:focus {
        
        outline: none;
    }
`;

export const SVG=Styled.svg`
    path, rect{
        stroke: ${(props)=>props.textcolor ? css`white`: css`black`};
    }
`;

export const CopyBox=Styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    & > * {
        position: absolute;
        width: 12px;
        height: 12px;
        box-sizing: border-box;
        top: 0;
        left: 0;
        border-left: ${(props)=>props.textcolor ? css`1px white solid`: css`1px black solid`};
        border-top: ${(props)=>props.textcolor ? css`1px white solid`: css`1px black solid`};
    }
    & :first-child{
        top:auto;
        left:auto;
        bottom: 0;
        right: 0;
        border: ${(props)=>props.textcolor ? css`1px white solid`: css`1px black solid`};
    }

    &:hover {
        & :first-child{
            background:#FFFFFF77;
        }
    }

    &:active {
        top:1px;
        left:1px;
        & :first-child{
            background:white;
        }
    }
`;

export const TEST=Styled.div`
color:${(props)=>props.bultin[0] ? css`blue`: css`red`};
background-color:${(props)=>props.bultin[1]};

`

export const TEST2=Styled.div`
width:10px;
height:10px;
background-color:${(props)=>props.pro=="R"? css`blue`: css`red`};
`

export const HSL_RangeBG=Styled.div`
    background:${(props)=>props.bg=="LS"? css`${props.rangebg.LS}`: props.bg=="L"? css`${props.rangebg.L}`: props.bg=="VS"? css`${props.rangebg.VS}`:css`${props.rangebg.V}`};
`

export const RGB_RangeBG=Styled.div`
    background:${(props)=>props.bg=="R"? css`${props.rangebg.R}`: props.bg=="G"? css`${props.rangebg.G}`:css`${props.rangebg.B}`};

`

export const CMYK_RangeBG=Styled.div`
    background:${(props)=>props.bg=="C"? css`${props.rangebg.C}`: props.bg=="M"? css`${props.rangebg.M}`: props.bg=="Y"? css`${props.rangebg.Y}`:css`${props.rangebg.K}`};

`


export const OutputCN_Label=Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
span {
    color: ${(props)=>props.textcolor ? css`white`: css`black`};
    margin: 0 0 0 5px;
}

div {
    width: 10px;
    height: 10px;
    border: 1px solid grey;
    margin: 0 0 0 5px;


    background-color:${(props)=>props.bultin[1]};
    display: ${(props)=>props.bultin[1] ? css`block`: css`none`};
}

`
