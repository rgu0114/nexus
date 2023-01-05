import { createUseStyles } from "react-jss"
import { SocialIcon } from 'react-social-icons'

const useStyles = createUseStyles({
  view: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
    paddingTop: '0.5rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '2rem',
  },
  copyright: {
    color: '#999',
    font: '400 0.875rem/1.5rem "Open Sans", sans-serif',
    marginTop: '2rem'
  }
})

export default function Contact() {
  const classes = useStyles()

  return (
    <div className={classes.view}>
      <div className={classes.links}>
        <SocialIcon url="https://www.linkedin.com/in/rgu0114/" target="_blank" />
        <SocialIcon url="https://github.com/rgu0114" target="_blank" />
        <SocialIcon url="https://www.instagram.com/rich_tennis/" target="_blank" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100009798823202" target="_blank" />
        <SocialIcon url="mailto:richardgu0114@gmail.com?" target="_blank" />
      </div>
      <div className={classes.copyright}>
        Copyright &copy; Richard Gu 2023
      </div>
      
    </div>
  )
}