import { useEffect } from 'react'
import { Main } from '../StyledComponents';
import pathName from '../../../public/me5-2-5.png';
// import G1_bg1 from '../../../public/van4.png';
// import G1_bg2 from '../../../public/van3.png';
// import G1_bg3 from '../../../public/bg2.png';
// import G2_bg1 from '../../../public/bg3.png';
// import G2_bg2 from '../../../public/bg5.png';
// import G2_bg3 from '../../../public/bg4.png';
// import G3_bg1 from '../../../public/bg8.png';
import { Selected } from '../../App';
import Animation from './Animation';

type Props = {
  selected:Selected
};

function Home({selected}:Props) {

  // const [innerH, setInnerH]=useState<number>(window.innerHeight)
  // const [animeState, setAnimeState]=useState<number>(0)
  // const [resetAnimation, setResetAnimation]=useState<boolean>(true)

  // let insert1:Array<JSX.Element>=[]
  // for(let i:number=0;i<13;i++){
  //   insert1.push(
  //   <rect x={i*10} y='0' height='100%' fill='#000055'>
  //     <animate attributeName="width" values="0;10" dur=".5s" fill='freeze' begin={`${13+i*0.1}s`} repeatCount="1"/>
  //   </rect>
  //   )
  // }

  // let insert2:Array<JSX.Element>=[]
  // for(let i:number=0;i<24;i++){
  //   insert2.push(
  //   <rect x='150' y={i*10} width='130' fill='#000055'>
  //     <animate attributeName="height" values="0;10" dur=".5s" fill='freeze' begin={`${13+i*0.05}s`} repeatCount="1"/>
  //   </rect>
  //   )
  // }

  // let insert3:Array<JSX.Element>=[]
  // for(let i:number=0;i<13;i++){
  //   insert3.push(
  //   <rect x={420-i*10} y='0' height='100%' fill='#000055'>
  //     <animate attributeName="width" values="0;10" dur=".5s" fill='freeze' begin={`${13+i*0.1}s`} repeatCount="1"/>
  //   </rect>
  //   )
  // }

  // let insert4=[]
  // for(let i=0; i<6; i++){
  //   insert4.push(
  //     <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
  //       <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${18+i*0.1}s`} dur='1.5s' repeatCount="1"/>
  //       <animate attributeName='opacity' values='0;1' begin={`${18+i*0.1}s`} dur='3s' repeatCount="1"/>
  //         Vancouver
  //     </text>
  //   )
  // }

  // let insert5=[]
  // for(let i=0; i<6; i++){
  //   insert5.push(
  //     <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
  //       <animate attributeName='x' values='80%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${18+i*0.1}s`} dur='1.5s' repeatCount="1"/>
  //       <animate attributeName='opacity' values='0;1' begin={`${18+i*0.1}s`} dur='3s' repeatCount="1"/>
  //         Vancouver
  //     </text>
  //   )
  // }

  useEffect(()=>{

    console.log('window.innerHeight',window.innerHeight)
    
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
  //     setResetAnimation(true)
  //     Count()
  //     console.log("selected=0",idArray.length)
  //   }else{
  //     while(idArray.length){
  //       clearTimeout(idArray.pop());
  //       console.log("idArray",idArray)
  //     }
  //     setResetAnimation(false)
  //     console.log("selected!=0",idArray.length)
  //   }
  // },[selected])
  // let innerH:number=window.innerHeight
  // window.onresize=()=>{
  //   // innerH=window.innerHeight
  //   setInnerH(window.innerHeight)
  // }

  return (
    <Main
      className='home'
      style={{height: '100vh'}}
      show={selected.current==0?1:0}
      direction={selected.current-selected.prev<0?1:0}
      selected={selected.current}
    >
      <div className='left'>
        {/* <div style={{position:'absolute', top:'70px',right:'0px'}}>{animeState}</div> */}
          <img src={pathName}/>
        
      </div>
      <div className='right'>
        <h1>Daisuke's portfolio</h1>
        <h2>-Full Stack Developer-</h2>
        <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>

{selected.current==0 && <Animation/>}
       
      </div>
    </Main>
  )
};

export default Home;