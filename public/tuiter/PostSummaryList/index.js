import posts from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return `
    <ul class="list-group rounded-3">
        ${posts.map((post) => PostSummaryItem(post)).join("")}
    </ul>
    `;
};
export default PostSummaryList;