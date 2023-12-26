import { useState } from 'react'
import { Main } from '../StyledComponents'
// import pathName from '../../../public/me9.png'
import pathName from '../../../public/me2.png'
import Sunglasses from './Sunglasses'

function Home(props) {
  const [count, setCount] = useState(0)

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
      show={props.selected.current==0?1:0}
      // block={props.display}
      direction={props.selected.current-props.selected.prev<0?1:0}
      aa={props.selected.current==0 || props.selected.prev==0? 1:0}
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
