import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({toggleSelected, photos}) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} toggleSelected={toggleSelected}/>) }
    </ul>
  );
};

export default PhotoList;
