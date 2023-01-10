import { blue } from '@mui/material/colors'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  body: {
    flexDirection: 'column',
    margin: '3rem 0 1rem 0',
    color: '#777',
  },
  bigContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    columnGap: '2rem',
  },
  experience: {
    display: 'flex',
    marginBottom: '2rem',
    justifyContent: 'space-evenly'
  },
  sectionHeader: {
    display: 'flex',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#333',
    font: '700 2.125rem/2.75rem "Open Sans", sans-serif',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    marginBottom: '4rem',
  }, 
  companyName: {
    width: 'fit-content',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#33363B',
    font: '600 25px/30px opensans-bold, sans-serif',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderBottom: `2px solid ${blue[500]}`,
    paddingBottom: '0.5rem'
  },
  role: {
    font: '20px/24px librebaskerville-italic, serif',
    color: '#333',
    marginBottom: '18px',
    marginTop: '9px',
  },
  skills: {
    font: '18px librebaskerville-italic, serif',
    color: '#333',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  pictures: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  logo: {
    display: 'flex',
    width: '240px',
    marginTop: '2rem',
    marginBottom: '5rem'
  },
  logo2: {
    display: 'flex',
    width: '420px',
    aspectRatio: '439/115',
    marginTop: '6rem',
    marginBottom: '4rem'
  },
  logo3: {
    display: 'flex',
    width: '220px',
    marginTop: '8rem',
    marginBottom: '2rem'
  },
  logo4: {
    display: 'flex',
    width: '220px',
    marginTop: '4rem',
    marginBottom: '3rem'
  },
  logo5: {
    display: 'flex',
    width: '220px',
    marginTop: '6rem',
    marginBottom: '2rem'
  },
  description: {
    flexDirection: 'column',
    maxWidth: '40rem',
    marginBottom: '4rem'
  },
  pairedPic: {
    display: 'flex',
    gap: '2rem',
  },
  pic: {
    display: 'flex',
    width: '240px',
    aspectRatio: '548/488',
    marginTop: '2rem',
    marginBottom: '5rem'
  }
})

