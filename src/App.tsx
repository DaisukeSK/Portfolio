import { useState, useEffect, createContext } from 'react';
import Header from './components/LapTop/Header.tsx';
import About from './components/LapTop/Pages/About/About.tsx';
import Contact from './components/LapTop/Pages/Contact.tsx';
import Home from './components/LapTop/Pages/Home.tsx';
import Projects from './components/LapTop/Pages/Projects/Projects.tsx';
import Inquiry from './components/LapTop/Pages/Inquiry.tsx';
import ComingSoon from './components/LapTop/Pages/ComingSoon.tsx';

// import M_Header from './components/Mobile/M_Header.tsx';
// import M_SideMenu from './components/Mobile/M_SideMenu.tsx';
// import M_Main from './components/Mobile/M_Main.tsx';

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
                    <div className='laptop'>
                        <Header/>
                        <Home/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </div>
                :
                innerWidth<=450 &&
                    <div className='mobile'>
                        <main className='mainForMobile'>

                            <div className='flex'>

                                <svg width="40" height="40" viewBox="0 0 16 16">
                                    <path fill="#FFA500" d="M15.35 12.81 9 2.08a1.22 1.22 0 0 0-2 0L.65 12.81a1.14 1.14 0 0 0 1 1.69h12.66a1.14 1.14 0 0 0 1.04-1.69zm-13.66.55L8 2.64l6.31 10.72z"/>
                                    <path fill="#ffffff" d="M7.32 5.45h1.25V10H7.32z"/>
                                    <ellipse fill="#ffffff" cx="7.95" cy="11.9" rx=".67" ry=".7"/>
                                </svg>

                                <h1>Opps :(</h1>

                            </div>

                            <p>
                                Are you accessing my portfolio with your mobile phone?<br/>
                                I'm sorry, it is not ready for mobile devices yet.<br/>
                                Try with your laptop, thank you.
                            </p>
                        </main>
                        {/* <M_Header></M_Header>
                        <M_SideMenu></M_SideMenu>
                        <M_Main></M_Main> */}
                    </div>
            }

        </AppContext.Provider>
    )
};

export default App;