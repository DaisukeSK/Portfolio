import { useEffect, useState } from 'react'
import { AnimationDiv,G1,G2, G3 } from '../StyledComponents';
// import pathName from '../../../public/me5-2-5.png';
import G1_bg1 from '../../../public/van4.png';
import G1_bg2 from '../../../public/van3.png';
import G1_bg3 from '../../../public/bg2.png';
import G2_bg1 from '../../../public/bg3.png';
import G2_bg2 from '../../../public/bg5.png';
import G2_bg3 from '../../../public/bg4.png';
import G3_bg1 from '../../../public/bg8.png';
// import { AppContext } from '../../App';

function Animation() {

  const [animeState, setAnimeState]=useState<number>(0)
  // const { selected } = useContext(AppContext)
  // const [resetAnimation, setResetAnimation]=useState<boolean>(true)


  let insert1:Array<JSX.Element>=[]
  for(let i:number=0;i<13;i++){
    insert1.push(
    <rect x={i*10} y='0' width='10' height='240' fill='#000055'>
      <animate attributeName="width" values="10;0" dur=".5s" fill='freeze' begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert2:Array<JSX.Element>=[]
  for(let i:number=0;i<24;i++){
    insert2.push(
    <rect x='150' y={i*10} width='130' height='10' fill='#000055'>
      <animate attributeName="height" values="10;0" dur=".5s" fill='freeze' begin={`${13+i*0.05}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert3:Array<JSX.Element>=[]
  for(let i:number=0;i<13;i++){
    insert3.push(
    <rect x={420-i*10} y='0' width='10' height='240' fill='#000055'>
      <animate attributeName="width" values="10;0" dur=".5s" fill='freeze' begin={`${13+i*0.1}s`} repeatCount="1"/>
    </rect>
    )
  }

  let insert4=[]
  for(let i=0; i<6; i++){
    insert4.push(
      <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
        <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${18+i*0.1}s`} dur='1.5s' repeatCount="1"/>
        <animate attributeName='opacity' values='0;1' begin={`${18+i*0.1}s`} dur='3s' repeatCount="1"/>
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

  useEffect(()=>{

    [2,3,4,7,9,10,11,15,16,17,25,28.5,29.5,31].map((num:number)=>{
      setTimeout(()=>setAnimeState(num),num*1000)
    })
    
  },[])


  // let idArray:any=[];

  // const Count=()=>{
  //   [2,3,4,7,9,10,11,15,16,17,25,28.5,29.5,31].map((num:number)=>{
  //     const id=setTimeout(()=>setAnimeState(num),num*1000)
  //     idArray.push(id)
  //     console.log("id:",id)
  //     console.log("idArray",idArray)
  //   })
  // }

  // useEffect(()=>{
  //   if(selected.current==0){
  //     // setResetAnimation(true)
  //     Count()
  //     console.log("selected=0",idArray.length)
  //   }else{
  //     while(idArray.length){
  //       clearTimeout(idArray.pop());
  //       console.log("idArray",idArray)
  //     }
  //     idArray=[]
  //     // setResetAnimation(false)
  //     console.log("selected!=0",idArray.length)
  //   }
  // },[selected])

  return (
    

        <AnimationDiv anime={animeState}>

          <svg width='100%' height='100%'>

            <defs>

              <pattern id="g1_1" width="100%" height="100%">
                <image href={G1_bg1} y="0" height="100%">
                  <animate attributeName="x" values="-150;-50" dur="6s" begin='2s' repeatCount="1"/>
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

              <pattern id="g3_1" width="100%" height="100%">
                <image opacity='0' href={G3_bg1} y="110" width="450px">
                  <animate attributeName="x" values="0;-50" dur="8s" begin='23s' repeatCount="1"/>
                  <animate attributeName="opacity" values="0;1" dur="1s" fill='freeze' begin='23s' repeatCount="1"/>
                  <animate attributeName="opacity" values="1;0" dur="1s" fill='freeze' begin='30s' repeatCount="1"/>
                </image>
              </pattern>

              <clipPath id="g3_clip">
                <text x='50%' y='170' dominantBaseline="middle" textAnchor="middle" fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
                  Vancouver
                </text>
              </clipPath>

              <clipPath id="g2_clip1">
                {insert1}
              </clipPath>
              <clipPath id="g2_clip2">
                {insert2}
              </clipPath>
              <clipPath id="g2_clip3">
                {insert3}
              </clipPath>

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
              <rect className='g2_rect1' x='0' y='0' width='130' height='100%' fill='url(#g2_1)' clip-path='url(#g2_clip1)'/>
              <rect className='g2_rect2' x='150' y='0' width='130' height='100%' fill='url(#g2_2)' clip-path='url(#g2_clip2)'/>
              <rect className='g2_rect3' x='300' y='0' width='130' height='100%' fill='url(#g2_3)' clip-path='url(#g2_clip3)'/>
              {/* {insert1}{insert2}{insert3} */}
            </G2>

            <G3 anime={animeState}>
              <text className='g3_text1' x="50%" y="50" dominantBaseline="middle" textAnchor="middle" fill='url(#linearG)' fontFamily='Times' fontSize='45' fontWeight='bold' fontStyle='italic'>
                Based
              </text>

              <text className='g3_text2' x='50%' y='110' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='serif' fontSize='50' fontWeight='bold' fontStyle='italic'>
                in
              </text>

              <text className='g3_text3' y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='white' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
                <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin='18s' dur='1.5s' repeatCount="1"/>
                <animate attributeName='opacity' values='0;1' fill='freeze' begin='18s' dur='3s' repeatCount="1"/>
                <animate attributeName='opacity' values='1;0' fill='freeze' begin='22.2s' dur='1s' repeatCount="1"/>
                <animate attributeName='opacity' values='0;1' fill='freeze' begin='30.5s' dur='.5s' repeatCount="1"/>
                <animate attributeName='opacity' values='1;0' fill='freeze' begin='31s' dur='.5s' repeatCount="1"/>
                  Vancouver
              </text>

              <rect x='0' y='0' width='100%' height='200px' fill='url(#g3_1)' clip-path='url(#g3_clip)'/>
              
              {insert4}{insert5}
            </G3>

          </svg>

        </AnimationDiv>
  )
};

export default Animation;