import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {photos, favList, toggleFav, displayAlert, setDisplayModal} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav} favList={favList} displayAlert={displayAlert} setDisplayModal={setDisplayModal}/>;
       }) }
    </ul>
  );
};

export default PhotoList;
