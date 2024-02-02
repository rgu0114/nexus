import {createUseStyles} from 'react-jss'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const useStyles = createUseStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '34rem',
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
    font: '380 1.125rem/1.875rem "Open Sans", sans-serif',
    fontSize: '1.4em',
    marginBottom: '2rem',
  },
  buttons: {
    borderRadius: '2em'
  },
  dtipic: {
    display: 'flex',
    width: '80px',
    aspectRatio: '1',
    borderRadius: '10em',
    marginLeft: '2rem',
  },
  dti: {
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  }
})

const About = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.body}> 
      <div className={classes.sectionHeader} id='about'>
        About Me
      </div>
      <div className={classes.aboutText}>
        I am a full-stack developer from the Bay Area, currently living in San Jose. I enjoy 
        delivering impactful software and have collaborated on large scale projects with peers at Cornell, 
        as well as in industry with Niantic. I've worked extensively with JavaScript, Java, Python, and Swift 
        over the past couple of years.
        <h2 className={classes.dti}>
          Cornell Design & Tech Initiative
          <img
            className={classes.dtipic}
            src='./images/logo.svg'
            alt='DTI logo'
          />
        </h2>
        At Cornell University, I joined an Engineering Project Team called the Cornell 
        Design & Tech Initiative (DTI). Our goal is to develop software that serves our campus 
        community, and our web & mobile apps are currently used by more than 5,000 students. 
        I started by working on ClubView, a platform designed to connect students from all backgrounds 
        with the many clubs and organizations on campus. I'm currently a developer on Zing, which professors 
        and the Learning Strategies Center at Cornell use to group students together into study groups.
        
      </div> 
      
      <Stack direction="row" spacing={4}>
        <Button 
          variant="contained" 
          color='success' 
          size='large' 
          className={classes.buttons}
          href='https://github.com/cornell-dti'
          target='_blank'
        >
          Github
        </Button>

        <Button 
          variant="contained" 
          size='large' 
          className={classes.buttons}
          href='https://www.cornelldti.org/'
          target='_blank'
        >
          Cornell DTI
        </Button>

        <Button 
          variant="contained" 
          size='large' 
          color='secondary'
          className={classes.buttons}
          href='https://zing-lsc.web.app'
          target='_blank'
        >
          Zing LSC
        </Button>

        <Button 
          variant="contained" 
          size='large' 
          color='secondary'
          className={classes.buttons}
          href='https://queueme.in/'
          target='_blank'
        >
          Queue Me In
        </Button>
        
      </Stack>
  
    </div>
  )
}

export default About
