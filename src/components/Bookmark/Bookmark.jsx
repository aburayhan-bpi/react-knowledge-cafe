import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;

  return (
    <div className="bg-white p-4 my-4 rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
