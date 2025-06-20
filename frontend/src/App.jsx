import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [favList, setFavList] = useState([]);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  if(favList.length > 0) setIsFavPhotoExist(true);

  // Toggle favorite by photo id
  const toggleFav = (id) => {
    setFavList(prevFavList =>
      prevFavList.includes(id)
        ? prevFavList.filter(favId => favId !== id) // remove if exists
        : [...prevFavList, id] // add if not exists
    );
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFav={toggleFav} favList={favList} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default App;
