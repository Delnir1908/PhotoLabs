import { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {displayAlert} = props;
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(prevSelected => !prevSelected);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={toggleSelected} selected={selected} displayAlert={displayAlert}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;



