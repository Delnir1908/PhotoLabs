import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {
    toggleFav,
    favList,
    displayAlert,
    setDisplayModal, // This is onClosePhotoDetailsModal from App.jsx
    singlePhotoDetail,
  } = props;

  const { id, location, urls, user, similar_photos } = singlePhotoDetail;
  const similarPhotosArray = Object.values(similar_photos);

  const handleClick = () => {
    setDisplayModal(); // This will close the modal
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <PhotoFavButton displayAlert={displayAlert} toggleFav={toggleFav} favList={favList} id={id}/>
      <img className='photo-details-modal__image' src={urls.full} />
      <div className="photo-details-modal__photographer-details">
        <img className='photo-details-modal__photographer-profile' src={user.profile} />
        <div className="photo-details-modal__photographer-info">
          {user.name}
          <div className="photo-details-modal__photographer-location">{location.city}, {location.country}</div>
        </div>
      </div>
      <div className="photo-details-modal__header">Similar Photos</div>
      <ul className="photo-details-modal__images">
        {similarPhotosArray.map((photo) => (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleFav={toggleFav}
            favList={favList}
            displayAlert={displayAlert}
            setPhotoSelected={setDisplayModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoDetailsModal;
