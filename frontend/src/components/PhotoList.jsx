import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const photosList = [...props.photos];

  return (
    <ul className="photo-list">
      {photosList.map((photo) => <PhotoListItem key={photo.id} {...photo} />) }
    </ul>
  );
};

export default PhotoList;
