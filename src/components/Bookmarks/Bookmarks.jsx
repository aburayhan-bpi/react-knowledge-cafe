import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 p-5 bg-neutral-100">
      <div className="p-6 text-indigo-600 border-2 border-indigo-600 rounded-lg text-lg font-bold mb-5">
        <p>Spend time on read: {readingTime}min</p>
      </div>
      <h3 className="text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          readingTime={readingTime}
        ></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
