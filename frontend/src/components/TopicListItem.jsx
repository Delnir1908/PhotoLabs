import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotosByTopic }) => {
  const {id, title} = topic;
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
