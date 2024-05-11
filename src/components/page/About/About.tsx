import { Main } from '../../StyledComponents';
import { AppContext } from '../../../App';
import { useContext } from 'react';
import IconFlex from './IconFlex'

function About() {

    const { selected } = useContext(AppContext)

    return (
        <Main
            className='about'
            show={selected.current==1?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <div className='introduction'>
                <p>
                    Hi, my name is Daisuke Seki, a full stack web developer.<br/>
                    I'm always excited about learning new things and improving myself skills.
                    I hope you will see and enjoy those applications I made.<br/><br/>

                    My coding experience just started one day with a simple question.
                    --"How can a web site be made?"--<br/>
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

                <hr/>

                <section className="skills">

                    <h2>Skills</h2>
                    <h3>Languages:</h3>

                    <div className='skillsFlex'>

                        <section className='iconFlex'>
                            <div className='title'>Front-end</div>
                            <IconFlex icons={['HTML','CSS','JavaScript','TypeScript','Sass','jQuery','React']}/>
                        </section>

                        <section className='iconFlex'>
                            <div className='title'>Back-end</div>
                            <IconFlex icons={['PHP','Node.js']}/>
                        </section>

                        <section className='iconFlex'>
                            <div className='title'>Database</div>
                            <IconFlex icons={['MySQL','PostgreSQL']}/>
                        </section>

                        <section className='iconFlex'>
                            <div className='title'>Others</div>
                            <IconFlex icons={['Fortran']}/>
                        </section>

                    </div>

                    <h3>Tools, Services:</h3>

                    <div className='skillsFlex'>
                        <IconFlex icons={['Git','Github','VSCode','Render','Vercel','Hostinger','Inkscape']}/>
                    </div>

                </section>

                <hr/>

                <section className='experienceDiv'>

                    <div className='education'>
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <div className='title'>Web Application Development Diploma</div>
                                <div className='place'>
                                    Cornerstone International Community College of Canada, Vancouver, BC<br/>
                                    (September 2022 - December 2023)
                                </div>
                            </li>
                            <li>
                                <div className='title'>Bachelor's degree in Science and Engineering</div>
                                <div className='place'>Kansai University, Osaka, Japan (April 2010 - September 2014)</div>
                            </li>
                        </ul>
                    </div>

                    <div className='work'>
                        <h2>Work</h2>
                        <ul>
                            <li>
                                <div className='title'>Production Management (building materials)</div>
                                <div className='place'>Okabe co., ltd. - Tokyo, Japan (April 2015 - March 2018)</div>
                            </li>
                            <li>
                                <div className='title'>Warehouse Worker</div>
                                <div className='place'>United Floral Inc. - Burnaby, BC Canada (April 2023 - Present)</div>                                
                            </li>
                            <li className='etc'>etc.</li>
                        </ul>
                    </div>

                </section>

            </div>
            
        </Main>
    )
};

export default About;