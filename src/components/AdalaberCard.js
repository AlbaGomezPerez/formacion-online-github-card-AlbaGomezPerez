import React from 'react';
const AdalaberCard = props => {
    const {AllAdalabers} = props;
    return (
        <div className="selectAdalaber">
            {AllAdalabers.map((item, index) => {
                    return (
                        <div className="containerCard">
                            <img className="profileImage" src="{item.avatar_url}" alt="studentImage"></img>
                            <p className="profileLogin">{item.login}</p>

                        </div>
                    )
                }
            )}
        </div>
    );
}

export default AdalaberCard;