import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class TopContainer extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                <img
                    style = {carouselImg}
                    src="https://i.imgur.com/3ccsTEQ.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    style = {carouselImg}
                    className="carousel-img"
                    src="https://i.imgur.com/ZINIWos.jpeg"
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    style = {carouselImg}
                    className="carousel-img"
                    src="https://i.imgur.com/eTuCPxM.jpeg"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

const carouselImg = {
    height: 'auto',
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default TopContainer