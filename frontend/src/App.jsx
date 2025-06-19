import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [isFav, setIsFav] = useState(false);
  const toggleFav = () => setIsFav(prevIsFav => !prevIsFav);
  const [favList, setFavList] = useState([]);
  const updateFavList = () => {
    if(!isFav && favList.includes(id)) {
      favList.remove(id);
    }
  
    if(isFav && !favList.includes(id)) {
      favList.push(id);
    }
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFav={toggleFav} favList={favList}/>
    </div>
  );
};

export default App;
