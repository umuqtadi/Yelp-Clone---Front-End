import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapContainer extends Component {
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{lat: 37.78, lng: -122.44}}
                >
                    {/* {restaurants.map((location, index) => {
                            return <Marker 
                                key={index} 
                                id={index} 
                                position={{
                                    lat: restaurants.lat,
                                    lng: restaurants.lon
                                    }}
                                onClick={() => console.log(`You clicked ${location.restaurants.title}`)}/>
                        })} */}
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