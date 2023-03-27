import React from "react";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit }) => {

    return (
        <div className="row">
            <div className="col">
                <FontAwesomeIcon icon={faComment}  className="me-2"/>
                {tuit.replies}
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faRetweet} className="me-2"
                                 aria-hidden="true"/>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked && <i className="bi bi-heart-fill text-danger me-2"/>
                }
                {
                    !tuit.liked && <FontAwesomeIcon icon={faHeart} className="bi bi-heart me-2"/>
                }
                {tuit.likes}
            </div>
            <div className="col">
                <i className="bi bi-share me-2" />
            </div>
        </div>
    );
};

export default TuitStats;