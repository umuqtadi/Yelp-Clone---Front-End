import React, { Component } from 'react'

class Restaurant extends Component {
 
    render(){
        const restaurant = this.props.restaurant
        return (
            <div style={ restStyle }>
                <div className='item' style={ item }>
                    <img src={restaurant.image} style={ resImg }/>
                </div>
                <div className='item' style={item}>
                    <p>Name: { restaurant.name } </p>
                    <p>Address: { restaurant.address } </p>
                    <p>Type of food: { restaurant.foodType }  </p>
                </div>
                <div style={item}>
                    <p>Comments and ratings will go here</p>
                </div>
            </div>
        )
    }
}

const restStyle = {
    display: 'flex',
    border: '5px solid blue',
    margin: '5px'
}

const item ={
    height: '205px',
    width: '500px',
    alignItems: 'space-between',
    justifyContent: 'space-around'
}

const resImg = {
    maxHeight: '200px',
    overflow: 'hidden',
    objectFit: 'contain',
    margin: '2px'
}


export default Restaurant