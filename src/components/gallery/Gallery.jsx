import './gallery.css'
import { images } from '../../utilities/activities'

export default function Gallery() {
    return (
        <>
            <div className='gallery-container'>
                {images.map((image, index) => {
                    return (
                        <div className='gallery-img' key={index}>
                            <img src={image.img} alt="Gallery" className='gallery-img-item' />
                            <div className='gallery-img-overlay'>
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}