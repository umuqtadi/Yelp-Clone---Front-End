import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import CategoriesContainer from '../Categories/CategoriesContainer'
import MapContainer from '../Map/MapContainer'

class TopContainer extends Component {
    render() {
        return (
            <div>
                <div style={carousel}>
                    <Carousel>

                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style = {carouselImg}
                            src="https://i.imgur.com/3ccsTEQ.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Want a Burger?</h3>
                            <p>Kill a cow and cook that bitch!</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style = {carouselImg}
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
                            src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={lightPic}>
                            <h3>Pizza Pizza.</h3>
                            <p>Roll the dice on a slice</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div>
                    <CategoriesContainer />
                </div>
                <div style={mapStyle}  >
                    <MapContainer />
                </div>
            </div>
        )
    }
}

const carouselImg = {
    width: '100%',
    overflow: 'hidden',
    objectFit: 'cover',
    maxHeight: '400px'
}

const carousel = {
    maxHeight: '20%',

}

const lightPic = {
    textColor: 'black'
}

const mapStyle = { 
    width: '100%', 
    height:'500px',
    position: 'relative', 
    top: '50%', 
    left: '50%', 
    marginTop: '10px', 
    marginLeft: '-100px', 
}

export default TopContainer