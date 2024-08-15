import { iconObj } from '../Media';

function IconFlex(props:{icons:Array<string>}) {

    return (
        <div className='icons'>

            {props.icons.map((icon:string)=>{
                return iconObj[icon]
            })}

        </div>
    )
};

export default IconFlex;