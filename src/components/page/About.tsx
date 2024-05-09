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
import Fortran from '../icons/Fortran';
import { AppContext } from '../../App';
import { useContext, useState, Fragment } from 'react';
import IconFlex from './IconFlex'

// type Props = {
//     selected:Selected;
// };

function About() {

    const { selected } = useContext(AppContext)

    const [show, setShow]=useState<number>(NaN)

    const style = {
        border: '#00000000 3px solid',
        ':hover': {
            border: '#f060a0 3px solid'
        }
      };

    return (

        <Main
            className='about'
            show={selected.current==1?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
            style={{paddingTop: '100px'}}
        >
            <div className='introduction'>
                <p>
                    Hi, my name is Daisuke Seki, a full stack web developer.<br/>
                    {/* Graduated from CICCC, and
                    always improving my technical abilities while working on team projects,
                    and excited about utilizing them in a professional scene and fulfilling real clients' demands. */}

                    I'm always excited about learning new things and improving myself skills.
                    I hope you will see and enjoy those applications I made.<br/><br/>

                    {/* <div style={{marginTop:'10px',textDecoration:'underline'}}>How has my coding experience started?</div> */}

                    My coding experience just started one day with a simple question.
                    --"How can a web sight be made?"--<br/>
                    I just Googled and learned very basic of HTML and CSS.
                    Then I tried writing a very short simple code with Notepad, and tested it out with a browser.<br/>
                    It was such simple contents, but certainly showed what I had just coded, which was enough to make me excited.<br/>
                    --"It has infinite possibilities of web design."--<br/>
                    It spurred my interest and got me into coding.
                    I have explored multiple languages since then, and still get excited to see my own websites getting better and closer to other professional ones.<br/><br/>
                    
                    Now I believe it should be what I do for living.
                    It is about time I satisfied not just myself, but also the world with coding.<br/>
                    Also I believe it will take me to the next stage.
                </p>

                <section className="skills">

                    <h2>Skills</h2>

                    <h3>Languages:</h3>

                    <div className='skillsFlex'>
                        <section className='iconFlex'>
                            <div className='title'>Front-end</div>
                            {/* <div className='iconFlex'> */}
                            {/* {[<JS/>,<TS/>,<Jquery strokeColor={'#ffffff'}/>,<React/>].map((JSX,key)=>{
                                return (
                                    <div style={{position:'relative',margin:'15px 0'}}>

                                    {show==key && <div style={{position:'absolute',top:'-7px',left:'20px',color:'#000000'}}>{JSX}</div>}

                                    <div onMouseEnter={()=>setShow(key)} onMouseLeave={()=>setShow(NaN)}>
                                    
                                    {JSX}
                                    </div>

                                    </div>

                                )})} */}

                                <IconFlex icons={['HTML','CSS','JavaScript','TypeScript','Sass','jQuery','React']}/>

                                {/* <HTML/>
                                <CSS/>
                                <JS/>
                                <TS/>
                                <Jquery strokeColor={'#ffffff'}/>
                                <React/> */}
                            {/* </div>
                            <div className='iconFlex'> */}
                                
                            {/* </div> */}
                            {/* 
                            git
                            github
                            vscode
                            inkscape
                            vercel
                            render.com
                            
                            */}
                        </section>
                        <section className='iconFlex'>
                            <div className='title'>Back-end</div>
                            <IconFlex icons={['PHP','Node.js']}/>
                            {/* <PHP/>
                            <NodeJS/> */}
                        </section>

                        <section className='iconFlex'>
                            <div className='title'>Database</div>
                            <IconFlex icons={['MySQL','PostgreSQL']}/>
                            {/* <MySQL/>
                            <PostgreSQL strokeColor={'#ffffff'}/> */}
                        </section>

                        <section className='iconFlex'>
                            <div className='title'>Others</div>
                            <IconFlex icons={['Fortran']}/>
                            {/* <Fortran/> */}
                        </section>
                    </div>

                    <h3>Tools, Services:</h3>

                    <div className='skillsFlex'>

                        {/* <section className='iconFlex'> */}
                            {/* <div className='title'>Database</div> */}
                            <IconFlex icons={['Git','Github','VSCode','Render','Vercel','Hostinger','Inkscape']}/>
                            {/* <MySQL/>
                            <PostgreSQL strokeColor={'#ffffff'}/> */}
                        {/* </section> */}

                    </div>

                </section>


                <section className='experienceDiv'>
                    <div className='education'>
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <div className='title'>Web Application Development Diploma</div>
                                <div className='place'>Cornerstone International Community College of Canada, Vancouver, BC
                                
                                <br/>(September 2022 - December 2023)
                                </div>
                            </li>
                            <li>
                                <div className='title'>Bachelor's degree in Science and Engineering</div>
                                <div className='place'>Kansai University, Osaka, Japan (April 2010 - September 2014)</div>
                                {/* <div className='period'></div> */}
                            </li>
                        </ul>

                    </div>

                    <div className='work'>

                        <h2>Work</h2>
                        <ul>
                            <li>
                                <div className='title'>Production Management (building materials)</div>
                                <div className='place'>Okabe co., ltd. - Tokyo, Japan (April 2015 - March 2018)</div>
                                {/* <div className='period'></div> */}
                            </li>
                            <li>
                                <div className='title'>Warehouse Worker</div>
                                <div className='place'>United Floral Inc. - Burnaby, BC Canada (April 2023 - Present)</div>
                                {/* <div className='period'></div> */}
                                
                            </li>
                            <li className='etc'>etc.</li>
                        </ul>

                    </div>

                </section>

            </div>
            {/* <section className='aboutLeft'>
                <img src={path}/>
                <p className='introduction'>
                    Hi, my name is Daisuke Seki, a full stack web developer.<br/>
                    Graduated from CICCC, and
                    always improving my technical abilities while working on team projects,
                    and excited about utilizing them in a professional scene and fulfilling real clients' demands.
                </p>

                <div className='leftDiv'>
                    <h3>Technical Skills</h3>
                    <div className='iconFlex'>
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

            <section className='aboutRight'>

                <div className='rightDiv'>
                    <h3>Experience</h3>
                    <div className='expDiv'>
                        <h4>Education:</h4>
                        <ul>
                            <li>
                                <div className='title'>Web Application Development Diploma</div>
                                <div className='place'>Cornerstone International Community College of Canada, Vancouver, BC</div>
                                <div className='period'>(September 2022 - December 2023)</div>
                            </li>
                            <li>
                                <div className='title'>Bachelor's degree in Science and Engineering</div>
                                <div className='place'>Kansai University, Osaka, Japan</div>
                                <div className='period'>(April 2010 - September 2014)</div>
                            </li>
                        </ul>

                        <h4>Work:</h4>
                        <ul>
                            <li>
                                <div className='title'>Production Management (building materials)</div>
                                <div className='place'>Okabe co., ltd. - Tokyo, Japan</div>
                                <div className='period'>(April 2015 - March 2018)</div>
                            </li>
                            <li>
                                <div className='title'>Warehouse Worker</div>
                                <div className='place'>United Floral Inc. - Burnaby, BC Canada</div>
                                <div className='period'>(April 2023 - Present)</div>
                                
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='rightDiv'>
                    <h3>Soft Skills</h3>
                    <div className='setBG'>
                    Quick Learner | Attentive | Problem-solving | Teamwork | Adaptability | Strong work ethic
                    </div>
                </div>

            </section> */}
        </Main>
    )
};

export default About;