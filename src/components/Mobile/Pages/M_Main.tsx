import { AppContext } from "../../../App";
import { useContext } from "react";

function M_Main() {

    const { selected, setAside } = useContext(AppContext)

    return (
        <main className='forMobile' onClick={()=>setAside(false)}>
            <div style={{position: 'relative', top: '50px'}}>
                {
                selected.current==0? 'Home'
                :
                selected.current==1? 'About'
                :
                selected.current==2? 'Projects'
                :
                selected.current==3 && 'Contact'
                
                }
            </div>
            
        </main>
    )
};

export default M_Main;