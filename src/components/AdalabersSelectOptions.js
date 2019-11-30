import React from 'react';
import PropTypes from 'prop-types';


const AdalabersSelectOptions = props => {
    const {AllAdalabers, getAdalaberOption} = props;
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

AdalabersSelectOptions.propTypes = {
    AllAdalabers: PropTypes.array,
    getAdalaberOption: PropTypes.func

};

export default AdalabersSelectOptions;