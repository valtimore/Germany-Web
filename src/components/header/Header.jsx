
import './header.css'

export default function Header() {
    return(
        <header className='header'>
            <img className='header-img' src='../../../public/icons/logo-completo.png' alt="Plane Icon" /> 
            <nav className='header-nav'>
                <ul className='header-ul'>
                    <il className='header-li'><a href='#' className='header-a'>Principal</a></il>
                    <il className='header-li'><a href='#' className='header-a'>About us</a></il>
                    <il className='header-li'><a href='#' className='header-a'>Our plan</a></il>
                    <il className='header-li'><a href='#' className='header-a'>Itinerary</a></il>
                </ul>
                <p className='header-p'>On a journey to make a dream come true</p>
            </nav>
            
        </header>
    )
}