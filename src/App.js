import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContainer from './containers/TopContainer'
import RestaurantsContainer from './Restaurants/RestaurantsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
import Header from './components/Header'


function App() {
  return (
    <div className="App" style= { app } >
      <Header />
      <TopContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
      <footer>
        Made by us for us
      </footer>
    </div>
  );
}

const app = {
  backgroundColor: '#686666'
}

export default App;
