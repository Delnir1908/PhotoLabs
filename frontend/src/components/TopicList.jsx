import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem'
import topics from "../mocks/topics";

const TopicList = () => {
  const topicList = [...topics];
  return (
    <div className="top-nav-bar__topic-list">
      {topicList.map((topic) => <TopicListItem key={topic.id} {...topic}/>)}
    </div>
  );
};

export default TopicList;
