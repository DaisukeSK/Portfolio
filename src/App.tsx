import { useState, useEffect, createContext } from 'react';
import Header from './components/Header.tsx';
import About from './components/page/About/About.tsx';
import Contact from './components/page/Contact.tsx';
import Home from './components/page/Home.tsx';
import Projects from './components/page/Projects/Projects.tsx';
import Inquiry from './components/page/Inquiry.tsx';
import ComingSoon from './components/page/ComingSoon.tsx';

export type Selected={
    prev:number,
    current:number
};

type Context = {
    selected: {prev:number, current:number},
    setSelected: React.Dispatch<React.SetStateAction<Selected>>
}

export const AppContext=createContext<Context>({} as Context)

function App() {
    
    const [selected, setSelected] = useState<Selected>({prev:0, current:0});
    const [inquiry, setInquiry] = useState<boolean>(false);
    const [preparing, setPreparing] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
        window.location.search=='?preparing' && setPreparing(true);
    },[]);

    window.onresize=()=>{
        setInnerWidth(window.innerWidth)
    }

    return (
        <AppContext.Provider value={{selected, setSelected}}>
            {preparing && <ComingSoon/>}
            {inquiry && <Inquiry/>}

            {
                (innerWidth>450 && !inquiry && !preparing)?
                    <>
                        <Header/>
                        <Home/>
                        <About/>
                        <Projects/>
                        <Contact/>
                    </>
                    :

                (innerWidth<=450 && !inquiry && !preparing)&&
                    <>
                        <header className='headerForMobile'></header>
                        <main className='mainForMobile'>
                            <p>
                                Are you trying my portfolio with your mobile phone?<br/>
                                I'm sorry, it is not ready for mobile devices yet.<br/>
                                Try with your laptop, thank you.
                            </p>
                        </main>
                    </>
            }

        </AppContext.Provider>
    )
};

export default App;