import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContainer from './containers/TopContainer'
import RestaurantsContainer from './Restaurants/RestaurantsContainer';
import CategoriesContainer from './Categories/CategoriesContainer';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <TopContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}

export default App;
