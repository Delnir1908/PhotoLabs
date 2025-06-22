import { useState } from 'react';

const useApplicationData = () => {
  const [favList, setFavList] = useState([]);
  const isFavPhotoExist = favList.length > 0;
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState('');

  // Toggle favorite photo IDs
  const updateToFavPhotoIds = (id) => {
    setFavList(prevFavList =>
      prevFavList.includes(id)
        ? prevFavList.filter(favId => favId !== id)
        : [...prevFavList, id]
    );
  };

  // Set selected photo and open modal
  const setPhotoSelected = (photo) => {
    setSinglePhotoDetail(photo);
    setDisplayModal(true);
  };

  // Close modal and clear selected photo
  const onClosePhotoDetailsModal = () => {
    setDisplayModal(false);
    setSinglePhotoDetail('');
  };

  // State object
  const state = {
    favList,
    isFavPhotoExist,
    displayModal,
    singlePhotoDetail
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
