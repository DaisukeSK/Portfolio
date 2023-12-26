import { useState } from 'react'
import { Main } from '../StyledComponents'

function Contact(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main
      className='contact'
      style={{
        // opacity:props.selected.current==3?1:0,
        // backgroundColor:'#A6A6A680'
      }}
      show={props.selected.current==3?1:0}
      // block={props.display}
      direction={props.selected.current-props.selected.prev<0?1:0}
      aa={props.selected.current==3 || props.selected.prev==3? 1:0}
      >
        
      
      <form method='post' action='../../form.php'>

        <h1>Contact</h1>
        {/* <p>Please feel free to send any inquiries.</p> */}


<div className='formFlex'>
      <label>Your name:</label>
        <input type='text' name='userName' placeholder=' Your name.' required/>
        <label>E-mail:</label>
        <input type='email'  name='email' placeholder=' Your E-mail address.' required/>
        <label>Message:</label>
        <textarea name='inquiry' cols='50' rows='5' placeholder=' Message.' required></textarea>
        <input type='submit' value='Send'/>

</div>

      </form>
      </Main>
    </>
  )
}

export default Contact
