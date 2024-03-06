import { Fragment, useState } from 'react'
import { Main, LinkDiv } from '../StyledComponents';
import JS from '../icons/JS';
import TS from '../icons/TS';
import Jquery from '../icons/Jquery';
import React from '../icons/React';
import MySQL from '../icons/MySQL';
import PHP from '../icons/PHP';
import NodeJS2 from '../icons/NodeJS2';
import PostgreSQL from '../icons/PostgreSQL';
import Github from '../icons/Github';
import Laptop from '../icons/Laptop';
import portfolio from '../../../public/portfolio.png';
import ccc from '../../../public/ccc.png';
import ecommerce from '../../../public/ecommerce.png';
import satellite from '../../../public/satellite.png';
import animation from '../../../public/animation.png';
import memolis from '../../../public/memolis.png';
import news from '../../../public/news.png';
import { Selected } from '../../App';
import js from './works.json';

type Props = {
  selected:Selected
};

type JsonType={
  [key:string]:{
    'url':Array<string>,
    'description':string,
    'languages':Array<string>
  }
}

function Works({selected}:Props) {

  const [onMouse, setOnMouse] = useState<boolean>(false)

  const worksObj:JsonType = {...js}
  const languageObj:{[key:string]:JSX.Element} = {'JS':<JS/>,'TS':<TS/>,'Jquery':<Jquery/>,'React':<React/>,'MySQL':<MySQL/>,'PHP':<PHP/>,'PostgreSQL':<PostgreSQL/>,'NodeJs':<NodeJS2/>}
  const paths:Array<string> = [memolis, ccc, ecommerce, satellite, animation, news, portfolio]

  return (

    <Main
      className='works'
      show={selected.current==2?1:0}
      direction={selected.current-selected.prev<0?1:0}
    >
      {/* <h1>Works</h1> */}

      <div className='worksFlex'>

        {Object.keys(worksObj).map((val:string, key:number)=>{
          return (
            <Fragment key={key}>
              <div className='WFchild'>
                  
                <LinkDiv bg={paths[key]} onmouse={onMouse?1:0} onMouseOver={()=>setOnMouse(true)} onMouseLeave={()=>setOnMouse(false)}>

                  <div className='linkFlex'>

                    {worksObj[val]['url'][0] &&
                      <div className='demo'>
                        <a href={worksObj[val]['url'][0]} target='_blank'>
                          <Laptop/>
                          <span><b><u>Demo</u></b></span>
                        </a>
                      </div>
                    }
                    <div className='github'>
                      <a href={worksObj[val]['url'][1]} target='_blank'>
                        <Github/>
                        <span><b><u>Github</u></b></span>
                      </a>
                    </div>

                  </div>
                  
                </LinkDiv>

                <h2>{[val]}</h2>

                <p>{worksObj[val]['description']}</p>

                <div className='iconFlex'>
                  {worksObj[val]['languages'].map((lang:string, key:number)=>{
                    return <Fragment key={key}>{languageObj[lang]}</Fragment>
                  })}
                </div>

              </div>
            </Fragment>
          )
        })}

      </div>
    </Main>
  )
};

export default Works;