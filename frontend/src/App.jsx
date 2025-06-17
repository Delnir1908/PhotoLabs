import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  //const photos = new Array(3).fill(null);
  return (
    <div className="App">
      {/* <div className='photo-list'>
        {photos.map(() => <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>)}
      </div> */}
      <PhotoList />
    </div>
  );
};

export default App;
