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
        doesFavPhotoExist={state.doesFavPhotoExist}
        setDisplayModal={setPhotoSelected}
      />
      {state.displayModal && (
        <>
        <div className="modal-overlay"></div>
        <PhotoDetailsModal
          key={state.singlePhotoDetail.id}
          toggleFav={updateToFavPhotoIds}
          favList={state.favList}
          doesFavPhotoExist={state.doesFavPhotoExist}
          setDisplayModal={onClosePhotoDetailsModal}
          singlePhotoDetail={state.singlePhotoDetail}
        />
        </>
      )}
    </div>
  );
};

export default App;
