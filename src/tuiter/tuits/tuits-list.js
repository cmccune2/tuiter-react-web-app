import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const tuits = useSelector(
        (state) => state.tuits
    );
    return (
        <div className="mt-2 bg-light list-group">
            {tuits.map(tuit => <TuitItem key={tuit.id} tuit={tuit} />)}
        </div>
    );
}

export default TuitsList;