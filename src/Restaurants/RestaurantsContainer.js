import React, { Component } from 'react'
import Restaurants from './Restaurants'
import MapContainer from '../Map/MapContainer'
import axios from 'axios'

class RestaurantsContainer extends Component {
    state = {
        restaurants: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/restaurants')
            .then(res => this.setState({restaurants: res.data}))
    }

    render() {
        return(
            <div style={flex}>
                <h1>The Options are Endless!</h1>
                <div  >
                    <Restaurants
                        restaurants = { this.state.restaurants }
                    />
                </div>
                <div style = {mapStyle}>
                    <MapContainer
                        restaurants = { this.state.restaurants }
                    />
                </div>
            </div>
        )
    }
}

const mapStyle = { 
    width: '100%', 
    height:'500px',
    position: 'relative', 
    top: '50%', 
    left: '50%', 
    marginTop: '10px', 
    marginLeft: '-400px', 
}

const flex = {
    display: 'flexbox',
    marginTop: '10px',
    flexDirection: 'column',
    textAlign: 'center',

}



export default RestaurantsContainer