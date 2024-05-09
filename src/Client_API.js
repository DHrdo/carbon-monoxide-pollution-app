import Axios from "axios";

export const APICallState = (selected_state, beginDate, endDate) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=${selected_state}&begin=${beginDate}&end=${endDate}&limit=1`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

export const APICallData = (longitude, latitude, beginDate, endDate) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?point=${longitude}&point=${latitude}&begin=${beginDate}&end=${endDate}&limit=1`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

