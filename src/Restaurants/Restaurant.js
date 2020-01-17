import React, { Component } from 'react'
import './Restaurants.css'


class Restaurant extends Component {
 
    render(){
        const restaurant = this.props.restaurant
        return (
            <div style={ restStyle }>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                <div className='item' style={ item }>
                    <img src={restaurant.image} style={ resImg } alt='a restaurant' />
                </div>
                <div className='item' style={item}>
                    <p>Name: { restaurant.name } </p>
                    <p>Address: { restaurant.address } </p>
                    <p>Food Type: { restaurant.foodType }  </p>
                </div>
                <div style={item}>
                    <div class="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5"/>
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4"/>
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3"/>
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2"/>
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1"/>
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                    </div>

                    <textarea rows="4" cols="30" name="comment" form="usrform"> Enter Comment Here</textarea>
                </div>
          </div>
        )
    }
}

const restStyle = {
    display: 'flex',
    border: '5px solid #007bff',
    margin: '5px',
    backgroundColor: 'white'
}

const item ={
    height: '205px',
    width: '500px',
    alignItems: 'space-between',
    justifyContent: 'space-around',
    fontSize: '20px',
    fontWeight: 'bold'
}

const resImg = {
    maxHeight: '200px',
    overflow: 'hidden',
    objectFit: 'contain',
    marginLeft: '2px'
}


export default Restaurant