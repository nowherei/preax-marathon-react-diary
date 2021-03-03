import dateFormatter from "./utils/dateFormatter";

const Main = ({ posts, setModalId, searchString, searchMood }) => {
  return (
    <div className="main-wrapper">
      {posts.map((post, key) => {
        if (
          searchString !== "" &&
          post.title.toLowerCase().indexOf(searchString.toLowerCase()) === -1
        ) {
          return false;
        }

        if (searchMood !== "" && post.mood !== searchMood) {
          return false;
        }
        return (
          <div
            className="card"
            key={key}
            onClick={() => {
              setModalId(post.id);
            }}
          >
            <img className="card-img" alt="card" src={post.img} />
            <div className="card-smile-circle">{post.mood}</div>
            <div className="card-caption">
              <div className="card-topline">
                <h5>{post.title}</h5>
                <span className="card-caption-date">
                  {dateFormatter(post.date, "main")}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
