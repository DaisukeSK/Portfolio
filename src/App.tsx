import { useState, useEffect, createContext } from 'react';
import Inquiry from './components/LapTop/Inquiry.tsx';
import Mobile from './components/Mobile/Mobile.tsx';
import LapTop from './components/LapTop/LapTop.tsx';

export type Selected={
    prev: number,
    current: number
};

export type JsonType = {
    [key:string]:{
        'title':string,
        'url':Array<string>,
        'description':Array<string>,
        'languages':Array<string>,
        'features':Array<string>,
        'team':boolean,
        'responsive':boolean
    }
}

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
    const [aside, setAside] = useState<boolean>(false)

    useEffect(()=>{
        window.location.search=='?inquiry' && setInquiry(true);
    },[]);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[selected]);

    return (
        <AppContext.Provider value={{selected, setSelected, aside, setAside}}>

            {inquiry?
                <Inquiry/>
                :
                <>
                    <LapTop></LapTop>
                    <Mobile></Mobile>
                </>
            }

        </AppContext.Provider>
    )
};

export default App;