import JS from '../../../icons/JS';
import TS from '../../../icons/TS';
import HTML from '../../../icons/HTML';
import CSS from '../../../icons/CSS';
import Sass from '../../../icons/Sass';
import Jquery from '../../../icons/Jquery';
import React from '../../../icons/React';
import MySQL from '../../../icons/MySQL';
import PHP from '../../../icons/PHP';
import NodeJS from '../../../icons/NodeJS';
import PostgreSQL from '../../../icons/PostgreSQL';
import Git from '../../../icons/Git';
import Github from '../../../icons/Github';
import VSCode from '../../../icons/VSCode';
import Inkscape from '../../../icons/Inkscape';
import Render from '../../../icons/Render';
import Vercel from '../../../icons/Vercel';
import Hostinger from '../../../icons/Hostinger';

function IconFlex(props:{icons:Array<string>, width?:number|undefined}) {

    console.log("props:",props.width)

    const iconObj : {[key:string]:JSX.Element} = {
        'JavaScript': <JS/>,
        'TypeScript': <TS/>,
        'HTML': <HTML/>,
        'CSS': <CSS/>,
        'Sass': <Sass/>,
        'jQuery': <Jquery strokeColor={'#ffffff'}/>,
        'React': <React/>,
        'MySQL': <MySQL/>,
        'PHP': <PHP/>,
        'Node.js': <NodeJS/>,
        'PostgreSQL': <PostgreSQL strokeColor={'#ffffff'}/>,
        'Github': <Github where='about'/>,
        'Git': <Git/>,
        'VSCode': <VSCode/>,
        'Inkscape': <Inkscape/>,
        'Render': <Render/>,
        'Vercel': <Vercel/>,
        'Hostinger': <Hostinger/>
    }

    return (
        <div className='icons' style={{width:props.width && `${props.width}px`}}>

            {props.icons.map((icon:string, key:number)=>{
                return (
                    
                <div className='iconNnameFlex' key={key}>
                    {iconObj[icon]}
                    <div className='iconName'>{icon}</div>
                </div>
            
            )})}

        </div>
    )
};

export default IconFlex;