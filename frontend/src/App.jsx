import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //const photos = new Array(3).fill(null);
  return (
    <div className="App">
      {/* <div className='photo-list'>
        {photos.map(() => <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>)}
      </div> */}
      <HomeRoute />
    </div>
  );
};

export default App;
