import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ doesFavPhotoExist }) => {
  //if there is a photo liked (selected), fill the badge and show notification
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={doesFavPhotoExist} selected={doesFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;
