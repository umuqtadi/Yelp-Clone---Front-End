import React, { Component } from 'react'
import Categories from './Categories'

class CategoriesContainer extends Component {
    state = {
        categories: 
        [
            {
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80",
                type: 'Pizza',
                description: 'Pizza and where my wings at type shit'
            },
            {
                image: 'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Burgers',
                description: 'Burger and some fries type shit'
            },
            {
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Pakistani',
                description: 'Damn. That shit good as hell'
            },
            {
                image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Mediterranean',
                description: 'Hummus and yalla with that shit'
            },
            {
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80",
                type: 'Pizza',
                description: 'Pizza and where my wings at type shit'
            },
            {
                image: 'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Burgers',
                description: 'Burger and some fries type shit'
            },
            {
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Pakistani',
                description: 'Damn. That shit good as hell'
            },
            {
                image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
                type: 'Mediterranean',
                description: 'Hummus and yalla with that shit'
            },
        ]
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
}

export default CategoriesContainer