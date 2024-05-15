import { useState, useEffect, createContext } from 'react';
import Header from './components/LapTop/Header.tsx';
import About from './components/LapTop/Pages/About/About.tsx';
import Contact from './components/LapTop/Pages/Contact.tsx';
import Home from './components/LapTop/Pages/Home.tsx';
import Projects from './components/LapTop/Pages/Projects/Projects.tsx';
import Inquiry from './components/LapTop/Pages/Inquiry.tsx';
import ComingSoon from './components/LapTop/Pages/ComingSoon.tsx';

// import M_Header from './components/Mobile/Pages/M_Header.tsx';
// import M_SideMenu from './components/Mobile/Pages/M_SideMenu.tsx';
// import M_Main from './components/Mobile/Pages/M_Main.tsx';

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
    const [preparing, setPreparing] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    const [aside, setAside] = useState<boolean>(false)

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
        window.location.search=='?preparing' && setPreparing(true);
    },[]);

    window.onresize=()=>{
        setInnerWidth(window.innerWidth)
    }

    return (
        <AppContext.Provider value={{selected, setSelected, aside, setAside}}>
            {
                preparing? <ComingSoon/>
                :
                inquiry? <Inquiry/>
                :
                innerWidth>450?
                    <>
                        <Header/>
                        <Home/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </>
                :
                innerWidth<=450 &&
                    <>
                        <header className='headerForMobile'></header>
                        <main className='mainForMobile'>
                            <p>
                                Are you accessing my portfolio with your mobile phone?<br/>
                                I'm sorry, it is not ready for mobile devices yet.<br/>
                                Try with your laptop, thank you.
                            </p>
                        </main>
                        {/* <M_Header></M_Header>
                        <M_SideMenu></M_SideMenu>
                        <M_Main></M_Main> */}
                    </>
            }

        </AppContext.Provider>
    )
};

export default App;