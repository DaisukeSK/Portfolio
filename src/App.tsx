import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import About from './components/page/About.tsx'
import Contact from './components/page/Contact.tsx'
import Home from './components/page/Home.tsx'
import Works from './components/page/Works.tsx'

import Inquiry from './components/page/Inquiry.tsx'

export type Selected={

  prev:number,current:number
}


function App() {
  const [selected, setSelected] = useState<Selected>({prev:0,current:0})
  const [inquiry, setInquiry] = useState(false)

  console.log("pathname",window.location)
  console.log("true?",window.location.search=="?inquiry")
  // const [displayBlock, setDisplayBlock] = useState(0)
  // const [display, setDisplay] = useState([0,0])
  


  useEffect(()=>{

    if(window.location.search=="?inquiry"){
      setInquiry(true);
      // setSelected({prev:0,current:4})
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

    {inquiry &&
    <Inquiry></Inquiry>
    }
    {!inquiry &&
    <>
    <Header selected={selected} setSelected={setSelected}></Header>
    
    {/* <About style={{opacity:selected=='About'?1:0, trasition: 'all ease-in-out 2s'}}></About>
    <Contact style={{opacity:selected=='Contact'?1:0, trasition: 'all ease-in-out 2s'}}></Contact>
    <Home style={{opacity:selected=='Home'?1:0, trasition: 'all ease-in-out 2s'}}></Home>
    <Works style={{opacity:selected=='Works'?1:0, trasition: 'all ease-in-out 2s'}}></Works> */}
    <About selected={selected}></About>
    <Contact selected={selected}></Contact>
    <Home selected={selected}></Home>
    <Works selected={selected}></Works>

    {/* <Inquiry selected={selected}></Inquiry> */}
    
    </>
    }

      
    </>
  )
}

export default App
