
import './header.css'

export default function Header() {
    return(
        <header className='header'>
            <img className='header-img' src='https://firebasestorage.googleapis.com/v0/b/gym-stats-e3823.appspot.com/o/univalleGermany%2Flogo-completo.png?alt=media&token=f238e565-41d7-4d01-930b-eb2e6a46eae6' alt="Plane Icon" /> 
            <nav className='header-nav'>
                <ul className='header-ul'>
                    <li className='header-li'><a href='#' className='header-a'>Principal</a></li>
                    <li className='header-li'><a href='#aboutus' className='header-a'>About us</a></li>
                    <li className='header-li'><a href='#activities' className='header-a'>Activities</a></li>
                    <li className='header-li'><a href='#' className='header-a'>Itinerary</a></li>
                </ul>
                <p className='header-p'>On a journey to make a dream come true</p>
            </nav>
            
        </header>
    )
}