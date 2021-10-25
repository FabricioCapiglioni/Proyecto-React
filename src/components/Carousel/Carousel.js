import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import images from "../../assets/img/imgCarousel"

const CarouselComponent = () => {
    return (
        <Carousel className="carousel" fade>
            {images.map(image => (
                <Carousel.Item key={image.name} interval={2000}>
                    <img
                        className="d-block w-100"
                        src={image.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{image.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>))}
        </Carousel>
    )
}

export default CarouselComponent;
