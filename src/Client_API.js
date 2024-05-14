import Axios from "axios";

const fetchData = (url, setIsFetchLoading) => {
    return Axios.get(url)
        .then(response => {
            setIsFetchLoading(false);
            return response.data;
        })
        .catch(error => {
            console.error(error);
            setIsFetchLoading(false);
            return null;
        });
};

export const processResponse = (data) => {
    if (!data || data.length === 0) return null;

    const firstItemDate = data[0].time.interval_start.slice(0, 10); //Get start date and only print the first 11 letters/numebers
    const lastItemDate = data[data.length - 1].time.interval_start.slice(0, 10); //Get end date and only print the first 11 letters/numebers
    const co2Average = data.reduce((total, item) => total + item.value.average, 0) / data.length; //Get the average co2
    const co2min = Math.min(...data.map(item => item.value.min)); //Get the minimum CO2
    const co2max = Math.max(...data.map(item => item.value.max)); //Get the maximum CO2

    return {
        data_resume: {
            begin_date: firstItemDate,
            end_date: lastItemDate,
            co2_min: co2min.toFixed(4),
            co2_max: co2max.toFixed(4),
            co2_average: co2Average.toFixed(4),
        },
        data: data
    };
};

export const fetchDataByState = (selected_state, beginDate, endDate, setIsFetchLoading) => {
    const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=${selected_state}&begin=${beginDate}&end=${endDate}&limit=100`;
    return fetchData(url, setIsFetchLoading)
        .then(data => {
            const log = processResponse(data);
            console.log(log);
            return processResponse(data);
        });
};

export const fetchDataByCoordinates = (longitude, latitude, beginDate, endDate, setIsFetchLoading) => {
    const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?point=${longitude}&point=${latitude}&begin=${beginDate}&end=${endDate}&limit=100`;
    return fetchData(url, setIsFetchLoading)
        .then(data => {
            const log = processResponse(data);
            console.log(log);
            return processResponse(data);
        });
};