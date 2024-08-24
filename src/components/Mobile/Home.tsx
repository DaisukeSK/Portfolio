import { Link } from 'react-router-dom';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Email from '../icons/Email';
import IconFlex from './IconFlex';
import photo from '../../../public/me.png'

function Home() {

    return (

        <main className='home'>

            <section className='selfie'>
                <img src={photo}/>
            </section>
            
            <h1>Hi, I'm Daisuke</h1>
            <div className='beneathH1'>Full Stack Web Developer</div>

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

                <Link to={'/projects'} className='seeProjects' target='_blank'>
                    <svg width='10' height='8'>
                        <path d='m0,0 l10,4 l-10,4z' fill='#ffffff'/>
                    </svg>
                    See Projects
                </Link>

            </section>

            <hr/>

            <section className='contact'>

                <h2>Say hi to me!</h2>
                <p>Please feel free to contact me for any inquiries.</p>          
                <div className='contactFlex'>

                    <a href='https://github.com/DaisukeSK' target='_blank'>
                        <Github/>
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
                    <input type='text' name='userName' placeholder="Name:" required/>
                    <input type='email' name='email' placeholder="E-mail:" required/>
                    <textarea name='inquiry' rows={5} placeholder="Message:" required></textarea>
                    <input type='submit' value='Send'/>
                </form>

            </section>
            
        </main>
    )
};

export default Home;