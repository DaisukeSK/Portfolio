import { AppContext } from "../../App";
import { useContext } from "react";

function M_Header() {

    const { aside, setAside } = useContext(AppContext)

    return (
        <header>

            <div>Portfolio</div>

            <svg width='25' height='19' onClick={()=>setAside(!aside)}>
                <rect x='0' y='0' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='8' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='16' width='25' height='3' fill='#ffffff'/>
            </svg>
            
        </header>
    )
};

export default M_Header;