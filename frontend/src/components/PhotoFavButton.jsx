import { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {displayAlert, toggleFav, favList} = props;

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={toggleFav} 
          selected={selected} 
          displayAlert={displayAlert}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;



