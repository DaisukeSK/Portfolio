import { useState } from 'react'
import { Main } from '../StyledComponents'

function Inquiry(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main
      className='inquiry'
      style={{
        // opacity:props.selected.current==1?1:0,
        // backgroundColor:'#F2767680',
        // background: 'linear-gradient(navy,rgb(60, 60, 255))',
      }}
      show={props.selected.current==4?1:0}
      // block={props.display}
      direction={props.selected.current-props.selected.prev<0?1:0}
      aa={props.selected.current==4 || props.selected.prev==4? 1:0}
      >
        <h1>Thank you for your inquiry</h1>
        <p>Your inquiry has successfully been sent.<br/>
        I will reply in a few days.

        </p>

        {/* <a href='http://localhost:5174/'>Back to Homepage</a> */}
        <a href='https://portfolio2023dec13.000webhostapp.com/index.html'>Back to Homepage</a>
        
        

      </Main>
    </>
  )
}

export default Inquiry
