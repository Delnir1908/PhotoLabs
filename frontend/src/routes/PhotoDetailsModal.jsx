import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {setDisplayModal, singlePhotoDetail} = props;

  const {location, urls, user} = singlePhotoDetail;
  const handleClick = () => {
    setDisplayModal(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() =>handleClick()}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <img className='photo-details-modal__image' src={urls.full} />
      <div className="photo-details-modal__photographer-details">
        <img className='photo-details-modal__photographer-profile' src={user.profile} />
        <div className="photo-details-modal__photographer-info">
          {user.name}
          <div className="photo-details-modal__photographer-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;


  
