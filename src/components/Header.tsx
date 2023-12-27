import { useState } from 'react'
import { UnderLine, HeaderRightChild } from './StyledComponents'
import {Selected} from '../App'

type Props={

  inquiry:boolean,
  selected:Selected,
  setSelected:(state:Selected)=>void

}



function Header({inquiry,selected,setSelected}:Props) {

  const [width_headerRight, setWidth_headerRight] = useState(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)

  // let setTimeOut;

  // const ClickHandler=(event)=>{
    const ClickHandler=(event: React.MouseEvent<HTMLDivElement>): void=>{

    // clearTimeout(setTimeOut)
    console.log("clearTimeout")

    // console.log(event.target.innerText)
    // console.log(props)
    const Div= event.target as HTMLDivElement
    setSelected(

      // prevData=>({prev:prevData.current,current:event.target.innerText==='Home'?0:
      // event.target.innerText==='About'?1:
      // event.target.innerText==='Works'?2:3})

      {prev:selected.current,current:Div.innerText==='Home'?0:
      Div.innerText==='About'?1:
      Div.innerText==='Works'?2:3}
      
      
      
      )
  }

  // console.log("innerWidth",window.innerWidth*0.8*0.6/4)


  // useEffect(()=>{
  //   setWidth_headerRight(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)
  // },[window.innerWidth])
  window.onresize=()=>{
    setWidth_headerRight(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)
  }


  return (
    <>
      <header
      style={{
        display: inquiry?'none':'flex'
        
      }}
      >

      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',

        }}
        >{selected.prev},{selected.current}</div>

      {/* <div className='headerLeft'>Left</div> */}

      <div className='headerRight'>
        <UnderLine position={selected.current} testprop={width_headerRight}></UnderLine>
        <div className='headerRightFlex'>
          <HeaderRightChild disabled={selected.current==0?1:0} onClick={(e)=>ClickHandler(e)}>Home</HeaderRightChild>
          <HeaderRightChild disabled={selected.current==1?1:0} onClick={(e)=>ClickHandler(e)}>About</HeaderRightChild>
          <HeaderRightChild disabled={selected.current==2?1:0} onClick={(e)=>ClickHandler(e)}>Works</HeaderRightChild>
          <HeaderRightChild disabled={selected.current==3?1:0} onClick={(e)=>ClickHandler(e)}>Contact</HeaderRightChild>
        </div>
      </div>

      </header>
    </>
  )
}

export default Header
