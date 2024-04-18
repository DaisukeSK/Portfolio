import { useState, useEffect, createContext } from 'react';
import Header from './components/Header.tsx';
import About from './components/page/About.tsx';
import Contact from './components/page/Contact.tsx';
import Home from './components/page/Home/Home.tsx';
import Projects from './components/page/Projects/Projects.tsx';
import Inquiry from './components/page/Inquiry.tsx';
import ComingSoon from './components/page/ComingSoon.tsx';

export type Selected={
    prev:number,
    current:number
};

export const AppContext=createContext({selected:{prev:0, current:0}})

function App() {
    const [selected, setSelected] = useState<Selected>({prev:0, current:0});
    const [inquiry, setInquiry] = useState<boolean>(false);
    const [preparing, setPreparing] = useState<boolean>(false);

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
        window.location.search=='?preparing' && setPreparing(true);
    },[]);

    return (
        <AppContext.Provider value={{selected}}>
            {preparing && <ComingSoon/>}
            {inquiry && <Inquiry/>}

            {(!inquiry && !preparing) &&
                <>
                    <Header selected={selected} setSelected={setSelected}></Header>
                    <About selected={selected}></About>
                    <Contact selected={selected}></Contact>
                    <Home selected={selected}></Home>
                    <Projects selected={selected}></Projects>
                </>
            }
        </AppContext.Provider>
    )
};

export default App;