import React from 'react'
import classes from './About.module.css'
import DownloadIcon from '@mui/icons-material/Download'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion'
// import { CircularProgress } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import School from '@mui/icons-material/School';
const About = () => {

  return (<motion.div id='about'className={classes['about']} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.2 } }}>
    <div className={classes['Title-sec']}>
      <h1 className={classes['Title-sec-h1']}> About ME</h1>
      <span className={classes['Title-bg']}>Resume</span>
    </div>

    <section className={classes['main-section']}>

      <div className={classes['content']}>
        <div className={classes['row1']}>
          <div className={classes['col-div']}>
            <div className={classes['row']}>
              <div className={classes['col-12']}>
                <h3 className={classes['personal']}>personal-infos</h3>
              </div>
              <div className={classes['col-13']}>
                <div className={classes['img-fluid']} />
              </div>
              {/* {data.map(user=>{ */}
              <div className={classes['col-12']}>
                
                  <ul className={classes['about-list']}>
                  
                    <li className={classes['list']} > <span className={classes['title']}>First Name: </span>
                      <span className={classes['answer']}>Hamza</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Last Name: </span>
                      <span className={classes['answer']}>Shaukat</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Age: </span>
                      <span className={classes['answer']}>21</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Nationality: </span>
                      <span className={classes['answer']}>Pakistan</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Address: </span>
                      <span className={classes['answer']}>Lahore</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Fiverr: </span>
                      <span className={classes['answer']}><a href='#'>no account</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Phone: </span>
                      <span className={classes['answer']}>+923044197010</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Email: </span>
                      <span className={classes['answer']}>Hamzashaukat2001@gmail.com</span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>LinkedIn: </span>
                      <span className={classes['answer']}><a href='https://www.linkedin.com/in/hamza-shaukat-1b3783210/  '> Hamza Shaukat</a></span>
                    </li>
                    <li className={classes['list']}> <span className={classes['title']}>Language: </span>
                      <span className={classes['answer']}>Urdu, English</span> 
                     </li>
                  </ul>

              </div>
              {/* })} */}
              <div className={classes['down-div']}>
                <a className={classes['button']}><span className={classes['button-text']}> Download</span>
                  <span className={classes['button-icon']}>
                    <DownloadIcon sx={{ fontSize: '3rem' }} />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={classes['col-div2']}>
            <div className={classes['row']}>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    2
                  </h3>
                  <p className={classes['define-para']}>
                    Years of
                    <span className={classes['d-block']}>Experience</span>
                  </p>
                </div>
              </div>
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    10
                  </h3>
                  <p className={classes['define-para']}>
                    Completed
                    <span className={classes['d-block']}>projects</span>
                  </p>
                </div>
              </div>
              {/* <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    
                  </h3>
                  <p className={classes['define-para']}>
                    Happy
                    <span className={classes['d-block']}>Customers</span>
                  </p>
                </div>
              </div> */}
              <div className={classes['col-6']}>
                <div className={classes['box-stats']}>
                  <h3 className={classes['number']}>
                    5
                  </h3>
                  <p className={classes['define-para']}>
                    Awards
                    <span className={classes['d-block']}>Won</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>My skills</h3>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={80} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 80%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>AWS </h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={75} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 75%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Azure</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={70} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 70%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>JavaScript</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress className={classes['MuiCircularProgress-indeterminate']} variant='determinate' value={40} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 40%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>react</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={30} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 30%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Kubernetes </h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={70} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 70%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>git</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={80} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 80%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Docker</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant='determinate' value={60} size={130} sx={{ color: '#5a019e', backgroundColor: '#252525', borderRadius: '50%' }} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className={classes['percentage']}> 60%</span>
              </Box>
            </Box>
            <h6 className={classes['skill-name']}>Node.js</h6>
          </div>



        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>Experience and Education</h3>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>March 2023 – Present</span>
                  <h5 className={classes['degree-name']}>AWS Intern 
                    <span className={classes['place']}>Bytewise Limite</span>
                  </h5>
                  <p className={classes['degree-para']}> Explored and implemented various AWS Services including DynamoDB, Lambda, Auto Scaling
