import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  skills: {
    font: '400 1rem/1.75rem "Open Sans", sans-serif'
  }
})

export default function Skills() {
  const classes = useStyles()

  return (
    <div className={classes.skills}>
      <div>
        Skills in full-stack development empower me to deliver high 
        quality and engaging web & mobile apps and games.
      </div>
      <ul>
        <li>
          Proficient in writing JavaScript and building web apps with React and Node.js 
          over the past year
        </li>
        
        <li>
          Experience working with Google APIs, including Maps and YouTube, AWS, Firebase, 
          MongoDB, and Django
        </li>

        <li>
          Comfortable building UI for iOS apps with UIKit, SwiftUI, and XCode
        </li>

        <li>
          Created a variety of themed games in Java, Python, and OCaml 
        </li>

        <li>
          Used Git and GitHub for version control and to share my code with peers
        </li>
      </ul>
     



    </div>
  )
}