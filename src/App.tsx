import { useState, useEffect, createContext } from 'react';
import Header from './components/LapTop/Header.tsx';
import About from './components/LapTop/About/About.tsx';
import Contact from './components/LapTop/Contact.tsx';
import Home from './components/LapTop/Home.tsx';
import Projects from './components/LapTop/Projects/Projects.tsx';
import Inquiry from './components/LapTop/Inquiry.tsx';
// import ComingSoon from './components/LapTop/Pages/ComingSoon.tsx';

// import M_Header from './components/Mobile/M_Header.tsx';
// import M_SideMenu from './components/Mobile/M_SideMenu.tsx';
import Mobile from './components/Mobile/Mobile.tsx';

export type Selected={
    prev:number,
    current:number
};

type Context = {
    selected: {prev:number, current:number},
    setSelected: React.Dispatch<React.SetStateAction<Selected>>
    aside: boolean,
    setAside: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext=createContext<Context>({} as Context)

function App() {
    
    const [selected, setSelected] = useState<Selected>({prev:0, current:0});
    const [inquiry, setInquiry] = useState<boolean>(false);
    // const [preparing, setPreparing] = useState<boolean>(false);
    // const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    const [aside, setAside] = useState<boolean>(false)

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
        // window.location.search=='?preparing' && setPreparing(true);
    },[]);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[selected]);

    // window.onresize=()=>{
    //     setInnerWidth(window.innerWidth)
    // }

    return (
        <AppContext.Provider value={{selected, setSelected, aside, setAside}}>
            {
                // preparing? <ComingSoon/>
                // :
                inquiry? <Inquiry/>
                :
                // innerWidth>450?

                <>
                    <div className='laptop'>
                        <Header/>
                        <Home/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </div>

                    {/* <div className='mobile'> */}
                        
                        {/* <M_Header></M_Header> */}
                        <Mobile></Mobile>
                    {/* </div> */}
                </>
            }

        </AppContext.Provider>
    )
};

export default App;