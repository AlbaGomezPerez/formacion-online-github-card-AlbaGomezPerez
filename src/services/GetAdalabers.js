const url = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";
//https://api.github.com/orgs/adalab/members
const GetAdalabers = () => {
    return fetch(url)
        .then(response => response.json());
};

export {GetAdalabers};