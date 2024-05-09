import { Main } from '../StyledComponents';
import { AppContext } from '../../App';
import Email from '../icons/Email';
import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';
import { useContext } from 'react';

// type Props = {
//     selected: Selected
// };

function Contact() {

    const { selected } = useContext(AppContext)

    return (
        <Main
            className='contact'
            show={selected.current==3?1:0}
            direction={selected.current-selected.prev<0?1:0}
            selected={selected.current}
        >
            <h1>Say hi to me!</h1>
            <p>Please feel free to contact me for any inquiries.</p>
            <hr/>

            <div className="contactFlex">

                <div className='contactFlexLeft'>
                    <a href='https://github.com/DaisukeSK' target='_blank'>
                        <div>Github</div>
                        <Github where='contact'/>
                    </a>
                    <a href='https://www.linkedin.com/in/daisuke-seki-670202261/' target='_blank'>
                        <div>LinkedIn</div>
                        <LinkedIn/>
                    </a>
                    <a href='mailto: skd.itkn@gmail.com'>
                        <div>E-mail</div>
                        <Email/>
                    </a>
                </div>

                <div className='contactFlexRight'>
                    <form method='post' action='../../../api/form.php'>
                        <div className='formFlex'>
                        <label>Name:</label>
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