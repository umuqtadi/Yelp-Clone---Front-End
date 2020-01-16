import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'

class TopContainer extends Component {
    render() {
        return (
            <Carousel style={carousel}>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    style = {carouselImg}
                    src="https://i.imgur.com/3ccsTEQ.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Want a Burger?</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    style = {carouselImg}
                    className="carousel-img"
                    src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?cs=srgb&dl=anise-aroma-art-bazaar-277253.jpg&fm=jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Stay Spicy!</h3>
                    <p>Flavor is everything</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    style = {carouselImg}
                    className="carousel-img"
                    src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                    alt="Third slide"
                />
                <Carousel.Caption style={lightPic}>
                    <h3>Pizza Pizza.</h3>
                    <p>Roll the dice on a slice</p>
                </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}

const carouselImg = {
    width: '100%',
    overflow: 'hidden',
    objectFit: 'contain',
    maxHeight: '100%'
}

const carousel = {
    maxHeight: '20%',

}

const lightPic = {
    textColor: 'black'
}

export default TopContainer