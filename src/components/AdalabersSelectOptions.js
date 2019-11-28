import React from 'react';
const AdalabersSelectOptions = props => {
    const {AllAdalabers} = props;
    return (
        <select className="selectAdalaber">
            {AllAdalabers.map((item, index) => {

                return (
                   <option className="optionSelectAdalaber" value={item.id} key={index}>{item.login}</option>
                )

            }
            )}
        </select>
    );
}

export default AdalabersSelectOptions;