import { useState } from 'react';
import { iconObj } from '../../../Media';

function IconFlex(props:{icons:Array<string>}){

    const [show, setShow]=useState<number>(NaN)

    return (
        <>
            {props.icons.map((name:string, key:number)=>{
                return (
                    <div className='iconContainer' key={key}>
            
                        <div className='iconName' style={{opacity:show==key?1:0}}>{name[0]=='@'? name.slice(1):name}</div>
            
                        <div onMouseEnter={()=>setShow(key)} onMouseLeave={()=>setShow(NaN)}>
                            {iconObj[name]}
                        </div>
        
                    </div>
                )
            })}
        </>
    )
}

export default IconFlex