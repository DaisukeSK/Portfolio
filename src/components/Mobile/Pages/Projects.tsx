import projectsJson from '../../projects.json'
import { Fragment, useState } from 'react';
import { JsonType } from '../../LapTop/Pages/Projects/Projects';

// import Github from '../../../icons/Github';
// import Laptop from '../../../icons/Laptop';

// import portfolio from '../../../../../public/projectsPics/portfolio.png';
// import ccc from '../../../../../public/projectsPics/ccc.png';
// import ecommerce from '../../../../../public/projectsPics/ecommerce.png';
// import satellite from '../../../../../public/projectsPics/satellite.png';
// import animation from '../../../../../public/projectsPics/animation.png';
// import memolis from '../../../../../public/projectsPics/memolis.png';
// import preparing from '../../../../../public/projectsPics/preparing.png';
// import dnn from '../../../../../public/projectsPics/dnn.png';

import { imagePaths } from '../../LapTop/Pages/Projects/Projects';
import { languageObj } from '../../LapTop/Pages/Projects/ProjectDetail';

import { Toggle } from '../StyledComponents'; 

function Projects() {

    const [ team, setTeam ] = useState<boolean>(false)
    const [ showDetail, setShowDetail ] = useState<string>('')

    const projectsObj:JsonType = {...projectsJson}

    const toggleHandler=(b:boolean):void=>{
        setTeam(b)
        setShowDetail('')
    }

    return (
        <div className='projects'>

            <Toggle team={team?1:0}>
                <div onClick={()=>{toggleHandler(false);console.log("toggled")}}>Individual</div>
                <div onClick={()=>{toggleHandler(true);console.log("toggled")}}>Team</div>
            </Toggle>

            {Object.keys(projectsObj).map((projectName:string, key:number)=>{
                return ( projectsObj[projectName]['team']==team &&
                    <div className='project' key={key}>
                        <img src={imagePaths[projectName]} onClick={()=>setShowDetail(showDetail==projectName?'':projectName)}/>
                        <div className='title' onClick={()=>setShowDetail(showDetail==projectName?'':projectName)}>
                            <svg width='20' height='19' fill='#000000'>

                                {showDetail==projectName?
                                <>
                                    <path d='m0,19 l10,-10 l10,10 v-3 l-10,-10 l-10,10'/>
                                    <path d='m0,13 l10,-10 l10,10 v-3 l-10,-10 l-10,10'/>
                                </>
                                :
                                <>
                                    <path d='m0,0 l10,10 l10,-10 v3 l-10,10 l-10,-10'/>
                                    <path d='m0,6 l10,10 l10,-10 v3 l-10,10 l-10,-10'/>
                                </>
                                }
                            </svg>
                            <h3>{projectName}</h3>
                        </div>
                        <div className='hiddenPart' style={{display:showDetail==projectName?'block':'none'}}>

                            <div className='url'>

                                <h4>Web-site</h4>
                                <a href={projectsObj[projectName]['url'][0]}>{projectsObj[projectName]['url'][0]}</a>
                                <h4>Github</h4>
                                <a href={projectsObj[projectName]['url'][1]}>{projectsObj[projectName]['url'][1]}</a>
                                    
                            </div>
                            <div className='description'>
                                {projectsObj[projectName]['description'].map((desc:string, key:number)=>{
                                    return <p key={key}>{desc}</p>
                                })}
                            </div>

                            <div className='languages'>
                                {projectsObj[projectName]['languages'].map((lang:string, key:number)=>{
                                    return <Fragment key={key}>{languageObj[lang]}</Fragment>
                                })}
                            </div>


                        </div>
                    </div>
                )
            })}

            
        </div>
    )
};

export default Projects;