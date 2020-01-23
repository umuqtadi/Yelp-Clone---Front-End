import React, { Component } from 'react'
import axios from 'axios'


class Comments extends Component {

    state = {
        comments: [],
        restaurants: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/restaurants')
            .then(res => this.setState({restaurants: res.data}))
    }


    componentDidMount(){
        let restaurantId = this.props.restaurantId 

        axios.get(`http://localhost:8000/api/comments/${restaurantId}`)
            .then(res => this.setState({comments: res.data}))

    }

    deleteComment = (id) => {
        axios.delete(`http://localhost:8000/api/comments/${id}`)
            .then(res => this.setState({comments: [...this.state.comments.filter(comment => comment.rowid !== id)]}))
    }


    render(){
        return(
            this.state.comments.map(
            comment => (
                <div style={commentStyle}>
                    <p>{comment.comment} </p>
                    <button onClick={this.deleteComment.bind(this, comment.rowid)}>Delete</button>
                </div>
                )
            )
        )
    } 
}

const commentStyle = {
    display: 'flexbox',
    textAlign: 'center',
    border: '5px solid black',
    margin: '5px',
    backgroundColor: 'white',
    maxWidth: '500px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

export default Comments