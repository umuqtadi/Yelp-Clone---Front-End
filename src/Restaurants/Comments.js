import React, { Component } from 'react'
import axios from 'axios'


class Comments extends Component {

    state = {
        comments: []
    }


    componentDidMount(){
        let restaurantId = this.props.restaurant.restaurantId
        axios.get(`http://localhost:8000/api/comments/${restaurantId}`)
            .then(res => this.setState({comments: res.data}))

    }

    render(){
        return(this.state.comments.map(
            comment => (
                <div>
                    <p>{comment.comment} </p>
                </div>
            )
        )
        )
    } 
}

export default Comments