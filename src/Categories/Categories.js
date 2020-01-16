import React, { Component } from 'react'
import Category from './Category'

class Categories extends Component {

    render() {
        return(
            this.props.categories.map( category => 
                <Category category = {category} />    
            )
        )
    }
}

export default Categories