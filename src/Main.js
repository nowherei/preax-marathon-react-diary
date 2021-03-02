import dateFormatter from "./utils/dateFormatter";

const Main = ({ posts, setModalId }) => {

  return (
    <div className="main-wrapper">
      {posts.map((post) => (
        <div className="card" key={post}
            onClick={() => {
                setModalId(post.id);
            }}>
          <img
            className="card-img"
            alt="card"
            src={post.img}
          />
          <div className="card-smile-circle">{post.mood}</div>
          <div className="card-caption">
            <div className="card-topline">
              <h5>{post.title}</h5>
              <span className="card-caption-date">{dateFormatter(post.date, 'main')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
