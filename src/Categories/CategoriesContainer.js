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
                description: 'THE BEST FUCKING FOOD OF ALL TIME MUTHA FUCKAS'
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
            <div style={ cardStyle }>
                <Categories 
                    categories = { this.state.categories }
                />
            </div>
        )
    }
}

const cardStyle = {
    display: 'flex',
    padding: '5px',
    margin: '5px',
    alignItems: 'space-between',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}

export default CategoriesContainer