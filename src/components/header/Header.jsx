
import './header.css'

export default function Header() {
    return(
        <header className='header'>
            <img className='header-img' src='https://firebasestorage.googleapis.com/v0/b/gym-stats-e3823.appspot.com/o/univalleGermany%2Flogo-completo.png?alt=media&token=f238e565-41d7-4d01-930b-eb2e6a46eae6' alt="Plane Icon" /> 
            <nav className='header-nav'>
                <ul className='header-ul'>
                    <il className='header-li'><a href='#' className='header-a'>Principal</a></il>
                    <il className='header-li'><a href='#' className='header-a'>About us</a></il>
                    <il className='header-li'><a href='#' className='header-a'>Activities</a></il>
                    <il className='header-li'><a href='#' className='header-a'>Itinerary</a></il>
                </ul>
                <p className='header-p'>On a journey to make a dream come true</p>
            </nav>
            
        </header>
    )
}