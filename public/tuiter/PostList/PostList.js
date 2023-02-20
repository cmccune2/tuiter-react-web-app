import Posts from "./Post.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return `
    ${Posts.map((post) => PostItem(post)).join("")}
  `;
};
export default PostList;