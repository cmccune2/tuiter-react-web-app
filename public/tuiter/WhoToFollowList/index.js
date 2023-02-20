import whoList from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return `
    <ul class="list-group rounded-3">
        <li class="list-group-item">Who to follow</li>
        ${whoList.map((who) => WhoToFollowListItem(who)).join("")}
    </ul>
    `;
};
export default WhoToFollowList;