import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import About from './components/page/About.tsx';
import Contact from './components/page/Contact.tsx';
import Home from './components/page/Home.tsx';
import Works from './components/page/Works.tsx';
import Inquiry from './components/page/Inquiry.tsx';
import ComingSoon from './components/page/ComingSoon.tsx';

export type Selected={
  prev:number,
  current:number
};

function App() {
  const [selected, setSelected] = useState<Selected>({prev:0, current:0});
  const [inquiry, setInquiry] = useState<boolean>(false);
  const [preparing, setPreparing] = useState<boolean>(false);

  useEffect(()=>{
    window.location.search=='?inquiry' && setInquiry(true);
  },[]);

  useEffect(()=>{
    window.location.search=='?preparing' && setPreparing(true);
    console.log("preparing running")
  },[]);

  return (
    <>
      {preparing && <ComingSoon/>}
      {inquiry && <Inquiry/>}

      {(!inquiry && !preparing) &&
        <>
          <Header selected={selected} setSelected={setSelected}></Header>
          <About selected={selected}></About>
          <Contact selected={selected}></Contact>
          <Home selected={selected}></Home>
          <Works selected={selected}></Works>
        </>
      }
    </>
  )
};

export default App;