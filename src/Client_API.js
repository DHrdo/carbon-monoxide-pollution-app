import Axios from "axios";

export const APICallState = (selected_state, beginDate, endDate, setIsFetchLoading) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=${selected_state}&begin=${beginDate}&end=${endDate}&limit=1`)
        .then((response) => {
            console.log(response.data);
            setIsFetchLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setIsFetchLoading(false);
        });
};

export const APICallData = (longitude, latitude, beginDate, endDate, setIsFetchLoading) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?point=${longitude}&point=${latitude}&begin=${beginDate}&end=${endDate}&limit=1`)
        .then((response) => {
            console.log(response.data);
            setIsFetchLoading(false);
            })
        .catch((error) => {
            console.error(error);
            setIsFetchLoading(false);
        });
};

