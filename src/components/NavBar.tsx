import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Richard Gu
      </Link>
    
      <ul>
        <Link to='/about'> About</Link>
        <Link to='/experience'> Experience</Link>
        <Link to='/projects'> Projects</Link>
      </ul>
    </nav>
  )
}



