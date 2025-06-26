import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { toggleFav, favList, displayAlert, setPhotoSelected, photo } = props;
  const { id, location, urls, user } = photo;

  const handleClick = () => {
    setPhotoSelected(photo);
    console.log(favList); //test favList
    console.log(photo); //test which photo is selected
  };

  return (
    <div className="photo-list__item" key={id} onClick={handleClick}>
      <PhotoFavButton
        displayAlert={displayAlert}
        toggleFav={toggleFav}
        favList={favList}
        id={id}
        onClick={(e) => e.stopPropagation()}
      />
      <img className='photo-list__image' src={urls.regular} />
      <div className="photo-list__user-details">
        <img className='photo-list__user-profile' src={user.profile} />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;