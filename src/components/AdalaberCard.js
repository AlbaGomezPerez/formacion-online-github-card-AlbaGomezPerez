import React from 'react';
import PropTypes from 'prop-types';


const AdalaberCard = props => {
    const {SelectAdalaber} = props;
    return (
        <div className="cardContainer">
            <img className="profileImage" src={SelectAdalaber.avatar_url}></img>
            <div className="DetailContainer">
                <p className="profileName">{SelectAdalaber.name}</p>
                <p>@{SelectAdalaber.login}</p>
                <p className="profileLocation">{SelectAdalaber.location}</p>


            </div>
            <div className="followContainer">
                <p className="profileRepos">Repos {SelectAdalaber.public_repos}</p>
                <p className="profileFollowers">Followers {SelectAdalaber.followers}</p>
                <p className="profileFollowing">Following {SelectAdalaber.following}</p>
            </div>
        </div>
    );
}

AdalaberCard.propTypes = {
    SelectAdalaber: PropTypes.object
};

export default AdalaberCard;

