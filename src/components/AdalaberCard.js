import React from 'react';
// import {GetDetailInfo} from './services/GetAdalabers';


const AdalaberCard = props => {
    const {SelectAdalaber} = props;
    return (
        <div>
            <img src={SelectAdalaber.avatar_url}></img>
            <p>{SelectAdalaber.location}</p>
            <p>{SelectAdalaber.login}</p>
            <p>{SelectAdalaber.name}</p>
            <p>{SelectAdalaber.login}</p>
            <p>{SelectAdalaber.followers}</p>
            <p>{SelectAdalaber.following}</p>
        </div>
    );
}

export default AdalaberCard;
