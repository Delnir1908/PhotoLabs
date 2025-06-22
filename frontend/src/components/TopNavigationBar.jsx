import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const {topics, doesFavPhotoExist} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge doesFavPhotoExist={doesFavPhotoExist}/>
    </div>
  )
};

export default TopNavigation;
