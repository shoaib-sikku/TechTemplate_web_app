import React from 'react'
import carimg1 from '../imges/3.jpg'
import carimg2 from '../imges/4.jpg'
const Services = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={carimg1} class="d-block w-100" alt='a' height={'400px'} />
                    </div>
                    <div class="carousel-item" data-bs-interval="1000" >
                        <img src={carimg2} class="d-block w-100" alt='a' height={'400px'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services

