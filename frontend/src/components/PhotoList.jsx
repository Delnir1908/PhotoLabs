import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({photos, toggleFav}) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav}/>;
       }) }
    </ul>
  );
};

export default PhotoList;
