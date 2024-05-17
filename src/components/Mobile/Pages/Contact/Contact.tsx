import Github from "../../../icons/Github";
import LinkedIn from "../../../icons/LinkedIn";
import Email from "../../../icons/Email";

function Contact() {

    return (
        <div className='contact'>

            <h1>Say hi to me!</h1>
            <p>Please feel free to contact me for any inquiries.</p>          
            <div className='contactFlex'>
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
            
            <form method='post' action='../../../api/form.php'>
                <div className='formFlex'>
                    <input type='text' name='userName' placeholder="Name:" required/>
                    <input type='email' name='email' placeholder="E-mail:" required/>
                    <textarea name='inquiry' rows={5} placeholder="Message:" required></textarea>
                    <input type='submit' value='Send'/>
                </div>
            </form>


            
        </div>
    )
};

export default Contact;