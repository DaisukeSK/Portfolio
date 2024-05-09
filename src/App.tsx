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

type Context = {
    selected: {prev:number, current:number},
    setSelected: React.Dispatch<React.SetStateAction<Selected>>
}

export const AppContext=createContext<Context>({} as Context)

// export const AppContext= createContext<Context>({} as Context)

// export type Context = {
//     ColorCodes:CCs,
//     dispatch:(cc:actionType)=>void,
//     textColor:boolean,
//     rangeBG:rangeBGType,
//     builtInColor:Array<string | null>,
//     output:outputType,
//     aside:boolean,
//     pointerPosition:ppType,
//     setAside:(aside:boolean)=>void,
//     setPointerPosition:(pp:ppType)=>void
// }

function App() {
    const [selected, setSelected] = useState<Selected>({prev:0, current:0});
    const [inquiry, setInquiry] = useState<boolean>(false);
    const [preparing, setPreparing] = useState<boolean>(false);

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
        window.location.search=='?preparing' && setPreparing(true);
    },[]);

    return (
        <AppContext.Provider value={{selected, setSelected}}>
            {preparing && <ComingSoon/>}
            {inquiry && <Inquiry/>}

            {(!inquiry && !preparing) &&
                <>
                    <Header/>
                    <Home/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </>
            }
        </AppContext.Provider>
    )
};

export default App;