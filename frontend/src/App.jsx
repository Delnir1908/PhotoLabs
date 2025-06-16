import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(null);
  return (
    <div className="App">
      <div className='photo-list'>
        {photos.map((_,index) => 
          (<PhotoListItem key={index} photo={sampleDataForPhotoListItem}/>)
        )}     
      </div>
    </div>
  );
};

export default App;
