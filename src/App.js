import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContainer from './containers/TopContainer'
import RestaurantsContainer from './Restaurants/RestaurantsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
// import Header from './components/Header'
import Navi from './components/Navi';
import { Switch, Route } from 'react-router-dom';
import UsersContainer from './Users/UsersContainer';
import Comments from './Restaurants/Comments'
import Restaurant from './Restaurants/Restaurant'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" style= { app } >
      <Navi/>

      <Switch>
          <Route exact path='/' component={TopContainer}/>
          <Route path='/restaurants' component={RestaurantsContainer}/>
          <Route path='/categories' component={CategoriesContainer}/>
          <Route path='/login' component={UsersContainer} />
          <Route path='/restaurant/:id' render={
            (routeComponentProps) => {
              return (
                <div>
                  <Restaurant restaurant={routeComponentProps.location.pathname} />
                  <Comments restaurantId={routeComponentProps.match.params.id} {...routeComponentProps} />
                </div>
              )
            }
          } />
      </Switch>

      <Footer />
    </div>
  );
}

const app = {
  backgroundColor: "#686666"
}

export default App;
