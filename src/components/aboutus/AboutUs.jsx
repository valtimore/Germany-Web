import './aboutus.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../utilities/students';

export default function AboutUs() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Activar el autoplay
        autoplaySpeed: 6000, // Tiempo entre cada movimiento
        cssEase: "linear", // Transición suave
        responsive: [
            {
                breakpoint: 480, // Pantallas menores a 480px (celular)
                settings: {
                    slidesToShow: 2, // Muestra 1 elemento
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='about-container'>
            <div className='about-container-body'>
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} className="about-container">
                        <div className="about-container-image">
                            <img src={d.img} alt="User" />
                        </div>

                        <div className="about-container-info">
                            <p className="about-container-info-name">{d.name}</p>
                            <p className="about-container-info-review">{d.review}</p>
                            <button className="about-container-info-button">Skills</button>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
}
