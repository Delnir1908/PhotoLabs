import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {topics, photos, toggleFav, favList} = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} toggleFav={toggleFav} favList={favList}/>
    </div>
  );
};

export default HomeRoute;
