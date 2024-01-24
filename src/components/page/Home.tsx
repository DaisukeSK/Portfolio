import { useEffect, useState } from 'react'
import { Main,AnimationDiv,G1,G2, G3 } from '../StyledComponents';
import pathName from '../../../public/me2.png';
import G1_bg1 from '../../../public/van4.png';
import G1_bg2 from '../../../public/van3.png';
import G1_bg3 from '../../../public/bg2.png';
import G2_bg1 from '../../../public/bg3.png';
import G2_bg2 from '../../../public/bg5.png';
import G2_bg3 from '../../../public/bg4.png';
import { Selected } from '../../App';

type Props = {
  selected:Selected
};

function Home({selected}:Props) {

  const [animeState, setAnimeState]=useState<number>(0)

  let insert1:Array<JSX.Element>=[]
  for(let i:number=0;i<13;i++){
    insert1.push(
    <rect x={i*10} y='0' height='100%' fill='#000055'>
      <animate attributeName="width" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert2:Array<JSX.Element>=[]
  for(let i:number=0;i<24;i++){
    insert2.push(
    <rect x='150' y={i*10} width='130' fill='#000055'>
      <animate attributeName="height" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${13+i*0.05}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert3:Array<JSX.Element>=[]
  for(let i:number=0;i<13;i++){
    insert3.push(
    <rect x={420-i*10} y='0' height='100%' fill='#000055'>
      <animate attributeName="width" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert4=[]
  for(let i=0; i<6; i++){
    insert4.push(
      <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
        <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${18+i*0.1}s`} dur='1.5s' repeatCount="1"/>
        <animate attributeName='opacity' values='0;1' fill={i==0?'freeze':'remove'} begin={`${18+i*0.1}s`} dur='3s' repeatCount="1"/>
          Vancouver
      </text>
    )
  }

  let insert5=[]
  for(let i=0; i<6; i++){
    insert5.push(
      <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
        <animate attributeName='x' values='80%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${18+i*0.1}s`} dur='1.5s' repeatCount="1"/>
        <animate attributeName='opacity' values='0;1' begin={`${18+i*0.1}s`} dur='3s' repeatCount="1"/>
          Vancouver
      </text>
    )
  }
  // <rect className='g2_rect3' x='80' y='50' width='290' height='140px' fill='url(#img6)'/>


  const setAnimation=():void=>{
    // setTimeout(()=>setAnimeState(2),2000)
    // setTimeout(()=>setAnimeState(3),3000)
    // setTimeout(()=>setAnimeState(4),4000)
    // setTimeout(()=>setAnimeState(7),7000)
    // setTimeout(()=>setAnimeState(9),9000)
    // setTimeout(()=>setAnimeState(10),10000)
    // setTimeout(()=>setAnimeState(11),11000)
    // setTimeout(()=>setAnimeState(15),15000)
    [2,3,4,7,9,10,11,15,16,27].map((num:number)=>{
      setTimeout(()=>setAnimeState(num),num*1000)
    })

    // setTimeout(()=>setAnimeState(0),27000)

    // setTimeout(()=>{
    //   console.log("7")
    // },7000)
  }

  useEffect(()=>{
    if(animeState==0){
      // document.querySelectorAll('animate').forEach((ani:SVGAnimateElement)=>{
      //   const sec:number=+ani.getAttribute('begin')!.split('s')[0]
      //   ani.beginElementAt(sec)
      // })

      setAnimation()
    }
  },[animeState])

  // useEffect(()=>{

  //   console.log("animeState",animeState)
  // },[animeState])


  return (
    <Main
      className='home'
      style={{paddingTop: 0}}
      show={selected.current==0?1:0}
      direction={selected.current-selected.prev<0?1:0}
      aa={selected.current==0 || selected.prev==0? 1:0}
    >
      <div className='left'>
        {/* <div style={{position:'absolute', top:'70px',right:'0px'}}>{animeState}</div> */}
        <img src={pathName}/>
      </div>
      <div className='right'>
        <h1>Daisuke's portfolio</h1>
        <h2>-Full Stuck Developer-</h2>
        <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>

        <AnimationDiv anime={animeState}>

          <svg width='100%' height='100%'>

            <defs>
              <pattern id="g1_1" width="100%" height="100%">
                <image href={G1_bg1} y="0" height="100%">
                  
                  
                  <animate attributeName="x" values="-150;-50" dur="6s" begin='2s' repeatCount="1"/>
                  
                  {/* <animate attributeName="opacity" values="0;1" dur="1s" begin='2s' repeatCount="1"/> */}
                </image>
              </pattern>

              <pattern id="g1_2" width="100%" height="100%">
                <image href={G1_bg2} y="0" width='330'>
                  
                  <animate attributeName="x" values="0;-50" dur="5s" begin='3s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g1_3" width="100%" height="100%">
                <image href={G1_bg3} x="0" width="290">
                  <animate attributeName="y" values="0;-50" dur="4s" begin='4s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g2_1" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg1} y="0" height="240px">
                  <animate attributeName="x" values="-100;0" dur="6s" begin='9s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g2_2" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg2} x="0" height="340px">
                  <animate attributeName="y" values="0;-100" dur="6s" begin='9s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g2_3" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg3} y="0" height="240px">
                  <animate attributeName="x" values="200;100" dur="6s" begin='9s' repeatCount="1"/>
                </image>
              </pattern>

              <linearGradient id="linearG" x1="0%" y1="0%" x2="110%" y2="22%">
                <stop stopColor='white'>
                <animate attributeName="offset" dur="1s" values="0;1" fill='freeze' begin='16s' repeatCount="1" />
                </stop>
                <stop stopColor='#000055'>
                  <animate attributeName="offset" dur="1s" values="0;1" fill='freeze' begin='16s' repeatCount="1" />
                </stop>
                <stop stopColor='#000055' offset="1"/>
              </linearGradient>

            </defs>

            <G1 anime={animeState}>
                <path className='g1_path1' d='m0 0 h120 l80 110 a20,20 0 0 1 0,20 l-80 110 h-120 l80 -110 a20,20 0 0 0 0,-20' fill='url(#g1_1)'/>
                <path className='g1_path2' d='m160 0 h200 l74 102 h-200' fill='url(#g1_2)'/>
                <path className='g1_path3' d='m160 240 h200 l74 -102 h-200' fill='url(#g1_3)'/>
            </G1>

              <G2 anime={animeState}>


                <rect className='g2_rect1' x='0' y='0' width='130' height='100%' fill='url(#g2_1)'/>
                <rect className='g2_rect2' x='150' y='0' width='130' height='100%' fill='url(#g2_2)'/>
                <rect className='g2_rect3' x='300' y='0' width='130' height='100%' fill='url(#g2_3)'/>
              {insert1}{insert2}
                {insert3}

              </G2>

              <G3 anime={animeState}>
                
              <text x="50%" y="50" dominantBaseline="middle" textAnchor="middle" fill='url(#linearG)' fontFamily='Times' fontSize='45' fontWeight='bold' fontStyle='italic'>
                  Based
                </text>

                <></>
                <text x='50%' y='110' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='serif' fontSize='50' fontWeight='bold' fontStyle='italic'>
                  <animate attributeName='opacity' values='0;1' fill='freeze' dur='1s' begin='17s' repeatCount="1"/>
                  in
                </text>
                {insert4}{insert5}

                

              </G3>
          </svg>
        </AnimationDiv>
      </div>
    </Main>
  )
};

export default Home;