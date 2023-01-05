import { blue } from '@mui/material/colors'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  body: {
    flexDirection: 'column',
    margin: '3rem 0 1rem 0',
    color: '#777',
  },
  experience: {
    marginBottom: '2rem',
  },
  sectionHeader: {
    display: 'flex',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#333',
    font: '700 2.125rem/2.75rem "Open Sans", sans-serif',
    justifyContent: 'center',
    whiteSpace: 'nowrap'
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
  }
})

const Experience = () => {
  const classes = useStyles()

  return (
    <div className={classes.body}>
      <div className={classes.sectionHeader}> Work Experience </div>
      <div className={classes.experience}>
     
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

      <div className={classes.experience}>
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


      <div className={classes.experience}>
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

        <div className={classes.companyName}>
      </div>


      </div>
    </div>
  )
}

export default Experience