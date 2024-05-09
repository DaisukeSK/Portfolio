import { useContext, useState } from 'react';
import { UnderLine, NavChild } from './StyledComponents';
import { AppContext } from '../App';

// type Props={
//     selected:Selected,
//     setSelected:(state:Selected)=>void
// };

// const setWidth=():number=>{
//     return window.innerWidth*0.48>=600? 600:window.innerWidth*0.48;
// };

function Header() {

    const { selected,setSelected } = useContext(AppContext)

    // const [width_headerRight, setWidth_headerRight] = useState(setWidth());
    const [still, setStill] = useState<boolean>(true);
    
    const ClickHandler=(event: React.MouseEvent<HTMLDivElement>): void=>{
        setStill(false)

        setTimeout(()=>{
            setStill(true)
        },1000)
        
        const Div = event.target as HTMLDivElement
        setSelected({
            prev: selected.current,
            current:
            Div.innerText==='Home'?0:
            Div.innerText==='About'?1:
            Div.innerText==='Projects'?2:3
        });
        window.scrollTo(0, 0);
    };

    // window.onresize=()=>{
    //     setWidth_headerRight(setWidth());
    // };

    return (
        <header>
            <nav>
                <UnderLine still={still?1:0} position={selected.current}></UnderLine>
                <NavChild disabled={selected.current==0?1:0} onClick={(e)=>ClickHandler(e)}>Home</NavChild>
                <NavChild disabled={selected.current==1?1:0} onClick={(e)=>ClickHandler(e)}>About</NavChild>
                <NavChild disabled={selected.current==2?1:0} onClick={(e)=>ClickHandler(e)}>Projects</NavChild>
                <NavChild disabled={selected.current==3?1:0} onClick={(e)=>ClickHandler(e)}>Contact</NavChild>
                {/* <div className='headerRightFlex'>
                </div> */}
            </nav>
        </header>
    )
};

export default Header;