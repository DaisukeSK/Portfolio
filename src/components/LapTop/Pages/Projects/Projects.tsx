import { useState, useEffect, useContext } from 'react'
import { Main, LinkDiv, Toggle } from '../../StyledComponents';
import portfolio from '../../../../../public/projectsPics/portfolio.png';
import ccc from '../../../../../public/projectsPics/ccc.png';
import ecommerce from '../../../../../public/projectsPics/ecommerce.png';
import satellite from '../../../../../public/projectsPics/satellite.png';
import animation from '../../../../../public/projectsPics/animation.png';
import memolis from '../../../../../public/projectsPics/memolis.png';
// import preparing from '../../../../../public/projectsPics/preparing.png';
import dnn from '../../../../../public/projectsPics/dnn.png';
import fridgefy from '../../../../../public/projectsPics/fridgefy.png';
import { AppContext } from '../../../../App';
import js from '../../../projects.json';
import ProjectDetail from './ProjectDetail';

export type JsonType = {
    [key:string]:{
        'url':Array<string>,
        'description':Array<string>,
        'languages':Array<string>,
        'features':Array<string>,
        'team':boolean,
        'responsive':boolean,
        'code':string
    }
}

export type showDetailType = {
    title: string,
    description: Array<string>,
    url: Array<string>,
    languages: Array<string>,
    features: Array<string>,
    responsive?: boolean
}

export const imagePaths:{[key:string]:string} = {
    'memolis':memolis,
    'Color Code Converter':ccc,
    'E-Commerce':ecommerce,
    'Satellite Launch Simulation':satellite,
    'SVG Animation Gallery':animation,
    'DNN':dnn,
    'This portfolio': portfolio,
    'Fridgefy': fridgefy,
}

function Projects() {

    const { selected } = useContext(AppContext)

    const [teamP, setTeamP] = useState<boolean>(true);
    const [showDetail, setShowDetail] = useState<showDetailType>({
        title:'',
        description:[],
        url:[],
        languages:[],
        features:[]
    })
    
    const projectsObj:JsonType = {...js}

    useEffect(()=>{
        setShowDetail({title:'', description:[], url:[], languages:[], features:[]})
        setTeamP(selected.current==2?false:true)
    },[selected])

    return (

        <Main
            className='projects'
            show={selected.current==2?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <Toggle teamp={teamP?1:0}>
                <svg width="15" height="10">
                    <path d="m0,0 15,5 -15,5" fill='#ffffff'/>
                </svg>
                <div className='individual' onClick={()=>setTeamP(false)}>Individual</div>
                <div className='team' onClick={()=>setTeamP(true)}>Team</div>
            </Toggle>

            {showDetail.title &&
                <ProjectDetail showDetail={showDetail} setShowDetail={setShowDetail}/>
            }

            <div className='projectsFlex'>
                {Object.keys(projectsObj).map((val:string, key:number)=>{
                    return (projectsObj[val]['team']==teamP &&
                        <div key={key} className='flexChild'>
                            <LinkDiv code={projectsObj[val]['code']} onClick={()=>setShowDetail({title:val, description:projectsObj[val]['description'], url:projectsObj[val]['url'], languages:projectsObj[val]['languages'], features:projectsObj[val]['features']})}/>
                            <h3>{[val]}</h3>
                        </div>
                    )
                })}
            </div>

        </Main>
    )
};

export default Projects;