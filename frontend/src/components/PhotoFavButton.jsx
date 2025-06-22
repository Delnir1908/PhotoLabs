import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {displayAlert, toggleFav, favList, id, onClick} = props;
  const selected = favList.includes(id);

  return (
    <div className="photo-list__fav-icon"
      onClick={
        (e) => {
          toggleFav(id)
          if (onClick) onClick(e);
        }
      }
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selected} 
          displayAlert={displayAlert}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;



