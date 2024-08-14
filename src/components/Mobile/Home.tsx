// import { AppContext } from "../../App";
// import { useContext } from "react";

// import { Main } from "./StyledComponents";

// import SideMenu from "./Pages/SideMenu";

// import Home from "./Pages/Home";
// import About from "./Pages/About/About";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact/Contact";
// import { iconObj } from '../Media';
import { Link } from 'react-router-dom';

import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Email from '../icons/Email';
// import { IconFlex };
import IconFlex from './IconFlex';

import photo from '../../../public/me.png'

function Home() {

    // const { selected, setAside } = useContext(AppContext)

    return (

        <main className='home'>
        
            {/* <Main selected={selected.current} onClick={()=>setAside(false)}> */}

                {/* <SideMenu></SideMenu>
                
                {
                selected.current==0? <Home/>
                :
                selected.current==1? <About/>
                :
                selected.current==2? <Projects/>
                :
                selected.current==3 && <Contact/>
                } */}

                <section className='selfie'>

                    <img src={photo}/>

                    <div className='right'>

                    </div>

                </section>
                <h1>Hi, I'm Daisuke</h1>
                <div className='beneathH1'>Full Stack Web Developer</div>

                {/* <hr className='beneath'/> */}

                <p className='introduction'>
                    I'm a full-stack web developer with enthusiasm and curiosity about exploring uknown and creating new things.<br/>

                    thank you for your visit, I hope you will like my works.

                </p>

                <hr/>

                <section className='skills'>
                    <h2>Tech Stack</h2>
                    <div className='title'>Front-End</div>
                    <IconFlex icons={['HTML','CSS','JavaScript','TypeScript','Sass','@jQuery','React']}/>
                    <hr/>
                    <div className='title'>Back-End, Data-Base</div>
                    <IconFlex icons={['PHP','Node.js','MySQL','@PostgreSQL']}/>
                    <IconFlex icons={[]}/>

                    <Link to={'/projects'} className='seeProjects' target='_blank'>

                    <svg width='10' height='8'>
                        <path d='m0,0 l10,4 l-10,4z' fill='#ffffff'/>
                    </svg>
                    See Projects
                    
                    </Link>

                </section>

                <hr/>

                <section className='contact'>

                    {/* <h2>Contact</h2> */}

                    <h2>Say hi to me!</h2>
                    <p>Please feel free to contact me for any inquiries.</p>          
                    <div className='contactFlex'>
                        <a href='https://github.com/DaisukeSK' target='_blank'>
                            <Github where='contact'/>
                            <div>Github</div>
                        </a>
                        <a href='https://www.linkedin.com/in/daisuke-seki-670202261/' target='_blank'>
                            <LinkedIn/>
                            <div>LinkedIn</div>
                        </a>
                        <a href='mailto: skd.itkn@gmail.com'>
                            <Email/>
                            <div>E-mail</div>
                        </a>
                    </div>
                    
                    <form method='post' action='../../../api/form.php'>
                        {/* <div className='formFlex'> */}
                            <input type='text' name='userName' placeholder="Name:" required/>
                            <input type='email' name='email' placeholder="E-mail:" required/>
                            <textarea name='inquiry' rows={5} placeholder="Message:" required></textarea>
                            <input type='submit' value='Send'/>
                        {/* </div> */}
                    </form>

                </section>

                
                {/* <Link to={'/header'}>Link</Link> */}

                
                
            {/* </Main> */}
        </main>
    )
};

export default Home;