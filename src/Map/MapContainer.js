import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapContainer extends Component {
    render(){
        // let mapMarker = this.props.restaurants.map((restaurant, index) => {
        //     return <Marker 
        //         key={index} 
        //         id={index} 
        //         position={{
        //             lat: restaurant.lat,
        //             lng: restaurant.lon
        //             }}
        //         onClick={() => console.log(`You clicked ${restaurant.name}`)}/>
        // })
        return(
            <div>
            <Map 
                google = {this.props.google}
                zoom = {8}
                style={mapStyles}
                initialCenter={{lat: 37.78, lng: -122.44}}
            >
                    {/* {mapMarker} */}
                </Map> 
            </div>
        )
    }
}

const mapStyles = {
    width: '50%',
    height: '50%',
    float: 'right'
}

export default GoogleApiWrapper(
    { apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'})(MapContainer)