import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  interests: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    font: '400 1rem/1.75rem "Open Sans", sans-serif',
    marginTop: '1rem',
    marginLeft: '1.5rem',
    minWidth: '500px',
  },
  picBox: {
    marginTop: '1rem',
    marginLeft: '2rem',
  },
  pgo: {
    width: '240px',
  }
})

export default function Interests() {
  const classes = useStyles()

  return (
    <div style={{display: 'flex'}}>

      <div className={classes.interests}>
        I have a number of interests I enjoy spending time on.

        <p>
          I like listening to a variety of different kinds of music. When I'm driving, exercising,
          or just hanging out, I usually have pop/rock queued up. My favorite artists include 
          Linkin Park, Coldplay, Train, Bruno Mars, and One Republic. I also occasionally listen 
          to classical music while studying. 
        </p>

        <p>
          I enjoy playing video games. Some of my favorites include League of Legends, GTA V, and 
          Minecraft. I'm also currently playing a lot of Pokemon Go.
        </p>

      </div>
      <div className={classes.picBox}>
      <img
          className={classes.pgo}
          src='./images/linkin_park.jpg'
          alt='Linkin Park'
        />
      <img
          className={classes.pgo}
          src='./images/pgo.jpg'
          alt='Pokemon Go'
        />
      </div>

  </div>

  )
}