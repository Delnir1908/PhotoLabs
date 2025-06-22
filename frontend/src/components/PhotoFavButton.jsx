import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {displayAlert, toggleFav, favList, id} = props;
  const selected = favList.includes(id);

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFav(id)} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selected} 
          displayAlert={displayAlert}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;



