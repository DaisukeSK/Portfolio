// import { AppContext } from "../../App";
// import { useContext } from "react";

// import { Main } from "./StyledComponents";

// import SideMenu from "./Pages/SideMenu";

// import Home from "./Pages/Home";
// import About from "./Pages/About/About";
// import Projects from "./Pages/Projects";
// import Contact from "./Pages/Contact/Contact";

import photo from '../../../public/me.png'

function M_Main() {

    // const { selected, setAside } = useContext(AppContext)

    return (

        <>
        
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

                <h1>Hi, I'm Daisuke</h1>
                <div className='beneathH1'>Full Stack Developer</div>
                <div className='selfie'>

                    <img src={photo}/>

                    <div className='right'>

                    </div>

                </div>

                
                
            {/* </Main> */}
        </>
    )
};

export default M_Main;