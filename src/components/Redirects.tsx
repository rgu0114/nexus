import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  view: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
    paddingTop: '0.5rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '2.5rem',
    backgroundColor: '#e8eff6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '4rem',
  },
  logo: {
    height: '2rem',
  }
})

export default function Redirects() {
  const classes = useStyles() 

  return (
    <div className={classes.view}>
      <h1>
        Quick Links
      </h1>
      <div className={classes.links}>
        <img
          className={classes.logo}
          src='./images/linkedin.png'
          alt='LinkedIn'
        />
        <img
          className={classes.logo}
          src='./images/github.png'
          alt='GitHub'
        />
        
      </div>
    </div>
  )
}