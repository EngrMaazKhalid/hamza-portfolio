import { getAccordionDetailsUtilityClass, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import classes from './portfolio.module.css'
import {motion} from 'framer-motion'
import { Box } from '@mui/system';
import ModalArea from './ModalArea';
const Portfolio = ()=>{
    const data =[
        { id: '01',
        name:"PakWaan-Recipes Application",
        img:require('./pakwaan.png'),
        
        src:`'Developed a Recipe Application using React Native and leveraging Azure Custom Vision, offering a user-
        friendly interface for exploring and discovering recipes.
        • Introduced a revolutionary "Scan" feature, enabling users to take a picture of random food and instantly identify the dish via Azure Custom Vision’s CNN Machine Learning Architecture. 
        '`,
        link: 'https://github.com/hamzashaukat111/Food-Recipe-Application-RN',},
        { id: '02',
        name:"Watermark Detection Web Application",
        img:require('./water.png'),

        src:`'  Developed a web application integrating the Azure Custom Vision model that enables users to upload an image and detects the presence of a watermark.
        • Implemented the functionality of uploading and presenting the probability of the accuracy of the presence
        of a watermark
        • Ensured model accuracy by training on an approximate extensive dataset of around 10,000 images of
        both watermark and non-watermark images. try it here: "https://hamzashaukat111.github.io/Watermark-Detection-Project/"
        '`,
        link:'https://github.com/hamzashaukat111/Watermark-Detection-Project',},
        { id: '03',
        name:"Outfitters Ecommerce Store- On-prem Oracle Database",
        img:require('./outfit.png'),
        
        src:`'Developed a fully functional e-commerce website using Node.js, HTML, CSS, Bootstrap, and JavaScript.
        Integrated an Oracle database for seamless CRUD operations.
        Enabled customers to create accounts, browse and purchase products, manage their cart, and proceed to checkout and also added an Employee Database.
        Established a live connection to an on-premises Oracle database for real-time data management .
        '`,link: 'https://github.com/hamzashaukat111/Outfitters-website',},
        // { id: '04',
        // name:"Trillo Project",
        // img:require('./trillo.png'),
        // src:'"A website of hotel chain where you can avail different packages and other information about hotel.It is made up of pure css, javascript and HTML."'},
        // { id: '05',
        // name:"Track Monthly Expenses",
        // img:require('./react project 1.png'),
        // src:'"This web app help user to track his monthly expenditure using graph. React.js, css is used to make this webapp."'},
        // { id: '06',
        // name:"Train Ticketing Webapp",
        // img:require('./train.png'),
        // src: '"Its a train ticketing webapp where you can book tickets of different apps. React.js, css and materialui is used in this webapp."'},
    ]
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

      const [tempdata, setTempData] = useState([]);


      const getData =(id, name, src, img, link)=>{
        let temp= [id, name, src, img, link];
        console.log(temp)
        setTempData(user =>[1, ...temp]);

        return handleOpen();
      }
   

    

    return(<motion.div id='portfolio' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{ duration: 0.2}}}>
          <div className={classes['Title-sec']}>
            <h1 className={classes['Title-sec-h1']}> My Portfolio</h1>
            <span className={classes['Title-bg']}>Projects</span>
            </div>
            <section className={classes['main-section']}>
            <div className={classes['content']}>
                <div>
                    <ul className={classes['port-ul']}>
                    {data.map(user =>(
                        <li className={classes['port-li']}  key={user.id} onClick={()=>getData(user.id, user.name, user.img,user.src, user.link )} >
                            <figure className={classes['port-figure']} >
                           
                                <img className={classes['port-img']} src={user.img} />
                                <figcaption  className={classes['caption']}>
                                    <h4>{user.name}</h4>
                                
                                </figcaption>
                                                            

                            </figure>
                        </li>
                        
                    ))}
                    </ul>
                </div>
            </div>
            </section>
            <ModalArea open={open} name={tempdata[2]} src={tempdata[4]}  img={tempdata[3]} link={tempdata[5]} onClose={handleClose}  />
        </motion.div>
   )
}

export default Portfolio;
{/* <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li>
                        <li className={classes['port-li']}>
                            <figure className={classes['port-figure']}>
                                <img className={classes['port-img']} src={require('./web1.png')} />
                                <figcaption className={classes['caption']}>
                                    <h4>natour project</h4>
                                </figcaption>
                            </figure>
                        </li> */}