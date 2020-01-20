import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContainer from './containers/TopContainer'
import RestaurantsContainer from './Restaurants/RestaurantsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
// import Header from './components/Header'
import Navi from './components/Navi'
import Login from './Users/LogIn';

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App" style= { app } >
      <Navi/>
      {/* <Header /> */}
      {/* <TopContainer />*/}
      {/* <Switch>                    
        <Route exact path="/" component={TopContainer}/>
        <Route path='/restaurants#' component={ RestaurantsContainer } />                    
        <Route path="/category#" component={ CategoriesContainer }/>                    
        <Route path="/login#" component={Login}/>                
      </Switch> */}
      <Switch>
          <Route exact path='/' component={TopContainer}/>
          <Route path='/restaurants' component={RestaurantsContainer}/>
          <Route path='/categories' component={CategoriesContainer}/>
          <Route path='/login' component={Login} />
      </Switch>
                
      <footer>
        By us for us
      </footer>
    </div>
  );
}

const app = {
  backgroundColor: "#686666"
}

export default App;
