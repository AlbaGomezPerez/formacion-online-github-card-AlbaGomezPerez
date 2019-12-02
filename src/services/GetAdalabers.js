//MAIN API
const url = "https://api.github.com/orgs/adalab/members?per_page=68";

const GetAdalabers = () => {
    return fetch(url)
        .then(response => response.json());
};

export {GetAdalabers};
