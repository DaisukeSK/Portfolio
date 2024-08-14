import { useState, useEffect, useContext } from 'react'
import { Main, LinkDiv, Toggle } from '../StyledComponents';
import { AppContext } from '../../../App';
import js from '../../projects.json';
import ProjectDetail from './ProjectDetail';

import { imagePaths } from '../../Media';

export type JsonType = {
    [key:string]:{
        'title':string,
        'url':Array<string>,
        'description':Array<string>,
        'languages':Array<string>,
        'features':Array<string>,
        'team':boolean,
        'responsive':boolean
    }
}

export type showDetailType = {
    key: string,
    title: string,
    description: Array<string>,
    url: Array<string>,
    languages: Array<string>,
    features: Array<string>
}

function Projects() {

    const { selected } = useContext(AppContext)

    const [teamP, setTeamP] = useState<boolean>(true);
    const [showDetail, setShowDetail] = useState<showDetailType>({
        key: '',
        title:'',
        description:[],
        url:[],
        languages:[],
        features:[]
    })
    
    const projectsObj:JsonType = {...js}

    useEffect(()=>{
        setShowDetail({key: '', title:'', description:[], url:[], languages:[], features:[]})
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
                            <LinkDiv bg={imagePaths[val]} onClick={()=>setShowDetail({key: val, title:projectsObj[val]['title'], description:projectsObj[val]['description'], url:projectsObj[val]['url'], languages:projectsObj[val]['languages'], features:projectsObj[val]['features']})}/>
                            <h3>{projectsObj[val]['title']}</h3>
                        </div>
                    )
                })}
            </div>

        </Main>
    )
};

export default Projects;