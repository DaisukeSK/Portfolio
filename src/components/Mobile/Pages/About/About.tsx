import { useRef, useState, useEffect } from 'react';

import IconFlex from './IconFlex';

function About() {

    
    const right_ref=useRef<HTMLInputElement>(null)

    const [flexRightWidth, setFlexRightWidth] =useState<number>()

    // let flexRightWidth:number|undefined;
    
    useEffect(()=>{
        setFlexRightWidth(right_ref?.current?.offsetWidth)
        // flexRightWidth=right_ref?.current?.offsetWidth
        console.log("Ref:",flexRightWidth)
    },[])

    return (
        <div className='about'>

            <p>
                Hi, my name is Daisuke Seki, a full stack web developer.<br/>
                I'm always excited about learning new things and improving myself skills.
                I hope you will see and enjoy those applications I made.<br/><br/>

                My coding experience just started one day with a simple question.
                <br/>--"How can a web site be made?"--<br/>
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


            <section className='skills'>

                <div className='languages'>

                    <div className='left'>
                        <h3>Front-end</h3>
                        <IconFlex icons={['HTML','CSS','JavaScript','TypeScript','Sass','jQuery','React']}/>
                    </div>

                    <div className='right' ref={right_ref}>
                        <div>
                            <h3>Back-end</h3>
                            <IconFlex icons={['PHP','Node.js']}/>
                        </div>
                        <div>
                            <h3>Database</h3>
                            <IconFlex icons={['MySQL','PostgreSQL']}/>
                        </div>
                    </div>
                </div>

                <div className='tools'>

                    <h3>Tools, Services</h3>

                    <div className='flex'>
                        <IconFlex icons={['Git','Github','VSCode','Vercel']}/>
                        <IconFlex icons={['Render','Hostinger','Inkscape']} width={right_ref?.current?.offsetWidth}/>
                    </div>

                </div>

            </section>

            <hr/>

            <section className='experience'>

                <h3>Education</h3>
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
                        <div className='place'>
                            Kansai University, Osaka, Japan<br/>
                            (April 2010 - September 2014)
                        </div>
                    </li>
                </ul>

                <h3>Work</h3>
                <ul>
                    <li>
                        <div className='title'>
                            Production Management<br/>
                            (building materials)
                        </div>
                        <div className='place'>
                            Okabe co., ltd. - Tokyo, Japan<br/>
                            (April 2015 - March 2018)
                        </div>
                    </li>
                    <li>
                        <div className='title'>Warehouse Worker</div>
                        <div className='place'>
                            United Floral Inc. - Burnaby, BC Canada<br/>
                            (April 2023 - Present)
                        </div>                                
                    </li>
                    <li className='etc'>etc.</li>
                </ul>

            </section>
            
        </div>
    )
};

export default About;