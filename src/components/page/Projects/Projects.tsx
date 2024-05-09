import { useState, useEffect, useContext } from 'react'
import { Main, LinkDiv, Toggle } from '../../StyledComponents';
import portfolio from '../../../../public/projectsPics/portfolio.png';
import ccc from '../../../../public/projectsPics/ccc.png';
import ecommerce from '../../../../public/projectsPics/ecommerce.png';
import satellite from '../../../../public/projectsPics/satellite.png';
import animation from '../../../../public/projectsPics/animation.png';
import memolis from '../../../../public/projectsPics/memolis.png';
import preparing from '../../../../public/projectsPics/preparing.png';
import dnn from '../../../../public/projectsPics/dnn.png';
import { AppContext } from '../../../App';
import js from './projects.json';
import ProjectDetail from './ProjectDetail';

// type Props = {
//     selected:Selected
// };

type JsonType={
    [key:string]:{
        'url':Array<string>,
        'description':Array<string>,
        'languages':Array<string>,
        'features':Array<string>,
        'team':boolean
    }
}

export type showDetailType={title:string,description:Array<string>,url:Array<string>,languages:Array<string>,features:Array<string>}

function Projects() {

    const { selected } = useContext(AppContext)

    const [showDetail, setShowDetail] = useState<showDetailType>({title:'',description:[],url:[],languages:[],features:[]})
    const [teamP, setTeamP] = useState<boolean>(false);

    const projectsObj:JsonType = {...js}
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
        setShowDetail({title:'',description:[],url:[],languages:[],features:[]})
        setTeamP(false)
    },[selected])

    return (

        <Main
            className='projects'
            show={selected.current==2?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <Toggle teamp={teamP}>
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
                        <div key={key} className='WFchild'>
                            
                            <LinkDiv bg={imagePaths[val]} onClick={()=>setShowDetail({title:val,description:projectsObj[val]['description'],url:projectsObj[val]['url'],languages:projectsObj[val]['languages'],features:projectsObj[val]['features']})}/>
                            <h3>{[val]}</h3>

                        </div>
                    )
                })}
            </div>

        </Main>
    )
};

export default Projects;