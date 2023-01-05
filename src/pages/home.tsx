import {createUseStyles} from 'react-jss'
import About from './About'
import Tabs from '../components/Tabs'
import Redirects from '../components/Redirects'

const useStyles = createUseStyles({
  body: {
    margin: '3rem 0 1rem 0',
    color: '#777',
  },
  header: {
    display: 'flex',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#333',
    font: '800 3.625rem/3.375rem "Open Sans", sans-serif',
    justifyContent: 'center',
  },
  blurb: {
    display: 'flex',
    padding: '0 4rem 0 4rem',
    justifyContent: 'center',
    font: '380 1.125rem/1.875rem "Open Sans", sans-serif',
    fontSize: '1.4em',
    textAlign: 'center',
  
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  bowers: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '22.6rem',
    aspectRatio: '1270/565'
  },
  upson: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '22.6rem',
    aspectRatio: '1'
  },
  pfp: {
    display: 'flex',
    width: '16rem',
    aspectRatio: '18/19.2',
    borderRadius: '10em',
  },
  secondarypic: {
    display: 'flex',
    width: '160px',
    aspectRatio: '1',
    borderRadius: '10em',
    marginLeft: '16rem',
  },
  tertiarypic: {
    display: 'flex',
    width: '160px',
    aspectRatio: '1',
    borderRadius: '10em',
  },
  section: {
    display: 'flex',
    columnGap: '1rem',
    justifyContent: 'space-evenly',
    marginTop: '2rem',
    
  }, 
  
})

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        Richard Gu
      </div>
      <p className={classes.blurb}>
        Hi there, welcome to my personal website! I am a full-stack developer with
        2 years of experience developing and testing high-impact web apps, mobile apps, 
        and games. I am currently a sophomore at Cornell University studying Computer 
        Science and Economics. Feel free to browse this site and check out some of the 
        projects I've worked on!
      </p>
      <div className={classes.imgContainer}>
        <img
          className={classes.bowers}
          src='./images/bowers_cis.png'
          alt='Cornell Bowers College of Computing and Information Science'
        />
        <img
          className={classes.upson}
          src='./images/upson.jpg'
          alt='Cornells Upson Hall'
        />
        
      </div>
      <Redirects />
      <div className={classes.section}>
        <div>
          <img
            className={classes.pfp}
            src='./images/profilepic.jpg'
            alt='profile pic'
          />
          {/* <img
            className={classes.secondarypic}
            src='./images/picwithkyle.png'
            alt='pic with mentor'
          />
          <img
            className={classes.tertiarypic}
            src='./images/picwithbird.jpg'
            alt='pic with bird'
          /> */}
        </div>
        <About/>
      </div>
      <Tabs/>
    </div>
  )
}

export default Home