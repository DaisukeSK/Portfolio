import { Main } from '../../StyledComponents';
import pathName from '../../../../public/me5-2-5.png';
import { Selected } from '../../../App';
import Animation from './Animation';

type Props = {
    selected:Selected
};

function Home({selected}:Props) {

    return (
        
        <Main
            className='home'
            style={{height: '100vh'}}
            show={selected.current==0?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <div className='left'>
                <img src={pathName}/>
            </div>

            <div className='right'>
                <h1>Daisuke's portfolio</h1>
                <h2>-Full Stack Developer-</h2>
                <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>
                {selected.current==0 && <Animation/>}
            </div>

        </Main>
    )
};

export default Home;