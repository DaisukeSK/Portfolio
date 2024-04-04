import { useState, useEffect } from 'react'
import { Main, LinkDiv, Toggle } from '../../StyledComponents';
// import JS from '../../icons/JS';
// import TS from '../../icons/TS';
// import Jquery from '../../icons/Jquery';
// import React from '../../icons/React';
// import MySQL from '../../icons/MySQL';
// import PHP from '../../icons/PHP';
// import NodeJS2 from '../../icons/NodeJS2';
// import PostgreSQL from '../../icons/PostgreSQL';
// import Github from '../../icons/Github';
// import Laptop from '../../icons/Laptop';
import portfolio from '../../../../public/worksPics/portfolio.png';
import ccc from '../../../../public/worksPics/ccc.png';
import ecommerce from '../../../../public/worksPics/ecommerce.png';
import satellite from '../../../../public/worksPics/satellite.png';
import animation from '../../../../public/worksPics/animation.png';
import memolis from '../../../../public/worksPics/memolis.png';
import preparing from '../../../../public/worksPics/preparing.png';
// import news from '../../../../public/news.png';
import dnn from '../../../../public/worksPics/dnn.png';
import { Selected } from '../../../App';
import js from './works.json';
// import Detail from './Detail';
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

  // const [onMouse, setOnMouse] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState<showDetailType>({title:'',description:'',url:[],languages:[]})

  const [teamP, setTeamP]=useState<boolean>(false);
  const worksObj:JsonType = {...js}
  // const languageObj:{[key:string]:JSX.Element} = {'JS':<JS/>,'TS':<TS/>,'Jquery':<Jquery/>,'React':<React/>,'MySQL':<MySQL/>,'PHP':<PHP/>,'PostgreSQL':<PostgreSQL/>,'NodeJs':<NodeJS2/>}
  // const paths:Array<string> = [memolis, ccc, ecommerce, satellite, animation, news, portfolio]
  // const imagePath={'memolis':memolis,'Color code Converter':ccc, 'E-Commerce':ecommerce, 'Satellite Launch Simulation':satellite, 'SVG Animation Gallery':animation, 'News App':news,'This Portfolio':portfolio}
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
      // style={{position:'relative'}}
    >
<Toggle teamP={teamP}>

  <svg width="15" height="10">
    <path d="m0,0 15,5 -15,5" fill='#ffffff'/>
  </svg>

  <div className='individual' onClick={()=>setTeamP(false)}>Individual</div>
  <div className='team' onClick={()=>setTeamP(true)}>Team</div>

</Toggle>
      {/* <h1>Works</h1> */}

      {/* <div style={{display:showDetail.title?'block':'none',position:'fixed',width:'80%',height:'80vh',top:'100px',left:'100px',background:'#ffffff77',zIndex:1}}>
        Detail
        <div onClick={()=>setShowDetail({title:'',description:'',url:[],languages:[]})}>x</div>
        <div>{showDetail.title}</div>
        <div>{showDetail.description}</div>
        <div>{showDetail.url[0]}</div>
        <div>{showDetail.languages[0]}</div>
      </div> */}
      {showDetail.title &&
      
      <WorkDetail showDetail={showDetail} setShowDetail={setShowDetail}/>
      }

      <div className='worksFlex'>

        {Object.keys(worksObj).map((val:string, key:number)=>{
          return (worksObj[val]['team']==teamP &&

            
              <div key={key} className='WFchild'>
                  
                <LinkDiv bg={imagePaths[val]} onClick={()=>setShowDetail({title:val,description:worksObj[val]['description'],url:[...worksObj[val]['url']],languages:[...worksObj[val]['languages']]})}/>

                  {/* <div className='linkFlex'> */}

                    {/* {worksObj[val]['url'][0] && */}
                      {/* <div className='demo'>
                        <a href={worksObj[val]['url'][0]} target='_blank'>
                          <Laptop/>
                          <span><b><u>Demo</u></b></span>
                        </a>
                      </div> */}
                    {/* } */}
                    {/* <div className='github'>
                      <a href={worksObj[val]['url'][1]} target='_blank'>
                        <Github/>
                        <span><b><u>Github</u></b></span>
                      </a>
                    </div>

                  </div> */}


                <h3>{[val]}</h3>

                

                {/* <p>{worksObj[val]['description']}</p>

                <div className='iconFlex'>
                  {worksObj[val]['languages'].map((lang:string, key:number)=>{
                    return <Fragment key={key}>{languageObj[lang]}</Fragment>
                  })}
                </div> */}

              </div>
            
          
          )
        })}

      </div>
    </Main>
  )
};

export default Works;