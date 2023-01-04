import { Link } from 'react-router-dom' 

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
        <Link to='/contact'> Contact</Link>
      </ul>
    </nav>
  )
}



