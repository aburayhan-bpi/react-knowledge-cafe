import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="p-5">
      <div className="border-b-2">
        <img className="rounded-lg w-full" src={cover} alt="cover_photo" />

        <div className="flex justify-between py-5">
          <div className="flex gap-2">
            <img className="w-12 h-full" src={author_img} alt="" />
            <div>
              <h3>{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span>{reading_time} min read</span>
            <button onClick={() => handleAddToBookmark(blog)}>
              <CiBookmark className="text-2xl" />
            </button>
          </div>
        </div>
        <h3 className="text-3xl font-bold">{title}</h3>

        <p className="flex gap-4 py-4 mb-3">
          {hashtags.map((hashtag, indx) => (
            <span key={indx}>#{hashtag}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func
};

export default Blog;
