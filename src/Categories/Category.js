import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Category extends Component {

    render() {
        const category = this.props.category
        return(
            <div >
                <Card bg="dark" text="white" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={ category.image } style={ imageWrap } />
                    <Card.Body>
                        <Card.Title> { category.type } </Card.Title>
                        <Card.Text>
                            { category.description }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const imageWrap = {
    width: '100%',
    overflow: 'hidden',
    objectFit: 'cover',
    maxHeight: '200px'
}



export default Category