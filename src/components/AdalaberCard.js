import React from 'react';


const AdalaberCard = props => {
    const {SelectAdalaber} = props;
    return (
        <div className="cardContainer">
            <img className="profileImage" src={SelectAdalaber.avatar_url}></img>
            <div className="DetailContainer">
                <p className="profileLocation">{SelectAdalaber.location}</p>
                <p>@{SelectAdalaber.login}</p>
                <p>{SelectAdalaber.name}</p>
            </div>
            <div className="followContainer">
                <p>{SelectAdalaber.followers}</p>
                <p>{SelectAdalaber.following}</p>
            </div>
        </div>
    );
}

export default AdalaberCard;
