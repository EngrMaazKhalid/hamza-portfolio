import React from 'react'
import classes from './Contact.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import axios from "axios";
import PhoneIcon from '@mui/icons-material/Phone';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import FormSchema from './Schemas/FormSchema';
import { useFormik } from 'formik'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {motion} from 'framer-motion'
const initialValues =
{
    name: "",
    email: "",
    subject: "",
    message: ""
};

const Contact = ()=>{
    const { values, errors, touched, status, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            axios({
                method: "POST",
                url: "https://formspree.io/f/xjvdneoq",
                data: values
              }).then(response => {
            console.log(values)
            action.resetForm();
         
            action.setStatus("Message sent!" );  
              })
            }
    })
    console.log(errors)



    return(<motion.div id='contact' className={classes['contact']} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
        <div className={classes['Title-sec']}>
    <h1 className={classes['Title-sec-h1']}> Get in Touch</h1>
    <span className={classes['Title-bg']}>Contact</span>
    </div>
    <div className={classes['content']}>
    <div className={classes['row']}>
        <div className={classes['col-8']}>
            <h3 className={classes['custom-title']}>
                Contact me!
            </h3>
            <p className={classes['contac-para']}>
            {/* Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. */}
            Thank you for taking the time to explore my portfolio website. If you have any inquiries or would like to get in touch, please don't hesitate to reach out. You can reach me by filling out the contact form, sending an email, or connecting with me on LinkedIn. I look forward to hearing from you!
            </p>
            <div className={classes['information']}>
        
        <LocationOnIcon sx={{fontSize:'3.5rem'}} className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>city</span>
        Lahore, Pakistan
            </p>
            </div>
          <a href='mailto:Hamzashaukat2001@gmail.com'>  <div className={classes['information']}>
        
        <MailIcon sx={{fontSize:'3.5rem'}}  className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>Email</span>
        Hamzashaukat2001@gmail.com
            </p>
            </div>
            </a>
         <div className={classes['information']}>
        
        <PhoneIcon sx={{fontSize:'3.5rem'}} className={classes['icon']} />
        
        <p className={classes['info-para']}>
        <span className={classes['info-head']}>call me</span>
            +923044197010
            </p>
            </div>
           
            <ul className={classes['social-ul']}>
                {/* <li className={classes['social-li']}><FacebookRoundedIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li>
                <li className={classes['social-li']}><TwitterIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></li> */}
                <li className={classes['social-li']}><a href=' https://www.instagram.com/hamzashaukat111/'><InstagramIcon className={classes['social-iconIns']} sx={{fontSize:'4rem', transition:'all.2s'}}/></a></li>
                <li className={classes['social-li']}><a href='https://github.com/hamzashaukat111'><GithubIcon className={classes['social-icons']} sx={{fontSize:'4rem', transition:'all.2s'}}/></a></li>
                <li className={classes['social-li']}><a href=' https://www.linkedin.com/in/hamza-shaukat-1b3783210/'> <LinkedInIcon className={classes['social-icon']} sx={{fontSize:'4rem', transition:'all.2s'}}/></a></li>
            </ul>
        </div>
        <div className={classes['form-sec']}>
            <form  className={classes['contactform']} onSubmit={handleSubmit}>
                <div className={classes['row']}>
                    <div className={classes['col-11']}>
                        <div className={classes['formgroup']}>
                            <input type='text' name='name' id='name' placeholder='YOUR NAME' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<p className={classes['form-error']}>{errors.name}</p>) : null}
                        </div>
                    </div>
                    <div className={classes['col-11']}>
                        <div className={classes['formgroup']}>
                            <input type='email' name='email' id='email' placeholder='YOUR EMAIL' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<p className={classes['form-error']}>{errors.email}</p>) : null}
                        </div>
                    </div>
                    <div className={classes['col-112']}>
                        <div className={classes['formgroup']}>
                            <input type='text' name='subject' id='subject' placeholder='YOUR SUBJECT' value={values.subject} onChange={handleChange} onBlur={handleBlur} />
                            {errors.subject && touched.subject ? (<p className={classes['form-error']}>{errors.subject}</p>) : null}
                        </div>
                    </div>
                    <div className={classes['col-112']}>
                        <div className={classes['formgroup']}>
                            <textarea name='message' placeholder='YOUR MESSAGE' id='message' value={values.message} onChange={handleChange} onBlur={handleBlur} />
                            {errors.message && touched.message ? (<p className={classes['form-error']}>{errors.message}</p>) : null}
                        </div>
                    </div>
                    <div className={classes['col-112']}>
                    <button type='submit' value="Send Message"  className={classes['button']}>
                        {console.log(handleSubmit)}
                        <span className={classes['button-text']}> SEND</span>
                            <span className={classes['button-icon']}>
                             <SendIcon sx={{ fontSize:'3rem'}} />
                             </span>
                             </button>
                             {errors.message && touched.message && errors.subject && touched.subject && errors.email && touched.email && errors.name && touched.name  ? null : (<p className={classes['form-success']}>{status}</p>)}
                    </div>

                </div>
            </form>
        </div>
    </div>
    </div>
    </motion.div>)
}

export default Contact;