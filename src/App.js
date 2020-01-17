import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContainer from './containers/TopContainer'
import RestaurantsContainer from './Restaurants/RestaurantsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
import Header from './components/Header'
import Router from './components/Router'
import Login from './Users/LogIn';


function App() {
  return (
    <div className="App" style= { app } >
      {/* <Router/> */}
      <Header />
      <TopContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
      <Login />
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
