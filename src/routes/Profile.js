import React from "react";
import profile_img from "../img/profile.jpeg";

const Profile = () => {
    return (
        <div>
            <img src={profile_img} />
            <p className="profile_name">Bae Ju Wan</p>
        </div>
    );
};
export default Profile;