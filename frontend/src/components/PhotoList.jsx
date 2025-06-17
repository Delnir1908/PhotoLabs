import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos'

const PhotoList = () => {
  const PhotoList = [...photos];

  return (
    <ul className="photo-list">
      {PhotoList.map((photo) => <PhotoListItem key={photo.id} {...photo} />) }
    </ul>
  );
};

export default PhotoList;