Groups and RDS Database, Gained hands on experience in server provisioning, load balancing, serverless functions, S3
configuration, file storage, VPC Networking and CDN usage

    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>Oct 2022 – Present</span>
                  <h5 className={classes['degree-name']}>Co-Lead 
                    <span className={classes['place']}>MLSA UET Taxila </span>
                  </h5>
                  <p className={classes['degree-para']}> Led and Organized Info Sessions for the university students as well as currently mentoring them on how to become an efficient Microsoft Learn Student Ambassador

    </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <BusinessCenterIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>Sept 2021 – June 2022</span>
                  <h5 className={classes['degree-name']}>Cloud Computing Lead 
                    <span className={classes['place']}>Google Developer Student Clubs  </span>
                  </h5>
                  <p className={classes['degree-para']}>Selected as one of the 5 Core Team Members for the Google Developer Student Club Chapter at my Campus. Organized multiple events including an Info Session, Hacktoberfest, a Web Development Bootcamp and multiple speaker sessions emphasizing on a number of technologies including Cloud Computing, Cyber Security and ML


    </p>
                </li>
             
              </ul>
            </div>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
              <ul className={classes['resume-ul']}>
              <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2020-Present</span>
                  <h5 className={classes['degree-name']}>Software Engineering
                    <span className={classes['place']}>UEt taxila</span>
                  </h5>
                  <p className={classes['degree-para']}> Student of Software Engineering in University of Engineering and Technology Taxila, Pakistan </p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2018-2020</span>
                  <h5 className={classes['degree-name']}>Pre-Engineering
                    <span className={classes['place']}>Pgc</span>
                  </h5>
                  <p className={classes['degree-para']}>  Achieved top marks in FSC Pre-Engineering. Demonstrated strong work ethic and dedication to academic success</p>
                </li>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>2017-2018</span>
                  <h5 className={classes['degree-name']}>matriculation
                    <span className={classes['place']}>High School – APSACS mangla</span>
                  </h5>
                  <p className={classes['degree-para']}>  Activities and societies: School football team (interzonal winner), badminton player(Silver medal), Table tennis player. </p>
                </li>
              </ul>
            </div>
          </div>


        </div>
        <hr className={classes['seperator']}></hr>
        <div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>COURSES and CERTIFICATION</h3>
          </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
            <ul className={classes['resume-ul']}>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <CardMembershipIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>March 2023</span>
                  <h5 className={classes['degree-name']}>AWS project bootcamp
                    <span className={classes['place']}>By Andrew Brown</span>
                  </h5>
                  <p className={classes['degree-para']}>12-week AWS cloud online bootcamp. The boot camp provided a real-life scenario for building a Microservices Cloud application from scratch

    </p>
                </li>
             
             
              </ul>
              </div>
            </div>
          <div className={classes['col-lg']}>
            <div className={classes['resume-box']}>
            <ul className={classes['resume-ul']}>
                <li className={classes['resume-li']}>
                  <div className={classes['icon-business']}>
                    <CardMembershipIcon sx={{ fontSize: '35px' }} />
                  </div>
                  <span className={classes['time-period']}>aqugust 2022 - Present</span>
                  <h5 className={classes['degree-name']}>Cloud Native Computing CNC Course
                    <span className={classes['place']}>by PIAIC</span>
                  </h5>
                  <p className={classes['degree-para']}>Enrolled in a 1-year online CNC course, currently in progress with 2 quarters completed.
<br />Covered topics include:
<br />• Cloud native concepts and implementation and In-depth understanding of Linux.
<br />• Proficiency in Docker containerization
<br />• Gained practical knowledge of Kubernetes
    </p>
                </li>
             
             
              </ul>
              </div>
            </div>
          </div>
          
  
      </div>
    </section>

  </motion.div>)
}

export default About;