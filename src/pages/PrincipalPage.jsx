import Header from '../components/header/Header.jsx'
import './principalpage.css'

export default function PrincipalPage() {
    return (
        <main className='mainContent'>
            <Header />
            <section className='mainContent-bodySection'>
                <section className='mainContent-bodySection-cover'>
                    <div className='mainContent-bodySection-cover-text'>
                        <h1>Univalle in Germany</h1>
                        <p>We are a group of dedicated students from Colombia, representing Universidad del Valle, 
                            Tuluá branch, currently in our seventh and eighth semesters of Systems Engineering. 
                            Our goal is to travel to Germany to expand our knowledge in Machine Learning.</p>
                    </div>
                </section>
                <section className='mainContent-aboutUs'>
                        <h2>About Us</h2>
                        <div className='test'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p> La idea es incluir una breve descripción de cada uno, junto con
                                cualidades que consideremos importantes.
                        </p>
                </section>
                <section className='mainContent-aboutUs'>
                        <h2>Activities</h2>
                        <div className='test'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p> Aquí habrá una galería con las fotos de cada actividad que se realice
                            ya sea con fines de generar fondos o cosas culturales.
                        </p>
                </section>
            </section>
            
        </main>
    )
}
