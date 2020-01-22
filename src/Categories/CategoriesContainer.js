import React, { Component } from 'react'
import Categories from './Categories'
import axios from 'axios'

class CategoriesContainer extends Component {
    state = {
        categories: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/categories')
            .then(res => this.setState({categories: res.data}))
    }

    render(){
        return(
            <div style={mainStyle}>
                <h1>Categories based on Type of Food:</h1>
                <div style={ cardStyle }>
                    <Categories 
                        categories = { this.state.categories }
                    />
                </div>
            </div>
        )
    }
}

const mainStyle = {
    textAlign: 'center',
    margin: '5px'
}

const cardStyle = {
    display: 'flex',
    padding: '5px',
    margin: '5px',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    marginTop: '10px'
}

export default CategoriesContainer