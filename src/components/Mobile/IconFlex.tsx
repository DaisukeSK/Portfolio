import { iconObj } from '../Media';

function IconFlex(props:{icons:Array<string>, width?:number|undefined}) {

    return (
        <div className='icons' style={{width:props.width && `${props.width}px`}}>

            {props.icons.map((icon:string, key:number)=>{
                return iconObj[icon]
            })}

        </div>
    )
};

export default IconFlex;