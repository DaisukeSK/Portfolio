import { Main } from '../../StyledComponents';
// import pathName from '../../../../public/me5-2-5.png';
import pathName from '../../../../public/man2.png';
import { AppContext } from '../../../App';
// import Animation from './Animation';
import { useContext } from 'react';
import p1 from '../../../../public/test2-5.png'
import codingVideo from '../../../../public/codingClip.mp4'
import { useState, useEffect } from 'react';

// type Props = {
//     selected:Selected
// };

function Home() {

    const { selected } = useContext(AppContext)
    const [ BG, setBG ] = useState<number>(1)

    useEffect(()=>{
        setBG(1)
    },[selected])

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

            {BG==2 &&
                <div className='BG2'>
                    <video width='100%' autoPlay loop muted>
                        <source src={codingVideo} type='video/mp4'/>
                        <p>Your browser not supporting video</p>
                    </video>
                </div>
            }


            <div className='left'>

                <svg height="250" width="100%">
                    <defs>
                        <linearGradient id="grad1" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0" stopColor='#3939FFD4'></stop>
                            {/* <stop offset=".5" stopColor='#FFB1B1D6'></stop> */}
                            <stop offset="1" stopColor='#CB00CBC7'></stop>
                        </linearGradient>

                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0" stopColor='#420080E0'></stop>
                            {/* <stop offset=".5" stopColor='#FFB1B1D6'></stop> */}
                            <stop offset=".5" stopColor='transparent'></stop>
                            <stop offset="1" stopColor='#000080D6'></stop>
                        </linearGradient>

                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="50%">
                            <stop offset="0" stopColor='#8686FFBA'></stop>
                            {/* <stop offset=".7" stopColor='transparent'></stop> */}
                            <stop offset=".9" stopColor='transparent'></stop>
                            <stop offset="1" stopColor='transparent'></stop>
                            {/* <stop offset="1" stopColor='yellow'></stop> */}
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
                        <image href={p1} x='190' y="0" width="230px">
                        </image>
                    </pattern>

                    <text text-anchor="middle" x="50%" y="80%" font-size="3.7rem" font-family="Helvetica" fontWeight='750'>
                        <tspan fill="#ffffffcc" style={{textShadow:'#ffffff88 2px 2px 5px'}}>Hi, I'm </tspan>
                        <tspan fill='url(#pattern_1)' style={{
                            textShadow:`#CC108E 2px 2px 5px`
                            // textShadow:`navy 2px 2px 5px`
                            }}>Daisuke</tspan>
                        
                    </text>
                </svg>
                {/* <h1>Hi, I'm Daisuke.</h1> */}
                <h2>Full Stack Developer</h2>
                <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>
                {/* {selected.current==0 && <Animation/>} */}

                {/* <div className='buttonContainer'>
                    <button className='button1' onClick={()=>setBG(1)}></button>
                    <button className='button2' onClick={()=>setBG(2)}></button>
                    <button className='button3' onClick={()=>setBG(3)}></button>
                </div> */}
            </div>

        </Main>
    )
};

export default Home;