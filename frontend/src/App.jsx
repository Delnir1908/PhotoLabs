import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [hasFav, setHasFav] = useState(false);
  const toggleFav = () => setHasFav(prevHasFav => !prevHasFav);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFav={toggleFav}/>
    </div>
  );
};

export default App;
