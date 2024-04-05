import { Fragment } from 'react'
import JS from '../../icons/JS';
import TS from '../../icons/TS';
import Jquery from '../../icons/Jquery';
import React from '../../icons/React';
import MySQL from '../../icons/MySQL';
import PHP from '../../icons/PHP';
import NodeJS2 from '../../icons/NodeJS2';
import PostgreSQL from '../../icons/PostgreSQL';
import Github from '../../icons/Github';
import Laptop from '../../icons/Laptop';
import portfolio from '../../../../public/worksPics/portfolio.png';
import ccc from '../../../../public/videos/Color Code Converter.mp4'
import ecommerce from '../../../../public/videos/Fake Shop.mp4'
import satellite from '../../../../public/videos/Satellite Launch simulation.mp4'
import animation from '../../../../public/videos/SVG Animation Gallery.mp4'
import memolis from '../../../../public/videos/memolis.mp4'
import dnn from '../../../../public/videos/DNN.mp4'

import { showDetailType } from './Works';

function WorkDetail(props:{
    showDetail: showDetailType,
    setShowDetail: React.Dispatch<React.SetStateAction<showDetailType>>
    }) {

    const languageObj:{[key:string]:JSX.Element} = {
        'JS':<JS/>,
        'TS':<TS/>,
        'Jquery':<Jquery strokeColor={'#000000'}/>,
        'React':<React/>,
        'MySQL':<MySQL/>,
        'PHP':<PHP/>,
        'PostgreSQL':<PostgreSQL strokeColor={'#000000'}/>,
        'NodeJs':<NodeJS2/>
    }

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
            <div className="blurBG" onClick={()=>props.setShowDetail({title:'',description:'',url:[],languages:[]})}></div>
            <div className='detail'>
                <div className='x' onClick={()=>props.setShowDetail({title:'',description:'',url:[],languages:[]})}>
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
                            <div className='demo'>
                                <a href={props.showDetail.url[0]} target='_blank'>
                                    <Laptop/>
                                </a>
                                <span>Demo</span>
                            </div>
                        }

                        <div className='github'>
                            <a href={props.showDetail.url[1]} target='_blank'>
                                <Github/>
                            </a>
                            <span>Github</span>
                        </div>

                    </div>
                    
                    <p>{props.showDetail.description}</p>
                    
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

export default WorkDetail;