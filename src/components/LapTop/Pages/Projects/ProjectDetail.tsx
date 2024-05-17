import { Fragment } from 'react'
import JS from '../../../icons/JS';
import TS from '../../../icons/TS';
import Jquery from '../../../icons/Jquery';
import React from '../../../icons/React';
import MySQL from '../../../icons/MySQL';
import PHP from '../../../icons/PHP';
import NodeJS from '../../../icons/NodeJS';
import PostgreSQL from '../../../icons/PostgreSQL';
import Github from '../../../icons/Github';
import Laptop from '../../../icons/Laptop';
import portfolio from '../../../../../public/projectsPics/portfolio.png';
import ccc from '../../../../../public/projectsVideos/Color Code Converter.mp4'
import ecommerce from '../../../../../public/projectsVideos/Fake Shop.mp4'
import satellite from '../../../../../public/projectsVideos/Satellite Launch simulation.mp4'
import animation from '../../../../../public/projectsVideos/SVG Animation Gallery.mp4'
import memolis from '../../../../../public/projectsVideos/memolis.mp4'
import dnn from '../../../../../public/projectsVideos/DNN.mp4'

import { showDetailType } from './Projects';

export const languageObj:{[key:string]:JSX.Element} = {
    'JS':<JS/>,
    'TS':<TS/>,
    'Jquery':<Jquery strokeColor={'#000000'}/>,
    'React':<React/>,
    'MySQL':<MySQL/>,
    'PHP':<PHP/>,
    'PostgreSQL':<PostgreSQL strokeColor={'#000000'}/>,
    'NodeJs':<NodeJS/>
}

function ProjectDetail(props:{
    showDetail: showDetailType,
    setShowDetail: React.Dispatch<React.SetStateAction<showDetailType>>
    }) {


    const videoPaths:{[key:string]:string} = {
        'memolis':memolis,
        'Color Code Converter':ccc,
        'E-Commerce':ecommerce,
        'Satellite Launch Simulation':satellite,
        'SVG Animation Gallery':animation,
        'DNN':dnn
    }

    return (
        <>
            <div className="blurBG" onClick={()=>props.setShowDetail({title:'', description:[], url:[], languages:[], features:[]})}></div>
            <div className='detail'>
                <div className='x' onClick={()=>props.setShowDetail({title:'', description:[], url:[], languages:[], features:[]})}>
                    <svg width='20' height='20'>
                        <rect x='0' y='0' width='20' height='20' rx='5' ry='5'/>
                        <path d='m5,5 l10,10'/>
                        <path d='m15,5 l-10,10'/>
                    </svg>
                </div>

                {props.showDetail.title=='This portfolio'?
                    <img className='portfolioImg' src={portfolio}/>:

                    <video width='45%' autoPlay loop muted>
                        <source src={videoPaths[props.showDetail.title]} type='video/mp4'/>
                        <p>Your browser not supporting video</p>
                    </video>
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
                                        textAlign:desc=='username: guest'||desc=='password: 1234'?'center':'left',
                                        textDecoration:desc=='username: guest'||desc=='password: 1234'?'underline':'none'
                                    }}
                                    key={key}
                                >
                                    {desc}
                                </span>
                            )
                        })}
                    </p>
                    
                    <hr/>

                    <div className='iconFlex'>
                        {props.showDetail.languages.map((lang:string, key:number)=>{
                            return <Fragment key={key}>{languageObj[lang]}</Fragment>
                        })}
                    </div>

                </div>

            </div>
        </>
    )
};

export default ProjectDetail;