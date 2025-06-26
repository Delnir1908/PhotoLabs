import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const {topics, doesFavPhotoExist, fetchPhotosByTopic} = props;
  //click logo to show all items (set no topic)
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => fetchPhotosByTopic('')}>PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavBadge doesFavPhotoExist={doesFavPhotoExist}/>
    </div>
  )
};

export default TopNavigation;
