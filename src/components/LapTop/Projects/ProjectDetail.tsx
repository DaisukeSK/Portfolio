import { Fragment } from 'react'
import Github from '../../icons/Github';
import Laptop from '../../icons/Laptop';

import { showDetailType } from './Projects';

import { imagePaths, iconObj, videoPaths } from '../../Media';

function ProjectDetail(props:{
    showDetail: showDetailType,
    setShowDetail: React.Dispatch<React.SetStateAction<showDetailType>>
    }) {

    return (
        <>
            <div className="blurBG" onClick={()=>props.setShowDetail({key:'', title:'', description:[], url:[], languages:[], features:[]})}></div>
            <div className='detail'>
                <div className='x' onClick={()=>props.setShowDetail({key:'', title:'', description:[], url:[], languages:[], features:[]})}>
                    <svg width='20' height='20'>
                        <rect x='0' y='0' width='20' height='20' rx='5' ry='5'/>
                        <path d='m5,5 l10,10'/>
                        <path d='m15,5 l-10,10'/>
                    </svg>
                </div>

                {videoPaths[props.showDetail.key]?
                    <video width='45%' autoPlay loop muted>
                        <source src={videoPaths[props.showDetail.key]} type='video/mp4'/>
                        <p>Your browser not supporting video</p>
                    </video>
                    :
                    <img className='altImg' src={imagePaths[props.showDetail.key]}/>
                }

                <div className='detailright'>

                    <div className='linkFlex'>

                        <h2>{props.showDetail.title}</h2>

                        {props.showDetail.url[0] &&
                            <div className='website'>
                                <a href={props.showDetail.url[0]} target='_blank'>
                                    <Laptop/>
                                </a>
                                <span>Web-site</span>
                            </div>
                        }

                        <div className='github'>
                            <a href={props.showDetail.url[1]} target='_blank'>
                                <Github where='projectDetail'/>
                            </a>
                            <span>Github</span>
                        </div>

                    </div>
                    
                    <p className='descriptionP'>
                        {props.showDetail.description.map((desc:string, key:number)=>{
                            return (
                                <span
                                    style={{
                                        textAlign:desc=='username: guest'||desc=='password: 123456'?'center':'left',
                                        textDecoration:desc=='username: guest'||desc=='password: 123456'?'underline':'none'
                                    }}
                                    key={key}
                                >
                                    {desc}
                                </span>
                            )
                        })}
                    </p>

                    
                    {/* {props.showDetail.features.length>0 &&
                        <>
                            <div className='featureFlex'>
                            <div className='otherFeatures'>&nbsp;Other features:&nbsp;</div>
                                {props.showDetail.features.map((feature:string, key:number)=>{
                                    return <div key={key}>{feature}</div>
                                })}
                            </div>
                        </>
                    } */}
                    <hr/>

                    <div className='iconFlex'>
                        {props.showDetail.languages.map((lang:string, key:number)=>{
                            return <Fragment key={key}>{iconObj[lang]}</Fragment>
                        })}
                    </div>


                </div>

            </div>
        </>
    )
};

export default ProjectDetail;