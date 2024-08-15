import Header from './Header.tsx';
import About from './About/About.tsx';
import Contact from './Contact.tsx';
import Home from './Home.tsx';
import Projects from './Projects/Projects.tsx';

function LapTop() {

    return (
        <div className='laptop'>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
};

export default LapTop;