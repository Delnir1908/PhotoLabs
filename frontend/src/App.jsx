import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => setIsFav(prevIsFav => !prevIsFav);
  const favList = [];

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFav={toggleFav}/>
    </div>
  );
};

export default App;
