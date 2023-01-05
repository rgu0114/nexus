import { createUseStyles } from "react-jss"

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '4rem',
  },
})

export default function Contact() {
  const classes = useStyles()

  return (
    <div className={classes.view}>
      <div className={classes.links}>
        LinkedIn 
        GitHub
        Instagram 
        Email
      </div>
    </div>
  )
}