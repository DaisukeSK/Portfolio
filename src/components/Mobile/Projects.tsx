import { Fragment, useState } from 'react';
import projectsJson from '../projects.json'
import { JsonType } from '../../App';
import { imagePaths, iconObj } from '../Media';
import { Toggle } from './StyledComponents'; 

function Projects() {

    const [ team, setTeam ] = useState<boolean>(false)
    const [ showDetail, setShowDetail ] = useState<string>('')

    const projectsObj:JsonType = {...projectsJson}

    const toggleHandler=(b:boolean):void=>{
        setTeam(b)
        setShowDetail('')
    }

    return (
        <main className='projects'>

            <Toggle team={team?1:0}>
                <div onClick={()=>toggleHandler(false)}>Individual</div>
                <div onClick={()=>toggleHandler(true)}>Team</div>
            </Toggle>

            {Object.keys(projectsObj).map((projectName:string, key:number)=>{
                return ( projectsObj[projectName]['team']==team &&

                    <>
                    <hr/>
                    
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
                                <h3>{projectsObj[projectName]['title']}</h3>
                            </div>
                            <div className='hiddenPart' style={{display:showDetail==projectName?'block':'none'}}>

                                {!projectsObj[projectName]['responsive'] &&
                                    <div className='notResponsive'>

                                        <div className='flex'>
                                            <svg width="40" height="40" viewBox="0 0 16 16">
                                                <path fill="#FFA500" d="M15.35 12.81 9 2.08a1.22 1.22 0 0 0-2 0L.65 12.81a1.14 1.14 0 0 0 1 1.69h12.66a1.14 1.14 0 0 0 1.04-1.69zm-13.66.55L8 2.64l6.31 10.72z"/>
                                                <path fill="#ffffff" d="M7.32 5.45h1.25V10H7.32z"/>
                                                <ellipse fill="#ffffff" cx="7.95" cy="11.9" rx=".67" ry=".7"/>
                                            </svg>
                                            <h3>Sorry...</h3>
                                        </div>

                                        <p>This app is Not ready for mobile devices yet.</p>
                                        
                                    </div>
                                }

                                <div className='url'>

                                    {projectsObj[projectName]['url'][0] &&
                                        <>
                                            <h4>Web-site</h4>
                                            <a href={projectsObj[projectName]['url'][0]} target='_blank'>{projectsObj[projectName]['url'][0]}</a>
                                        </>
                                    }
                                    <h4>Github</h4>
                                    <a href={projectsObj[projectName]['url'][1]} target='_blank'>{projectsObj[projectName]['url'][1]}</a>
                                        
                                </div>
                                <div className='description'>
                                    {projectsObj[projectName]['description'].map((desc:string, key:number)=>{
                                        return <p key={key}>{desc}</p>
                                    })}
                                </div>

                                <div className='languages'>
                                    {projectsObj[projectName]['languages'].map((lang:string, key:number)=>{
                                        return <Fragment key={key}>{iconObj[lang]}</Fragment>
                                    })}
                                </div>

                            </div>
                        </div>
                    </>
                )
            })}

        </main>
    )
};

export default Projects;