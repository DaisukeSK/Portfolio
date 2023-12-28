
import { Main } from '../StyledComponents'
import {Selected} from '../../App'

type Props = {
  selected:Selected
};


function Contact({selected}:Props) {


  return (
    <>
      <Main
      className='contact'
      style={{
        // opacity:props.selected.current==3?1:0,
        // backgroundColor:'#A6A6A680'
      }}
      show={selected.current==3?1:0}
      // block={props.display}
      direction={selected.current-selected.prev<0?1:0}
      aa={selected.current==3 || selected.prev==3? 1:0}
      >
        
      
      <form method='post' action='../../../api/form.php'>

        <h1>Contact</h1>
        {/* <p>Please feel free to send any inquiries.</p> */}


<div className='formFlex'>
      <label>Your name:</label>
        <input type='text' name='userName' placeholder=' Your name.' required/>
        <label>E-mail:</label>
        <input type='email'  name='email' placeholder=' Your E-mail address.' required/>
        <label>Message:</label>
        <textarea name='inquiry' cols={50} rows={5} placeholder=' Message.' required></textarea>
        <input type='submit' value='Send'/>

</div>

      </form>
      </Main>
    </>
  )
}

export default Contact
