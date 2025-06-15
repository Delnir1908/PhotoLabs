import "../styles/PhotoListItem.scss";

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props;

  return (
    <>
      <img className='photoItem' src={urls.full} />
      <img className='profilePicture' src={user.profile} />
      <span>{user.username}</span>
      <span>{location.city}, {location.country}</span>
    </>
  )
};

export default PhotoListItem;
