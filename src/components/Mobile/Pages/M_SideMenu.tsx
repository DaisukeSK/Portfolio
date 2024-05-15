import { AppContext } from "../../../App";
import { useContext } from "react";
import { Aside } from "../StyledComponents";

function M_SideMenu() {

    const { aside, setAside, setSelected } = useContext(AppContext)

    const onClickHandler=(num:number):void=>{
        setSelected({prev:0, current:num})
        setAside(false)
    }

    return (
        <Aside aside={aside?1:0}>

            <svg width='25' height='19' onClick={()=>setAside(false)}>
                <rect x='0' y='0' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='8' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='16' width='25' height='3' fill='#ffffff'/>
            </svg>

            <ul>
                <li onClick={()=>onClickHandler(0)}>Home</li>
                <li onClick={()=>onClickHandler(1)}>About</li>
                <li onClick={()=>onClickHandler(2)}>Projects</li>
                <li onClick={()=>onClickHandler(3)}>Contact</li>
            </ul>
            
        </Aside>
    )
};

export default M_SideMenu;