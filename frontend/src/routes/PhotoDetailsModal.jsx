import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({setDisplayModal, singlePhotoDetail}) => {
  const handleClick = () => {
    setDisplayModal(false);
    console.log(singlePhotoDetail);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() =>handleClick()}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
