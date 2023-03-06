import React from "react";
import postObjects from './post-card-objects.json';
import PostItem  from "./post-card-item";


const HomePostsList = () => {
    return(
        <div>
            {postObjects.map(post => <PostItem key={post._id} item={post}/>)}
        </div>
    );
};

export default HomePostsList;