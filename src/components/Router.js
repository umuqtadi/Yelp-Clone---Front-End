import React, {Component} from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import TopContainer from '../containers/TopContainer'
import RestaurantsContainer from '../Restaurants/RestaurantsContainer'
import MapContainer from '../Map/MapContainer'

class Routers extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/category">Restaurants</Link></li>
                        <li><Link to="/products">Log In/Sign Up</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" component={TopContainer}/>
                    <Route path="/category" component={RestaurantsContainer}/>
                    <Route path="/products" component={MapContainer}/>
                </Switch>
          </div>
    
        )
    }
}

export default Routers