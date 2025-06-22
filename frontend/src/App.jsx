import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from './hooks/useApplicationData'; // Import your hook

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleFav={updateToFavPhotoIds}
        favList={state.favList}
        isFavPhotoExist={state.isFavPhotoExist}
        setDisplayModal={setPhotoSelected}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          toggleFav={updateToFavPhotoIds}
          favList={state.favList}
          isFavPhotoExist={state.isFavPhotoExist}
          setDisplayModal={onClosePhotoDetailsModal}
          singlePhotoDetail={state.singlePhotoDetail}
        />
      )}
    </div>
  );
};

export default App;
