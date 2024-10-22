import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 p-5 bg-neutral-100">
      <h3 className="text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
