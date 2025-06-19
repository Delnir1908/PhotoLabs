import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(prevSelected => !prevSelected);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleSelected={toggleSelected}/>
    </div>
  );
};

export default App;
