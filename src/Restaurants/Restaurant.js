import React, { Component } from 'react'
import './Restaurants.css'
import axios from 'axios'
import Comments from './Comments'
import { Link } from 'react-router-dom'


class Restaurant extends Component {

    state = {
        comment: '',
    }

    // componentDidMount(restaurantId)  {
    //     axios.get(`http://localhost:8000/api/comments/${restaurantId}`)
    //         .then(res => this.setState({comments: res.data}))
    // }

    addComment = (comment, restaurantId) => {
        axios.post(`http://localhost:8000/api/comments/${ restaurantId }`, {
            comment
        })
        .then(res => this.setState({comments: res.data}))
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.addComment(this.state.comment, this.props.restaurant.restaurantId)

        this.setState({comment: ''})

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
 
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
                <div style={item} >
                    <div className="star-rating">
                        <input id="star-5" type="radio" name="rating" value="star-5"/>
                        <label for="star-5" title="5 stars">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating" value="star-4"/>
                        <label for="star-4" title="4 stars">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" value="star-3"/>
                        <label for="star-3" title="3 stars">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating" value="star-2"/>
                        <label for="star-2" title="2 stars">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" value="star-1"/>
                        <label for="star-1" title="1 star">
                                <i className="active fa fa-star" aria-hidden="true"></i>
                        </label>
                    </div>
                    <form onSubmit ={this.onSubmit} >
                        <input
                            type='text' 
                            name='comment' 
                            style={{flex: '10', padding: '5px'}}
                            placeholder='Add Comment here...'
                            value={ this.state.comment }
                            onChange={ this.onChange }
                            restaurantId={restaurant.restaurantId}
                            />
                    </form>
                </div>
                <div>
                    <Link to={`/restaurant/${restaurant.restaurantId}`}>Comments</Link>
                    {/* <Comments restaurant={restaurant.restaurantId} /> */}
                </div>
          </div>
        )
    }
}

const restStyle = {
    display: 'flex',
    border: '5px solid black',
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