import { Main, VideoDiv, BG_Button1, BG_Button2, BG_Button3 } from '../../StyledComponents';
// import pathName from '../../../../public/me5-2-5.png';
import pathName from '../../../../public/man2.png';
import { AppContext } from '../../../App';
// import Animation from './Animation';
import { useContext } from 'react';
// import p1 from '../../../../public/test2-5.png'
import textBG1 from '../../../../public/textBG1.png'
import textBG2 from '../../../../public/textBG2.png'
import textBG3 from '../../../../public/textBG3.png'

import bgClip1 from '../../../../public/bgClip1.mp4';
import bgClip2 from '../../../../public/bgClip2.mp4';

import poster from '../../../../public/black.png'
import { useState, useEffect } from 'react';

// type Props = {
//     selected:Selected
// };

function Home() {

    const { selected } = useContext(AppContext)
    const [ BG, setBG ] = useState<number>(1)

    // const [ count, setCount ] = useState<number>(0)

    const [ showButton, setShowButton ] = useState<boolean>(false)

    // const animateRef=useRef(null)

    const imgHref=BG==1?textBG1:BG==2?textBG2:textBG3
    const textShadow=BG==1?'#CC108E':BG==2?'#00FF00B8':'#5050FF'

    const gradient_1_0=BG==1?'#3939FFD4':BG==2?'#FCFF8133':'#0EC3FF55';
    const gradient_1_1=BG==1?'#CB00CBC7':BG==2?'#004F1DCC':'#00003CC2';

    const gradient_3_0=BG==1?'#8686FFBA':BG==2?'#ffffff77':'#ffffff55';

    setTimeout(()=>{
        setShowButton(false)
    },3000)

    useEffect(()=>{
        setBG(1)
    },[selected])

    // useEffect(()=>{
    // },[BG])

    const SVG=
        <svg width='16' height='5'>
            <path d='m0,5 h16 l-8,-5z' fill='#ffffff77'/>
        </svg>

    return (
        
        <Main
            className='home'
            style={{height: '100vh',overflow:'hidden'}}
            show={selected.current==0?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            {/* <svg width='100%' height='100%' style={{position:'absolute',top:'0',left:'0'}}>
                <rect x="100" y='100' width='200' height='50' fill='#ffffff1E' filter='blur(2px)'></rect>
            </svg> */}

            {/* <div style={{position:'absolute',top:100,left:10}}>Count: {count}</div> */}

            {/* {BG!==1 && */}
                <VideoDiv BG={BG}>
                    {BG==2 &&
                        <video width='100%' autoPlay loop muted poster={poster}>
                            <source src={bgClip1} type='video/mp4'/>
                            <p>Your browser not supporting video</p>
                        </video>
                    }
                    {BG==3 &&
                        <video width='100%' autoPlay loop muted poster={poster}>
                            <source src={bgClip2} type='video/mp4'/>
                            <p>Your browser not supporting video</p>
                        </video>
                    }
                </VideoDiv>
            {/* } */}
            

            <div className='left'>

                <svg height="250" width="100%">
                    <defs>
                        <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="100%">
                            
                            <stop offset="0" stopColor={gradient_1_0}></stop>
                            <stop offset="1" stopColor={gradient_1_1}></stop>
                            
                        </linearGradient>

                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            {/* <stop offset="0" stopColor='#420080E0'></stop>
                            <stop offset=".5" stopColor='transparent'></stop>
                            <stop offset="1" stopColor='#000080D6'></stop> */}

                            <stop offset="0" stopColor={BG==1?'#420080E0':'transparent'}></stop>
                            <stop offset=".5" stopColor='transparent'></stop>
                            <stop offset="1" stopColor={BG==1?'#000080D6':'transparent'}></stop>
                        </linearGradient>

                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="50%">
                            <stop offset="0" stopColor={gradient_3_0}></stop>
                            
                            <stop offset=".9" stopColor='transparent'></stop>
                            <stop offset="1" stopColor='transparent'></stop>
                        </linearGradient>

                        <pattern id="pattern1" width="100%" height="100%">
                            <image href={pathName} x='10%' y="0" width="80%">
                            </image>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" rx="15" fill='url(#grad1)' transform='skewY(-20)'></rect>
                    <rect x="0" y="0" width="100%" height="100%" rx="15" fill='url(#grad2)' transform='skewY(-20)'></rect>
                    <rect x="0" y="0" width="150%" height="100%" rx="15" fill='url(#grad3)' transform='skewY(20)'></rect>
                    <path d='m0 250 l300 -109.19 v-250 h-300' fill='url(#pattern1)'></path>
                </svg>
                {/* <img src={pathName}/> */}
            </div>

            <div className='right'>
                {/* <h1>Daisuke's portfolio</h1> */}
                <svg height='70' style={{overflow:'visible'}}>

                    <pattern id="pattern_1" width="100%" height="100%">
                        <image href={imgHref} x='190' y="0" width="230px">
                            <animate attributeName="opacity" dur={"3s"} values="0;1" repeatCount='1'/>
                        </image>
                    </pattern>

                    <text text-anchor="middle" x="50%" y="80%" font-size="3.7rem" font-family="Helvetica" fontWeight='750'>
                        <tspan fill="#ffffffcc" style={{textShadow:'#ffffff88 2px 2px 5px'}}>Hi, I'm </tspan>
                        <tspan fill='url(#pattern_1)' style={{textShadow:`${textShadow} 3px 3px 5px`}}>Daisuke</tspan>
                    </text>

                </svg>
                {/* <h1>Hi, I'm Daisuke.</h1> */}
                <h2>Full Stack Developer</h2>
                <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>
                {/* {selected.current==0 && <Animation/>} */}

                
                {showButton &&
                
                    <div className='buttonContainer' style={{opacity:showButton?1:0}}>
                        <div className='BGbuttonDiv'>
                            <BG_Button1 BG={BG} onClick={()=>setBG(1)}/>
                            {BG==1 && SVG}
                        </div>
                        <div className='BGbuttonDiv'>
                            <BG_Button2 BG={BG} onClick={()=>setBG(2)}/>
                            {BG==2 && SVG}
                        </div>
                        <div className='BGbuttonDiv'>
                            <BG_Button3 BG={BG} onClick={()=>setBG(3)}/>
                            {BG==3 && SVG}
                        </div>
                    </div>
                }

            </div>

        </Main>
    )
};

export default Home;