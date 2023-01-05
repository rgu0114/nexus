import { Link } from 'react-router-dom' 
import Button from '@mui/material/Button';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    borderRadius: '2em',
    height: '2rem'
  }
})
export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Richard Gu
      </Link>
    
      <ul>
        <a href='#about'> About</a>
        <Link to='/experience'> Experience</Link>
        <Link to='/projects'> Projects</Link>
        <a href='./assets/rgu_resume.pdf' target="_blank" > Resume </a>
       
        <a href="mailto:richardgu0114@gmail.com?">
            Contact
        </a>
        
      </ul>
    </nav>
  )
}



