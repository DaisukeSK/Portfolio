import { Main, VideoDiv, BG_Button1, BG_Button2, BG_Button3 } from '../StyledComponents';
import { AppContext } from '../../App';
import { useContext, useState, useEffect } from 'react';

import pathName from '../../../public/man2.png';

import textBG1 from '../../../public/textBG1.png'
import textBG2 from '../../../public/textBG2.png'
import textBG3 from '../../../public/textBG3.png'

import bgClip1 from '../../../public/bgClip1.mp4';
import bgClip2 from '../../../public/bgClip2.mp4';

import poster from '../../../public/black.png'

function Home() {

    const { selected } = useContext(AppContext)
    const [ BG, setBG ] = useState<number>(1)
    const [ showButton, setShowButton ] = useState<boolean>(false)

    const [ vidLoading, setVidLoading ] = useState<boolean>(true)

    const imgHref:string = BG==1?textBG1:BG==2?textBG2:textBG3
    const textShadow:string = BG==1?'#CC108E':BG==2?'#00FF00B8':'#5050FF'

    const gradient_1_0:string = BG==1?'#3939FFD4':BG==2?'#FCFF8133':'#0EC3FF55';
    const gradient_1_1:string = BG==1?'#CB00CBC7':BG==2?'#004F1DCC':'#00003CC2';

    const gradient_3_0:string = BG==1?'#8686FFBA':BG==2?'#ffffff77':'#ffffff55';

    setTimeout(()=>{
        setShowButton(true)
        setVidLoading(false)
    },3000)

    useEffect(()=>{
        setBG(1)
    },[selected])

    const SVG: JSX.Element =
        <svg width='16' height='5'>
            <path d='m0,5 h16 l-8,-5z' fill='#ffffff77'/>
        </svg>

    return (
        <Main
            className='home'
            show={selected.current==0?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >

            {/* <div style={{position:'absolute',top:'100px',left:'20px'}}>{vidLoading?'True':'False'}</div> */}
            <VideoDiv bg={BG} vidloading={vidLoading?1:0}>
                {/* {BG==2 && */}
                {/* }
                {BG==3 && */}
                
                    {(vidLoading || BG==2) &&
                    // <div style={{position:'absolute',top:'120px',left:'20px'}}>Vid2 shown</div>
                        <video width='100%' autoPlay loop muted poster={poster}>
                            <source src={bgClip1} type='video/mp4'/>
                            <p>Your browser not supporting video</p>
                        </video>
                    }
                    {(vidLoading || BG==3) &&
                        <video width='100%' autoPlay loop muted poster={poster}>
                            <source src={bgClip2} type='video/mp4'/>
                            <p>Your browser not supporting video</p>
                        </video>
                    }
                
                
                
                
                {/* } */}
            </VideoDiv>

            <div className='left'>

                <svg height="250" width="100%">
                    <defs>
                        <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0" stopColor={gradient_1_0}/>
                            <stop offset="1" stopColor={gradient_1_1}/>
                        </linearGradient>

                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0" stopColor={BG==1?'#420080E0':'transparent'}/>
                            <stop offset=".5" stopColor='transparent'/>
                            <stop offset="1" stopColor={BG==1?'#000080D6':'transparent'}/>
                        </linearGradient>

                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="50%">
                            <stop offset="0" stopColor={gradient_3_0}/>
                            <stop offset=".9" stopColor='transparent'/>
                            <stop offset="1" stopColor='transparent'/>
                        </linearGradient>

                        <pattern id="pattern_1" width="100%" height="100%">
                            <image href={pathName} x='10%' y="0" width="80%"/>
                        </pattern>
                    </defs>

                    <rect x="0" y="0" width="100%" height="100%" rx="15" fill='url(#grad1)' transform='skewY(-20)'/>
                    <rect x="0" y="0" width="100%" height="100%" rx="15" fill='url(#grad2)' transform='skewY(-20)'/>
                    <rect x="0" y="0" width="150%" height="100%" rx="15" fill='url(#grad3)' transform='skewY(20)'/>
                    <path d='m0 250 l300 -109.19 v-250 h-300' fill='url(#pattern_1)'/>
                </svg>

            </div>

            <div className='right'>

                <svg height='70' style={{overflow:'visible'}}>
                    <pattern id="pattern_2" width="100%" height="100%">
                        <image href={imgHref} x='190' y="0" width="230px"/>
                    </pattern>

                    <text textAnchor="middle" x="50%" y="80%" fontSize="3.7rem" fontFamily="Helvetica" fontWeight='750'>
                        <tspan fill="#ffffffcc" style={{textShadow:'#ffffff88 2px 2px 5px'}}>Hi, I'm </tspan>
                        <tspan fill='url(#pattern_2)' style={{textShadow:`${textShadow} 3px 3px 5px`}}>Daisuke</tspan>
                    </text>
                </svg>

                <h2>Full Stack Developer</h2>
                <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>
                
                {showButton &&
                
                    <div className='buttonContainer' style={{opacity:showButton?1:0}}>
                        <div className='BGbuttonDiv'>
                            <BG_Button1 bg={BG} onClick={()=>setBG(1)}/>
                            {BG==1 && SVG}
                        </div>
                        <div className='BGbuttonDiv'>
                            <BG_Button2 bg={BG} onClick={()=>setBG(2)}/>
                            {BG==2 && SVG}
                        </div>
                        <div className='BGbuttonDiv'>
                            <BG_Button3 bg={BG} onClick={()=>setBG(3)}/>
                            {BG==3 && SVG}
                        </div>
                    </div>
                }
            </div>

        </Main>
    )
};

export default Home;