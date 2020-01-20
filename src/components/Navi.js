import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Navi.css'
// import TopContainer from '../containers/TopContainer'
// import RestaurantsContainer from '../Restaurants/RestaurantsContainer'
// import MapContainer from '../Map/MapContainer'
// import Login from '../Users/LogIn'

class Navi extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1 className="logo">You Hungry Fam?</h1>
                    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                    <nav>
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/restaurants">Restaurants</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/login">Log In/Sign Up</Link></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" className="nav-toggle-label">
                        <span></span>
                    </label>
                </header>
          </div>
        )
    }
}

export default Navi