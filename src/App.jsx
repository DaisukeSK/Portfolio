import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import About from './components/page/About.jsx'
import Contact from './components/page/Contact.jsx'
import Home from './components/page/Home.jsx'
import Works from './components/page/Works.jsx'
import Inquiry from './components/page/Inquiry.jsx'


function App() {
  const [selected, setSelected] = useState({prev:0,current:0})
  const [inquiry, setInquiry] = useState(false)

  console.log("pathname",window.location)
  console.log("true?",window.location.search=="?inquiry")
  // const [displayBlock, setDisplayBlock] = useState(0)
  // const [display, setDisplay] = useState([0,0])
  


  useEffect(()=>{

    if(window.location.search=="?inquiry"){
      setInquiry(true);
      setSelected({prev:0,current:4})
    }
  },[])

  // useEffect(()=>{

  //   const temp=display[0]

  //   setDisplay([selected.current,temp])
  //   setTimeout(()=>{
  //     setDisplay([selected.current,selected.current])
  //   },1000)

  // },[selected])


  console.log("arr")


  // useEffect(()=>{

  //   console.log("display",display)
  // },[display])



  return (
    <>
    <Header inquiry={inquiry} select={selected} selected={setSelected} state={selected}></Header>
    
    {/* <About style={{opacity:selected=='About'?1:0, trasition: 'all ease-in-out 2s'}}></About>
    <Contact style={{opacity:selected=='Contact'?1:0, trasition: 'all ease-in-out 2s'}}></Contact>
    <Home style={{opacity:selected=='Home'?1:0, trasition: 'all ease-in-out 2s'}}></Home>
    <Works style={{opacity:selected=='Works'?1:0, trasition: 'all ease-in-out 2s'}}></Works> */}
    <About selected={selected}></About>
    <Contact selected={selected}></Contact>
    <Home selected={selected}></Home>
    <Works selected={selected}></Works>

    <Inquiry selected={selected}></Inquiry>

      
    </>
  )
}

export default App
