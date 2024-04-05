import { useState, useEffect } from 'react'
import { Main, LinkDiv, Toggle } from '../../StyledComponents';
import portfolio from '../../../../public/worksPics/portfolio.png';
import ccc from '../../../../public/worksPics/ccc.png';
import ecommerce from '../../../../public/worksPics/ecommerce.png';
import satellite from '../../../../public/worksPics/satellite.png';
import animation from '../../../../public/worksPics/animation.png';
import memolis from '../../../../public/worksPics/memolis.png';
import preparing from '../../../../public/worksPics/preparing.png';
import dnn from '../../../../public/worksPics/dnn.png';
import { Selected } from '../../../App';
import js from './works.json';
import WorkDetail from './WorkDetail';

type Props = {
    selected:Selected
};

type JsonType={
    [key:string]:{
        'url':Array<string>,
        'description':string,
        'languages':Array<string>,
        'team':boolean
    }
}

export type showDetailType={title:string,description:string,url:Array<string>,languages:Array<string>}

function Works({selected}:Props) {
    const [showDetail, setShowDetail] = useState<showDetailType>({title:'',description:'',url:[],languages:[]})
    const [teamP, setTeamP] = useState<boolean>(false);

    const worksObj:JsonType = {...js}
    const imagePaths:{[key:string]:string} = {
        'memolis':memolis,
        'Color Code Converter':ccc,
        'E-Commerce':ecommerce,
        'Satellite Launch Simulation':satellite,
        'SVG Animation Gallery':animation,
        'DNN':dnn,
        'This portfolio': portfolio,
        'Preparing...': preparing,
    }

    useEffect(()=>{
        setShowDetail({title:'',description:'',url:[],languages:[]})
        setTeamP(false)
    },[selected])

    return (

        <Main
            className='works'
            show={selected.current==2?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <Toggle teamP={teamP}>
                <svg width="15" height="10">
                    <path d="m0,0 15,5 -15,5" fill='#ffffff'/>
                </svg>
                <div className='individual' onClick={()=>setTeamP(false)}>Individual</div>
                <div className='team' onClick={()=>setTeamP(true)}>Team</div>
            </Toggle>

            {showDetail.title &&
                <WorkDetail showDetail={showDetail} setShowDetail={setShowDetail}/>
            }

            <div className='worksFlex'>
                {Object.keys(worksObj).map((val:string, key:number)=>{
                    return (worksObj[val]['team']==teamP &&
                        <div key={key} className='WFchild'>
                            
                            <LinkDiv bg={imagePaths[val]} onClick={()=>setShowDetail({title:val,description:worksObj[val]['description'],url:[...worksObj[val]['url']],languages:[...worksObj[val]['languages']]})}/>
                            <h3>{[val]}</h3>

                        </div>
                    )
                })}
            </div>

        </Main>
    )
};

export default Works;