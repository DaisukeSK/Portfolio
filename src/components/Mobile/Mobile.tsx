// import { AppContext } from "../../App";
// import { useContext } from "react";

// import { Main } from "./StyledComponents";

// import SideMenu from "./Pages/SideMenu";

// import Home from "./Pages/Home";
// import About from "./Pages/About/About";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact/Contact";
// import { iconObj } from '../Media';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';

// import { IconFlex };
// import IconFlex from './IconFlex';

// import photo from '../../../public/me.png'
// import Header from './Header';
import Home from './Home';
import Projects from './Projects';

function Mobile() {

    // const { selected, setAside } = useContext(AppContext)

    return (
        <div className='mobile'>

            <BrowserRouter>


                {/* <Header></Header> */}
                <Routes>

                <Route path='/' element={<Home/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                </Routes>

                <footer>&copy;2024 DaisukeSK All Rights Reserved.</footer>

            
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


                    
                    
                {/* </Main> */}
            </BrowserRouter>
        </div>

    )
};

export default Mobile;