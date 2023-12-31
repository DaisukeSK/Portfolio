import { Main } from '../StyledComponents';
import path from "../../../public/me.png";
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
      aa={selected.current==1 || selected.prev==1? 1:0}
    >
      <h1>About Me</h1>

      <section>

        <div className='aboutLeft'>{/* Left side */}
          <img src={path}/>
          <p className='introduction'>
            Hi, my name is Daisuke Seki, a junior web developer.<br/>
            Currently studying programming at CICCC, 
            always improving my technical abilities while working on team projects,
            and excited about utilizing them in a professional scene and fulfilling real clients' demands.
          </p>
        </div>

        <article>{/* Right side */}

          <h3>Experience</h3>
          <div className='expDiv'>
            <h4>Education:</h4>
            <ul>
              <li>
                Web Application Development Diploma (September 2022 - present)<br/>
                <span>
                  Cornerstone International Community College of Canada,<br/>
                  Vancouver, BC
                </span>
              </li>
              <li>
                Bachelor's degree in Science and Engineering (September 2014)<br/>
                <span>Kansai University, Osaka, Japan</span>
              </li>
            </ul>

            <h4>Work:</h4>
            <ul>
              <li>Production Management (April 2015 - March 2018)<br/><span>Okabe co., ltd. - Tokyo, Japan</span></li>
              <li>Warehouse Worker (April 2018 - September 2022)<br/><span>Multiple companies - Osaka, Japan</span></li>
              <li>Warehouse Worker (April 2023 - Present)<br/><span>United Floral Inc. - Burnaby, BC Canada</span></li>
            </ul>
          </div>

          <h3>Technical Skills</h3>
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
              <MySQL/>
              <NodeJS/>
              <PostgreSQL/>
            </div>
          </div>

          <h3>Soft Skills</h3>
          <div className='setBG'>
            Quick Learner | Attentive | Problem-solving | Teamwork | Adaptability | Strong work ethic
          </div>

        </article>

      </section>
    </Main>
  );
};

export default About;
