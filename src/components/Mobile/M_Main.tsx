import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";

import { Main, MainBlackBG } from "./StyledComponents";

import M_SideMenu from "./M_SideMenu";

import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact/Contact";

function M_Main() {

    const { selected, setAside } = useContext(AppContext)
    const [ blackOut, setBlackOut ] = useState<boolean>(true)

    useEffect(()=>{
        setBlackOut(true)
        setTimeout(()=>{
            setBlackOut(false)
        },50)
    },[selected])

    return (
        <Main selected={selected.current} onClick={()=>setAside(false)}>

            {/* {aside && <M_SideMenu></M_SideMenu>} */}

            {/* <div className="testDiv"></div> */}
            <MainBlackBG bg={blackOut?1:0}></MainBlackBG>

            <M_SideMenu></M_SideMenu>
            
            {
            selected.current==0? <Home/>
            :
            selected.current==1? <About/>
            :
            selected.current==2? <Projects/>
            :
            selected.current==3 && <Contact/>
            
            }
            {/* <Projects/> */}
            
            
        </Main>
    )
};

export default M_Main;