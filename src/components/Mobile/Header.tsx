import { AppContext } from "../../App";
import { useContext } from "react";
import { Aside } from "./StyledComponents";

function Header() {

    const { aside, setAside } = useContext(AppContext)

    return (
        <header>

            <h1>D</h1>

            <svg width='25' height='19' onClick={()=>setAside(!aside)}>
                <rect x='0' y='0' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='8' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='16' width='25' height='3' fill='#ffffff'/>
            </svg>

            <Aside aside={aside}></Aside>
            
        </header>
    )
};

export default Header;