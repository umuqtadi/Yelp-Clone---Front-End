import React, { Component } from 'react'

class RestaurantsContainer extends Component {
    state = {
        restaurants: []
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