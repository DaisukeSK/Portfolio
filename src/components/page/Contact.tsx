import { Main } from '../StyledComponents';
import { Selected } from '../../App';
import Email from '../icons/Email';
import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';

type Props = {
  selected: Selected
};

function Contact({selected}:Props) {
  return (
    <Main
      className='contact'
      show={selected.current==3?1:0}
      direction={selected.current-selected.prev<0?1:0}
      aa={selected.current==3 || selected.prev==3? 1:0}
    >
      {/* <h1>Contact</h1> */}
      <p>Please feel free to contact me for any inquiries.</p>

      <div className="contactFlex">

        <div className='contactFlexLeft'>
          <a href='https://github.com/DaisukeSK' target='_blank'><Github/></a>
          <a href='https://www.linkedin.com/in/daisuke-seki-670202261/' target='_blank'><LinkedIn/></a>
          <a href='mailto: skd.itkn@gmail.com'><Email/></a>
          
        </div>

        <div className='contactFlexRight'>

          <form method='post' action='../../../api/form.php'>
            <div className='formFlex'>
              <label>Your name:</label>
              <input type='text' name='userName' required/>
              <label>E-mail:</label>
              <input type='email' name='email' required/>
              <label>Message:</label>
              <textarea name='inquiry' cols={50} rows={5} required></textarea>
              <input type='submit' value='Send'/>
            </div>
          </form>

        </div>

      </div>

    </Main>
  )
};

export default Contact;