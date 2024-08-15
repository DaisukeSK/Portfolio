import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function Mobile() {

    return (
        <div className='mobile'>

            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                </Routes>

                <footer>&copy;2024 DaisukeSK All Rights Reserved.</footer>

            </BrowserRouter>
            
        </div>

    )
};

export default Mobile;