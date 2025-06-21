import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {topics, photos, toggleFav, favList, displayAlert, isFavPhotoExist, setDisplayModal} = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} toggleFav={toggleFav} favList={favList} displayAlert={displayAlert} setDisplayModal={setDisplayModal}/>
    </div>
  );
};

export default HomeRoute;
