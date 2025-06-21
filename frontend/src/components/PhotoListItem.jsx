import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.photo;
  const {toggleFav, favList, displayAlert, setDisplayModal} = props;

  return (
    <div className="photo-list__item" onClick={() => setDisplayModal(true)}>
      <PhotoFavButton displayAlert={displayAlert} toggleFav={toggleFav} favList={favList} id={id}/>
      <img className='photo-list__image' src={urls.regular} />
      <div className="photo-list__user-details">
        <img className='photo-list__user-profile' src={user.profile} />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
