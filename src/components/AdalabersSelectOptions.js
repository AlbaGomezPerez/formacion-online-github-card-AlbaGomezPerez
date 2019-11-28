import React from 'react';
const AdalabersSelectOptions = props => {
    const {AllAdalabers} = props;
    return (
        <select name="adalaberSelect">
            {AllAdalabers.map((item, index) => {
                return (
                    <option value={item.name}>{item.name}</option>
                )
            })}
        </select>
    );
}

export default AdalabersSelectOptions;