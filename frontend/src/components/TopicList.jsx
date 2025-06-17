import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem'

const TopicList = (props) => {
  const topicList = [...props.topics];
  console.log(topicList);
  return (
    <div className="top-nav-bar__topic-list">
      {topicList.map((topic) => <TopicListItem key={topic.id} {...topic}/>)}
    </div>
  );
};

export default TopicList;
