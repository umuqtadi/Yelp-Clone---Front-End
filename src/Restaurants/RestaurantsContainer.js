import React, { Component } from 'react'
import Restaurants from './Restaurants'

class RestaurantsContainer extends Component {
    state = {
        restaurants: [
            {
                name: "Umar's Pizza",
                address: '420 Blaze St Unit 69',
                foodType: 'Bomb Shit',
                image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
            },
            {
                name: "Darkwing Duck",
                address: 'Gotham',
                foodType: 'Some Duck Shit',
                image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'
            },
            {
                name: "Three Bromsticks",
                address: '1970 Hogsmeade',
                foodType: 'Pumpkin Juice and Wizard Shit',
                image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
            },
        ]
    }

    render() {
        return(
            <div>
                <Restaurants
                    restaurants = { this.state.restaurants }
                />
            </div>
        )
    }
}


export default RestaurantsContainer