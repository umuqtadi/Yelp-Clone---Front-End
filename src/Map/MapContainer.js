import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
        )
    }
}

const mapStyles = {
    width: '50%',
    height: '50%'
}

export default GoogleApiWrapper(
    { apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'})(MapContainer)