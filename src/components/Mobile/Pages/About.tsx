import JS from '../../icons/JS';
import TS from '../../icons/TS';
import HTML from '../../icons/HTML';
import CSS from '../../icons/CSS';
import Sass from '../../icons/Sass';
import Jquery from '../../icons/Jquery';
import React from '../../icons/React';
import MySQL from '../../icons/MySQL';
import PHP from '../../icons/PHP';
import NodeJS from '../../icons/NodeJS';
import PostgreSQL from '../../icons/PostgreSQL';
import Git from '../../icons/Git';
import Github from '../../icons/Github';
import VSCode from '../../icons/VSCode';
import Inkscape from '../../icons/Inkscape';
import Render from '../../icons/Render';
import Vercel from '../../icons/Vercel';
import Hostinger from '../../icons/Hostinger';

function About() {

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


            <section className='skills'>

                <div className='front-end'>
                    <div className='title'>Front-end</div>
                    <HTML/>
                    <CSS/>
                    <JS/>
                    <TS/>
                    <Sass/>
                    <Jquery strokeColor={'#ffffff'}/>
                    <React/>
                </div>

                <div className='flex'>
                    <div className='back-end'>
                        <div className='title'>Back-end</div>
                        <PHP/>
                        <NodeJS/>
                    </div>

                    <div className='database'>
                        <div className='title'>Data-base</div>
                        <MySQL/>
                        <PostgreSQL strokeColor={'#ffffff'}/>
                    </div>
                </div>

                <div className='tools'>
                    <div className='title'>Tools, Services</div>
                    <Git/>
                    <Github where='about'/>
                    <VSCode/>
                    <Vercel/>
                    <Render/>
                    <Hostinger/>
                    <Inkscape/>
                </div>





            </section>

            
            
        </div>
    )
};

export default About;