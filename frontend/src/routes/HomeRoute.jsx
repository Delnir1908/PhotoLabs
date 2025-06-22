import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    toggleFav,
    favList,
    displayAlert,
    doesFavPhotoExist,
    setDisplayModal,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        doesFavPhotoExist={doesFavPhotoExist}
      />
      <PhotoList
        photos={photos}
        toggleFav={toggleFav}
        favList={favList}
        displayAlert={displayAlert}
        setPhotoSelected={setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
