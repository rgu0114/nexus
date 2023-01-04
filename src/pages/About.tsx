import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '32rem',
    color: '#777',
    margin: '0 2rem 2rem 2rem',
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
  aboutText: {
    marginTop: '1rem',
  },
})

const About = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.body}> 
      <div className={classes.sectionHeader}>
        About Me
      </div>
      <div className={classes.aboutText}>
        I am a full-stack developer from the Bay Area, currently living in San Jose. I enjoy 
        delivering impactful software and have collaborated on large scale projects with peers at Cornell, 
        as well as in industry with Niantic. I've worked extensively with JavaScript, Java, Python, and Swift 
        over the past couple of years.
        <h2>
          Cornell Design & Tech Initiative
        </h2>
        At Cornell University, I joined an Engineering Project Team called the Cornell 
        Design & Tech Initiative (DTI). Our goal is to develop software that serves our campus 
        community, and our web & mobile apps are currently used by more than 5,000 students. 
        I started by working on ClubView, a platform designed to connect students from all backgrounds 
        with the many clubs and organizations on campus. I'm currently a developer on Zing, which professors 
        and the Learning Strategies Center at Cornell use to group students together into study groups.
        
      </div> 
    </div>
  )
}

export default About