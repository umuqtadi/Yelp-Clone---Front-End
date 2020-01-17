import React, { Component } from 'react'
import Restaurants from './Restaurants'
import MapContainer from '../Map/MapContainer'

class RestaurantsContainer extends Component {
    state = {
        restaurants: [
            {
                name: "Umar's Pizza",
                address: '420 Blaze St Unit 69',
                foodType: 'Bomb Shit',
                image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                comments: []
            },
            {
                name: "Darkwing Duck",
                address: '309 Clement St, San Francisco, CA 94118',
                foodType: 'Some Duck Shit',
                long: '-122.462540',
                lat: '37.782791',
                image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
                comments: []
            },
            {
                name: "Three Bromsticks",
                address: '1970 Hogsmeade',
                foodType: 'Pumpkin Juice and Wizard Shit',
                long: '-122.471161',
                lat: '37.780499',
                image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                comments: []
            },{
                name: "Probably Kind of Good",
                address: '555 Bush St, San Francisco, CA 94104',
                foodType: 'Pasta',
                long: '-122.406360',
                lat: '37.790480',
                image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                comments: []
            },
        ]
    }

    render() {
        return(
            <div style={flex}>
                
                <div>
                    <Restaurants
                        restaurants = { this.state.restaurants }
                    />
                </div>
                {/* <div>
                    <MapContainer
                        restaurants = { this.state.restaurants }
                        style = {mapStyle}
                    />
                </div> */}
            </div>
        )
    }
}

const mapStyle = {
    padding: '5px',
    float: 'right'
}

const flex = {
    display: 'flexbox'
}



export default RestaurantsContainer