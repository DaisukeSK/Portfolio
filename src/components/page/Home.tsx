
import { Main } from '../StyledComponents'
// import pathName from '../../../public/me9.png'
import pathName from '../../../public/me2.png'
import {Selected} from '../../App'

type Props = {
  selected:Selected
};


function Home({selected}:Props) {

  return (
    <>
      <Main
      className='home'
      style={{
        // opacity:props.selected.current==0?1:0,
        // backgroundColor:'#5E5EF580'
        paddingTop: 0,
        // boxSizing: 'border-box',
        
      }}
      show={selected.current==0?1:0}
      // block={props.display}
      direction={selected.current-selected.prev<0?1:0}
      aa={selected.current==0 || selected.prev==0? 1:0}
      >

        <div className='left'>
          <img src={pathName}/>
          {/* <Sunglasses></Sunglasses> */}

        </div>

        <div className='right'>

        <h1>Daisuke's portfolio</h1>
        <h2>-Full Stuck Developer-</h2>
        <p>with enthusiasm and curiosity about exploring uknown and creating new things.</p>

        </div>
        
        
      </Main>
    </>
  )
}

export default Home