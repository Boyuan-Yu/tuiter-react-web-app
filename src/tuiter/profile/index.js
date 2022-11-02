import React from "react";
import ProfileItem from "./profile-item";
import {useSelector} from "react-redux";
import "./index.css";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
            <h4>Profile</h4>
            <ProfileItem profile={profile}/>
        </>
    );
};
export default ProfileComponent;