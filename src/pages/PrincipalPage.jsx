import Header from '../components/header/Header.jsx'
import Cover from '../components/cover/Cover.jsx'
import AboutUs from '../components/aboutus/AboutUs.jsx'
import Gallery from '../components/gallery/Gallery.jsx'
import './principalpage.css'

export default function PrincipalPage() {
    return (
        <main className='mainContent'>
            <Header />
            <section className='mainContent-coverSection'>
                <Cover />
            </section>
            <section className='mainContent-infoSection'>
                <div className='mainContent-infoSection-div'>
                    <div className='mainContent-infoSection-div-div'>
                        <h2 className='mainContent-infoSection-h2'> <span>Why</span> Machine Learning?</h2>
                    </div>
                    <p className='mainContent-infoSection-div-p'>
                    Machine Learning is a branch of <span>Artificial Intelligence</span> that focuses on building systems capable of learning and improving 
                    from data without being explicitly programmed. By leveraging algorithms and statistical models, it enables computers to 
                    identify patterns, make predictions, and <span>solve complex problems</span> across various fields.
                    </p>
                    <p className='mainContent-infoSection-div-p'>
                    Our journey to Germany is centered on engaging with leading <span>Machine Learning</span> research groups at prestigious universities, where we aim 
                    to enhance our skills and broaden our horizons in this transformative field.
                    </p>
                </div>
            </section>

            <section className='mainContent-aboutUs'>
                <h2 id='aboutus'>About Us</h2>
                < AboutUs />
                <p> La idea es incluir una breve descripción de cada uno, junto con
                        cualidades que consideremos importantes.
                </p>
            </section>
            <section className='mainContent-activities'>
                <h2 id='activities'>Activities</h2>
                <Gallery />
                <p> Aquí habrá una galería con las fotos de cada actividad que se realice
                    ya sea con fines de generar fondos o cosas culturales.
                </p>
            </section>
            
        </main>
    )
}
