import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h3>Single blog</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