const Experience = () => {
  const classes = useStyles()

  return (
    <div className={classes.body}>
      <div className={classes.sectionHeader}> Work Experience </div>
        <div className={classes.bigContainer}>
          <div className={classes.pictures}> 
            <div className={classes.pairedPic}>
              
              <img
                  className={classes.pic}
                  src='./images/picwithkyle.png'
                  alt='Pic with my 8th Wall mentor'
              />
              <img
                  className={classes.logo}
                  src='./images/niantic.jpg'
                  alt='Niantic blue logo'
              />
            </div>
            <img
                className={classes.logo2}
                src='./images/cornell_cis.png'
                alt='Cornell CIS'
            />  
            <img
                className={classes.logo3}
                src='./images/logo.svg'
                alt='Cornell DTI'
            />
            <img
                className={classes.logo4}
                src='./images/umnlogo.png'
                alt='University of Minnesota logo'
            />
            <img
                className={classes.logo5}
                src='./images/mntc.png'
                alt='Minnesota Tennis Camps logo'
            />
        
          </div>
          
          <div style={{flexDirection: 'column'}}> 
            <div className={classes.description}>
              <div className={classes.companyName}>
                Niantic
              </div>
              <div className={classes.role}>
                <span style={{fontStyle: 'italic'}}> Software Engineer Intern </span> • May 2022 - August 2022
              </div>
                This past summer, I had an awesome experience interning at Niantic (known for Pokemon Go), as 
                part of their 8th Wall WebAR development platform team. One of my main projects was spearheading the 
                development of a new client onboarding page, which recommended the sample projects, tutorials, and blog posts 
                most relevant to the user's interests, enhancing the experience for 10,000+ AR developers and boosting 
                user activation/retention. I also revitalized the UI of the Partners page, which customers use to find verified WebAR
                agencies to help bring their AR experiences to life, and created a localization search tool to find 
                geographically close options. More technical details can be found in my resume. I received a return offer 
                and will be returning as an intern for summer 2023.
              <div className={classes.skills}>
                Skills: TypeScript, React, Redux, JSS, Node.js, Google APIs (YouTube & Maps), AWS Elastic Beanstalk
              </div>
            </div>
      
       
            <div className={classes.description}>
              <div className={classes.companyName}>
                Cornell University CIS
              </div>
              <div className={classes.role}>
                <span style={{fontStyle: 'italic'}}> Teaching Assistant, Data Structures & OO Programming </span> • August 2022 - Present
              </div>
                During the semester, I'm a Teaching Assistant/Course Consultant for Cornell's core OO programming class, which had a record 
                size this past semester of almost 700 students. I help facilitate discussion sections of around 40 students, grade assignments/exams,
                and hold weekly office hours to help answer students' questions about course organization or projects. 
              <div className={classes.skills}>
                Skills: Java, Eclipse IDE, Leadership, Public Speaking, Presentation
              </div>
            </div>

            <div className={classes.description}>
              <div className={classes.companyName}>
                Cornell Design & Tech Initiative 
              </div>
              <div className={classes.role}>
                <span style={{fontStyle: 'italic'}}> Software Developer </span> • February 2022 - Present
              </div>
              
                I'm a full-stack developer for Cornell DTI, an engineering project team dedicated to building out web apps and other 
                software to enact social good on our campus community. I'm currently working on Zing, which is an app designed to optimize 
                student grouping with nearly 1000 users from 300+ courses. We aim to save manual course staff hours spent forming groups, 
                as well as create productive groupings with students' strengths and weaknesses taken into consideration. Some projects I've 
                led include streamlining student group filter matching, Firebase logging of API requests for security, and generating automated 
                email template for a variety of situations, including newly matched students.

              <div className={classes.skills}>
                Skills: TypeScript, React, Node.js, Firebase, CSS/SASS, Git
              </div>
            </div>

            <div className={classes.description}>

              <div className={classes.companyName}>
                University of Minnesota
              </div>
              <div className={classes.role}>
                <span style={{fontStyle: 'italic'}}> Research Assistant </span> • October 2020 - June 2021
              </div>

                During my senior year of high school, I dived deeper into my love for chemistry as a Research Assistant 
                for Associate Professor Dr. Susan Arnold at the University of Minnesota's School of Public Health. I spent the majority 
                of the school year working on an independent research project focusing on harmful chemical exposures in workplaces 
                and various mathematical modeling tools used to evaluate them. In particular, I compared two popular tools and their effectiveness 
                in several different room layouts and ventilation levels, making recommendations for when to use which model. 
                I used statistical analysis software to evaluate my findings and write a research paper under Dr. Arnold's guidance, which was 
                submitted to the Journal of Occupational and Environmental Hygiene for publication.
              <div className={classes.skills}>
                <div>
                  <a href='./assets/Workplace_Chemical_Exposures_Modeling.pdf' target="_blank" > Link to paper </a>
                </div>
                <div>
                  Skills: Research, quantitative chemistry, statistical analysis, presentation
                </div>
              </div>
            </div>

            <div className={classes.description}>

              <div className={classes.companyName}>
                Minnesota Tennis Camps
              </div>
              <div className={classes.role}>
                <span style={{fontStyle: 'italic'}}> Junior Tennis Coach </span> • December 2019 - August 2021
              </div>
                In addition to playing tennis, I realized I also enjoyed helping younger players find flaws in their technique 
                and seeing their improvement after a bit of coaching. I spent much of my junior and senior years of high school as a 
                coach for Minnesota Tennis Camps, where I coordinated tennis drills for up to 40 middle school players. At bi-weekly practices, I 
                also led workout bootcamp sessions and helped the head coach manage registration. I was one of several student coaches to be 
                contracted to offer private lessons on the side.
              <div className={classes.skills}>
                Skills: Tennis lol
              </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Experience