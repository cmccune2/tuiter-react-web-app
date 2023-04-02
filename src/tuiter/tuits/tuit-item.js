import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

const TuitItem = ({
                      tuit = {
                          "id": 1,
                          "topic": "Web Development",
                          "userName": "ReactJS",
                          "time": "2h",
                          "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                          "image": "react.jpg",
                          "liked": true,
                          "replies": 123,
                          "retuits": 432,
                          "likes": 2345,
                          "handle": "@ReactJS",
                          "tuit": "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
                      }
                  }) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
    }
    return (
        <div className="list-group-item p-2">
            <div className="row ms-0 me-0">
                <div className="col-1 p-0">
                    <img src={`../images/${tuit.image}`}
                         className="rounded-circle ms-1 mt-1" width="40px" alt="" />
                </div>
                <div className="col-11">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit.id)}></i>
                    <p className="m-0">
                        <b className="m-0 me-2">
                            {tuit.userName}
                        </b>
                        <FontAwesomeIcon icon={faCheckCircle}  className="text-primary me-2"/>
                        <span className="text-secondary">
                            {tuit.handle} - {tuit.time}
                        </span>
                    </p>
                    {/*<p className="m-0 text-white">*/}
                    {tuit.tuit}
                    {/*</p>*/}
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </div>
    );
}

export default TuitItem;