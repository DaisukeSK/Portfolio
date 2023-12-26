import { useState, useEffect } from 'react'
import { UnderLine, HeaderRightChild } from './StyledComponents'

function Header(props) {
  const [count, setCount] = useState('red')
  const [width_headerRight, setWidth_headerRight] = useState(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)

  // let setTimeOut;

  const ClickHandler=(event)=>{

    // clearTimeout(setTimeOut)
    console.log("clearTimeout")

    // console.log(event.target.innerText)
    // console.log(props)
    props.selected(

      prevData=>({prev:prevData.current,current:event.target.innerText==='Home'?0:
      event.target.innerText==='About'?1:
      event.target.innerText==='Works'?2:3})
      
      
      
      )
  }

  // console.log("innerWidth",window.innerWidth*0.8*0.6/4)


  // useEffect(()=>{
  //   setWidth_headerRight(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)
  // },[window.innerWidth])
  window.onresize=()=>{
    setWidth_headerRight(window.innerWidth*0.48>=600? 600:window.innerWidth*0.48)
  }


  //////////////////// Exp ////////////////////
  
  // useEffect(()=>{

  //     const temp=props.display[0]
  
  //     props.setDisplay([props.select.current,temp])
  //     setTimeOut=setTimeout(()=>{
  //       props.setDisplay([props.select.current,props.select.current])
  //     },1000)
  
  //   },[props.select])
  //////////////////// Exp ////////////////////

  return (
    <>
      <header
      style={{
        display: props.inquiry?'none':'flex'
        
      }}
      >

      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',

        }}
        >{props.state.prev},{props.state.current}</div>

      {/* <div className='headerLeft'>Left</div> */}

      <div className='headerRight'>
        <UnderLine position={props.state.current} testprop={width_headerRight}></UnderLine>
        <div className='headerRightFlex'>
          <HeaderRightChild disabled={props.state.current==0?1:0} onClick={(e)=>ClickHandler(e)}>Home</HeaderRightChild>
          <HeaderRightChild disabled={props.state.current==1?1:0} onClick={(e)=>ClickHandler(e)}>About</HeaderRightChild>
          <HeaderRightChild disabled={props.state.current==2?1:0} onClick={(e)=>ClickHandler(e)}>Works</HeaderRightChild>
          <HeaderRightChild disabled={props.state.current==3?1:0} onClick={(e)=>ClickHandler(e)}>Contact</HeaderRightChild>
        </div>
      </div>

      </header>
    </>
  )
}

export default Header
