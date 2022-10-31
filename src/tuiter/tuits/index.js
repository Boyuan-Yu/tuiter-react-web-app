import React from "react";
import TuitItem from "./tuit-item.js";
import "./index.css"
import {useSelector} from "react-redux";


const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;