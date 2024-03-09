import { Main } from '../StyledComponents';
import path from "../../../public/me4-5.png";
import JS from '../icons/JS';
import TS from '../icons/TS';
import HTML from '../icons/HTML';
import CSS from '../icons/CSS';
import Jquery from '../icons/Jquery';
import React from '../icons/React';
import MySQL from '../icons/MySQL';
import PHP from '../icons/PHP';
import NodeJS from '../icons/NodeJS';
import PostgreSQL from '../icons/PostgreSQL';
import { Selected } from '../../App';

type Props = {
  selected:Selected;
};

function About({selected}:Props) {
  return (
    <Main
      className='about'
      show={selected.current==1?1:0}
      direction={selected.current-selected.prev<0?1:0}
      selected={selected.current}
    >
      {/* <h1>About Me</h1> */}


        <section className='aboutLeft'>{/* Left side */}
          <img src={path}/>
          <p className='introduction'>
            Hi, my name is Daisuke Seki, a full stack web developer.<br/>
            Graduated from CICCC, and
            always improving my technical abilities while working on team projects,
            and excited about utilizing them in a professional scene and fulfilling real clients' demands.
          </p>

          <div className='leftDiv'>

            <h3>Technical Skills</h3>
            <div className='iconContainer'>
              <div className='iconFlex'>
                <HTML/>
                <CSS/>
                <JS/>
                <TS/>
                <Jquery strokeColor={'#ffffff'}/>
                <React/>
              </div>
              <div className='iconFlex'>
                <PHP/>
                <NodeJS/>
                <MySQL/>
                <PostgreSQL strokeColor={'#ffffff'}/>
              </div>
            </div>

          </div>


        </section>

        <section className='aboutRight'>{/* Right side */}

        <div className='rightDiv'>
          <h3>Experience</h3>
          <div className='expDiv'>
            <h4>Education:</h4>
            <ul>
              <li>

                <div className='title'>Web Application Development Diploma</div>
                <div className='place'>Cornerstone International Community College of Canada, Vancouver, BC</div>
                <div className='period'>(September 2022 - December 2023)</div>
                
                {/* <p>Learned programming languages listed below and worked on multiple team projects.</p> */}
              </li>
              <li>

                <div className='title'>Bachelor's degree in Science and Engineering</div>
                <div className='place'>Kansai University, Osaka, Japan</div>
                <div className='period'>(April 2010 - September 2014)</div>
                
                {/* <p>Majored in machine engineering and studied relevant subjects such as mathematic, physics, chemistry, programming etc.</p> */}
              </li>
            </ul>

            <h4>Work:</h4>
            <ul>
              <li>
                <div className='title'>Production Management (building materials)</div>
                <div className='place'>Okabe co., ltd. - Tokyo, Japan</div>
                <div className='period'>(April 2015 - March 2018)</div>
{/* 
                <ul>

                <li>
                    Proceeded with the production process starting with material until products are completed.

                  </li>
                  <li>
                  Controlled drawings, specifications, costs, processes, production quantity and quality of products which I was in charge of.

                  </li>
                  <li>
                  Dealt with custom-order products too according as construction sites' needs.

                  </li>
                </ul> */}
                
                
              </li>

              {/* <li>

                <div className='title'>Warehouse Worker</div>
                <div className='place'>Multiple companies - Osaka, Japan</div>
                <div className='period'>(April 2018 - September 2022)</div>
                 <ul>
                  <li>Treated chilled and frozen food products at multiple warehouse.</li>
                  <li>Performed warehouse laborer duties including storing, picking, packing, checking, distributing.</li>
                 </ul>
                
                
              </li> */}
              
              <li>

                <div className='title'>Warehouse Worker</div>
                <div className='place'>United Floral Inc. - Burnaby, BC Canada</div>
                <div className='period'>(April 2023 - Present)</div>
                
                
                {/* 
                <ul>
                  <li>Treating plants at the warehouse.</li>
                  <li>Performing warehouse laborer duties including storing, picking, packing, checking, distributing.</li>
                 </ul> */}
              </li>
            </ul>
          </div>


        </div>


          {/* <h3>Technical Skills</h3>
          <div className='iconContainer'>
            <div className='iconFlex'>
              <HTML/>
              <CSS/>
              <JS/>
              <TS/>
              <Jquery/>
              <React/>
            </div>
            <div className='iconFlex'>
              <PHP/>
              <NodeJS/>
              <MySQL/>
              <PostgreSQL/>
            </div>
          </div>

          <h3>Soft Skills</h3>
          <div className='setBG'>
            Quick Learner | Attentive | Problem-solving | Teamwork | Adaptability | Strong work ethic
          </div> */}

          <div className='rightDiv'>

            <h3>Soft Skills</h3>
            <div className='setBG'>
              Quick Learner | Attentive | Problem-solving | Teamwork | Adaptability | Strong work ethic
            </div>
          </div>

        </section>

    </Main>
  )
};

export default About;