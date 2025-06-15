import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.photo;

  return (
    <>
      <img className='photoItem' src={urls.regular} />
      <img className='profilePicture' src={user.profile} />
      <span>{user.name}</span>
      <span>{location.city}, {location.country}</span>
    </>
  )
};

export default PhotoListItem;
