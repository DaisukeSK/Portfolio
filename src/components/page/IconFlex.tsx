import { useState } from 'react';
import JS from '../icons/JS';
import TS from '../icons/TS';
import HTML from '../icons/HTML';
import CSS from '../icons/CSS';
import Sass from '../icons/Sass';
import Jquery from '../icons/Jquery';
import React from '../icons/React';
import MySQL from '../icons/MySQL';
import PHP from '../icons/PHP';
import NodeJS from '../icons/NodeJS';
import PostgreSQL from '../icons/PostgreSQL';
import Fortran from '../icons/Fortran';

import Git from '../icons/Git';
import Github from '../icons/Github';
import VSCode from '../icons/VSCode';
import Inkscape from '../icons/Inkscape';
import Render from '../icons/Render';
import Vercel from '../icons/Vercel';
import Hostinger from '../icons/Hostinger';

const iconObj:any={'JavaScript':<JS/>,'TypeScript':<TS/>,'HTML':<HTML/>,'CSS':<CSS/>,'Sass':<Sass/>,'jQuery':<Jquery strokeColor={'#ffffff'}/>,'React':<React/>,
'MySQL':<MySQL/>,'PHP':<PHP/>,'Node.js':<NodeJS/>,'PostgreSQL':<PostgreSQL strokeColor={'#ffffff'}/>,'Fortran':<Fortran/>,
'Github':<Github where='about'/>,'Git':<Git/>,'VSCode':<VSCode/>,'Inkscape':<Inkscape/>,'Render':<Render/>,'Vercel':<Vercel/>,'Hostinger':<Hostinger/>

}

function IconFlex(props:{icons:Array<string>}){

    const [show, setShow]=useState<number>(NaN)

    return (

        <>
        
        {props.icons.map((name,key)=>{
            return (
                <div className='iconContainer'>
        
                    <div className='iconName' style={{opacity:show==key?1:0}}>{name}</div>
        
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