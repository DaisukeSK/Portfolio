import { useState } from 'react';
import { UnderLine, HeaderRightChild } from './StyledComponents';
import { Selected } from '../App';

type Props={
    selected:Selected,
    setSelected:(state:Selected)=>void
};

const setWidth=():number=>{
    return window.innerWidth*0.48>=600? 600:window.innerWidth*0.48;
};

function Header({selected,setSelected}:Props) {

    const [width_headerRight, setWidth_headerRight] = useState(setWidth());
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
            Div.innerText==='Works'?2:3
        });
        window.scrollTo(0, 0);
    };

    window.onresize=()=>{
        setWidth_headerRight(setWidth());
    };

    return (
        <header>
            <div className='headerRight'>
                <UnderLine still={still?1:0} position={selected.current} testprop={width_headerRight}></UnderLine>
                <div className='headerRightFlex'>
                    <HeaderRightChild disabled={selected.current==0?1:0} onClick={(e)=>ClickHandler(e)}>Home</HeaderRightChild>
                    <HeaderRightChild disabled={selected.current==1?1:0} onClick={(e)=>ClickHandler(e)}>About</HeaderRightChild>
                    <HeaderRightChild disabled={selected.current==2?1:0} onClick={(e)=>ClickHandler(e)}>Works</HeaderRightChild>
                    <HeaderRightChild disabled={selected.current==3?1:0} onClick={(e)=>ClickHandler(e)}>Contact</HeaderRightChild>
                </div>
            </div>
        </header>
    )
};

export default Header;