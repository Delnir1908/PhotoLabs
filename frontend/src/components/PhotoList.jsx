import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos, favList, toggleFav, displayAlert, setPhotoSelected } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFav={toggleFav}
          favList={favList}
          displayAlert={displayAlert}
          setPhotoSelected={setPhotoSelected}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
