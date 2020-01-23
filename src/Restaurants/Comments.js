import React, { Component } from 'react'
import axios from 'axios'


class Comments extends Component {

    state = {
        comments: []
    }


    componentDidMount(){
        let restaurantId = this.props.restaurantId 

        axios.get(`http://localhost:8000/api/comments/${restaurantId}`)
            .then(res => this.setState({comments: res.data}))

    }

    render(){
        return(this.state.comments.map(
            comment => (
                <div style={commentStyle}>
                    <p>{comment.comment} </p>
                </div>
            )
        )
        )
    } 
}

const commentStyle = {
    textAlign: 'center'
}

export default Comments