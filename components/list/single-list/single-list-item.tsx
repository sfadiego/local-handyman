interface SingleListItemProps {
  icon: React.ReactNode;
  text: string;
  time: string;
}

const SingleListItem = ({ icon, text, time }: SingleListItemProps) => {
  return (
    <div className="feed-item">
      <div className="feed-icon" style={{ background: 'rgba(34,197,94,.1)' }}>
        {icon}
      </div>
      <div>
        <div className="feed-text" dangerouslySetInnerHTML={{ __html: text }} />
        <div className="feed-time">{time}</div>
      </div>
    </div>
  );
};

export default SingleListItem;
