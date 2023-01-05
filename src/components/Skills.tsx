import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    font: '400 1rem/1.75rem "Open Sans", sans-serif',
    marginTop: '1rem',
    minWidth: '500px',
  },
  subtitle: {
    marginLeft: '1.5rem'
  },
  picture: {
    display: 'flex',
    width: '400px',
    height: '267px',
    aspectRatio: '12/8',
    minWidth: '400px',
    marginTop: '2rem',
    marginLeft: '2rem',
  }
})

export default function Skills() {
  const classes = useStyles()

  return (
    <div style={{display: 'flex'}}>
      <div className={classes.skills}>
        <div className={classes.subtitle}>
          Skills in full-stack development empower me to deliver high 
          quality and engaging web & mobile apps and games.
        </div>
        <ul style={{ listStyleType: 'square' }}>
          <li>
            <span>
              Proficient in writing JavaScript and building web apps with React and Node.js 
              over the past year
            </span>
          </li>
          
          <li>
            <span>
              Experience working with Google APIs, including Maps and YouTube, AWS, Firebase, 
              MongoDB, and Django
            </span>
          </li>

          <li>
            <span>
              Comfortable building UI for iOS apps with UIKit, SwiftUI, and XCode
            </span>
          </li>

          <li>
            <span>
              Created a variety of themed games in Java, Python, and OCaml 
            </span>
          </li>

          <li>
            <span>
              Used Git and GitHub for version control and to share my code with peers
            </span>
          </li>
        </ul>
      </div>
      <img
      className={classes.picture}
      src='./images/fullstack_dev.jpg'
      alt='full stack development'
    />
  </div>
  )
}