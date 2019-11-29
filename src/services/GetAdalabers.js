//MAIN API
const url = "https://api.github.com/orgs/adalab/members";

const GetAdalabers = () => {
    return fetch(url)
        .then(response => response.json());
};


//SECOND API

// const url2 = "https://api.github.com/users/AilatanGH";
//
// const GetDetailInfo = () => {
//     return fetch(url2)
//         .then(response => response.json());
// };


export {GetAdalabers};
// export {GetDetailInfo};

// https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json