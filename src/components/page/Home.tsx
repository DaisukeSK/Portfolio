import { useEffect, useState } from 'react'
import { Main,G1,G2 } from '../StyledComponents';
import pathName from '../../../public/me2.png';
import G1_bg1 from '../../../public/van4.png';
import G1_bg2 from '../../../public/van3.png';
import G1_bg3 from '../../../public/bg2.png';
import G2_bg1 from '../../../public/bg3.png';
import G2_bg2 from '../../../public/bg4.png';
import G2_bg3 from '../../../public/bg5.png';
import { Selected } from '../../App';

type Props = {
  selected:Selected
};

function Home({selected}:Props) {

  const [animeState, setAnimeState]=useState<number>(0)

  let insert=[]
  for(let i=0;i<20;i++){
    insert.push(
    <rect x={190-i*10} y='0' height='100%' fill='#000055'>
      <animate attributeName="width" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert2=[]
  for(let i=0;i<20;i++){
    insert2.push(
    <rect x={250+i*10} y='0' height='100%' fill='#000055'>
      <animate attributeName="width" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert3=[]
  for(let i=0;i<14;i++){
    insert3.push(
    <rect x='80' y={50+i*10} width='290' fill='#000055'>
      <animate attributeName="height" values="0;10;10" dur="5s" keyTimes="0; 0.1; 1" begin={`${14+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }
  // <rect className='g2_rect3' x='80' y='50' width='290' height='140px' fill='url(#img6)'/>


  const setAnimation=()=>{
    setTimeout(()=>setAnimeState(2),2000)
    setTimeout(()=>setAnimeState(3),3000)
    setTimeout(()=>setAnimeState(4),4000)
    setTimeout(()=>setAnimeState(7),7000)
    setTimeout(()=>setAnimeState(9),9000)
    setTimeout(()=>setAnimeState(10),10000)
    setTimeout(()=>setAnimeState(11),11000)
    setTimeout(()=>setAnimeState(17),17000)

    // setTimeout(()=>{
    //   console.log("7")
    // },7000)
  }

  useEffect(()=>{
    setAnimation()

  },[])

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
      <div style={{position:'absolute', top:'100px',left:'10px'}}>{animeState}</div>
      <div className='left'>
        <img src={pathName}/>
      </div>
      <div className='right'>
        <h1>Daisuke's portfolio</h1>
        <h2>-Full Stuck Developer-</h2>
        <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>

        <div className='animationDiv'>

          <svg width='100%' height='100%'>

            <defs>
            <pattern id="g1_1" width="100%" height="100%">
                <image href={G1_bg1} x='-150' y="0" height="100%">
                  <animate attributeName="x" values="-150;-50" dur="7s" begin='2s' repeatCount="1"/>
                  {/* <animate attributeName="opacity" values="0;1" dur="1s" begin='2s' repeatCount="1"/> */}
                </image>
              </pattern>

              <pattern id="g1_2" width="100%" height="100%">
                <image href={G1_bg2} y="0" width='330'>
                  <animate attributeName="x" values="0;-50" dur="7s" begin='3s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g1_3" width="100%" height="100%">
                <image href={G1_bg3} x="0" width="290">
                  <animate attributeName="y" values="0;-50" dur="7s" begin='4s' repeatCount="1"/>
                </image>
              </pattern>

              <pattern id="g2_1" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg1} x="0" y="0" height="240px">
                  <animate attributeName="x" values="-100;0" dur="7s" repeatCount="indefinite"/>
                </image>
              </pattern>

              <pattern id="g2_2" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg2} x="200" y="0" height="240px">
                  <animate attributeName="x" values="200;100" dur="7s" repeatCount="indefinite"/>
                </image>
              </pattern>

              <pattern id="g2_3" width="100%" height="100%" patternUnits="userSpaceOnUse">
                <image href={G2_bg3} x="50" y="0" height="240px">
                  <animate attributeName="y" values="0;-50" dur="7s" repeatCount="indefinite"/>
                </image>
              </pattern>

            </defs>

            <G1 anime={animeState}>
                <path className='g1_path1' d='m0 0 h120 l80 110 a20,20 0 0 1 0,20 l-80 110 h-120 l80 -110 a20,20 0 0 0 0,-20' fill='url(#g1_1)'/>
                <path className='g1_path2' d='m160 0 h200 l74 102 h-200' fill='url(#g1_2)'/>
                <path className='g1_path3' d='m160 240 h200 l74 -102 h-200' fill='url(#g1_3)'/>
            </G1>

              <G2 anime={animeState}>


                <rect className='g2_rect1' x='0' y='0' width='200' height='100%' fill='url(#g2_1)'/>
                <rect className='g2_rect2' x='250' y='0' width='200' height='100%' fill='url(#g2_2)'/>
              {insert}{insert2}
                <rect className='g2_rect3' x='80' y='50' width='290' height='140px' fill='url(#g2_3)'/>
                {insert3}

              </G2>


            
          </svg>
        </div>
      </div>
    </Main>
  )
};

export default Home;