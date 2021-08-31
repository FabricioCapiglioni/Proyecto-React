import './Carousel.css'
import images from "../../assets/img/imgCarousel"

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={images.img1} class="d-block w-100" alt="iPhone 12 Pro"></img>
                </div>
                <div class="carousel-item">
                    <img src={images.img2} class="d-block w-100" alt="Samsung s21"></img>     
                </div>
                <div class="carousel-item">
                    <img src={images.img3} class="d-block w-100" alt="Samsung Galaxy Z Fold 2"></img>
                </div>
            </div>
        </div>
    )
} 

export default Carousel;