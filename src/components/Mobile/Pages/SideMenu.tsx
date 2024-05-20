import { AppContext } from "../../../App";
import { useContext } from "react";
import { Aside, ArrowSVG } from "../StyledComponents";

function SideMenu() {

    const { aside, setAside, selected, setSelected } = useContext(AppContext)

    const onClickHandler=(num:number):void=>{
        setSelected({prev:0, current:num})
        setAside(false)
    }

    const path: JSX.Element = <path fill='#ffffff' d='m0,0 l12 5 l-12,5'/>

    return (
        <Aside aside={aside?1:0}>

            <svg width='25' height='19' onClick={()=>setAside(false)}>
                <rect x='0' y='0' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='8' width='25' height='3' fill='#ffffff'/>
                <rect x='0' y='16' width='25' height='3' fill='#ffffff'/>
            </svg>

            <ul>
                <li onClick={()=>onClickHandler(0)}>
                    <ArrowSVG selected={selected.current==0?1:0}>{path}</ArrowSVG>
                    <div>Home</div>
                </li>
                <li onClick={()=>onClickHandler(1)}>
                    <ArrowSVG selected={selected.current==1?1:0}>{path}</ArrowSVG>
                    <div>About</div>
                </li>
                <li onClick={()=>onClickHandler(2)}>
                    <ArrowSVG selected={selected.current==2?1:0}>{path}</ArrowSVG>
                    <div>Projects</div>
                </li>
                <li onClick={()=>onClickHandler(3)}>
                    <ArrowSVG selected={selected.current==3?1:0}>{path}</ArrowSVG>
                    <div>Contact</div>
                </li>
            </ul>
            
        </Aside>
    )
};

export default SideMenu;