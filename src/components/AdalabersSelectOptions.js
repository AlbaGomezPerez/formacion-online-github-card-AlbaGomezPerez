import React from 'react';
const AdalabersSelectOptions = props => {
    const {AllAdalabers, getAdalaberOption, SelectAdalaber} = props;
    return (
        <select className="selectAdalaber" onChange={getAdalaberOption}>
            {AllAdalabers.map((item, index) => {

                return (
                   <option className="optionSelectAdalaber" id={item.login} value={item.login} key={index}>{item.login}</option>
                )
            }
            )}
        </select>
    );
}

export default AdalabersSelectOptions;