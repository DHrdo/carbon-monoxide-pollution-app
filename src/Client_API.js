import Axios from "axios";

export const APICallState = (selected_state, beginDate, endDate, setIsFetchLoading) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=${selected_state}&begin=${beginDate}&end=${endDate}&limit=100`)
        .then((response) => {
            console.log(response.data);

            const firstItemDate = response.data[0].time.interval_start
            const lastItemDate = response.data[response.data.length - 1].time.interval_start

            const API_DATA = response.data.map(item => {
                const { average, count, max, min } = item.value;

                return {
                    begin_date: firstItemDate,
                    end_date: lastItemDate,
                };
            });
            console.log('APIDATA', API_DATA);
            setIsFetchLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setIsFetchLoading(false);
        });
};

export const APICallData = (longitude, latitude, beginDate, endDate, setIsFetchLoading) => {

    Axios.get(`https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?point=${longitude}&point=${latitude}&begin=${beginDate}&end=${endDate}&limit=100`)
        .then((response) => {
            console.log(response.data);
            setIsFetchLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setIsFetchLoading(false);
        });
};

