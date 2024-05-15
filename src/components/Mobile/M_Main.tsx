import { AppContext } from "../../App";
import { useContext } from "react";

import About from "./Pages/About";

function M_Main() {

    const { selected, setAside } = useContext(AppContext)

    return (
        <main onClick={()=>setAside(false)}>
            
            {
            selected.current==0? 'Home'
            :
            selected.current==1? <About></About>
            :
            selected.current==2? 'Projects'
            :
            selected.current==3 && 'Contact'
            
            }
            
            
        </main>
    )
};

export default M_Main;