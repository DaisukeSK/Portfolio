import { iconObj } from '../../../Media';

function IconFlex(props:{icons:Array<string>, width?:number|undefined}) {

    return (
        <div className='icons' style={{width:props.width && `${props.width}px`}}>

            {props.icons.map((icon:string, key:number)=>{
                return (
                    
                <div className='iconNnameFlex' key={key}>
                    {iconObj[icon]}
                    <div className='iconName'>{icon[0]=='@'? icon.slice(1):icon}</div>
                </div>
            
            )})}

        </div>
    )
};

export default IconFlex;