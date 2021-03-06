import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {

    render() {
        return (
            this.props.restaurants.map(
            restaurant => (
                <div className='res-list'>
                    <Restaurant
                        restaurant = { restaurant }
                        key = { restaurant.rowid }
                    />
                </div>
                )
            )
        )
    }
}

export default Restaurants;