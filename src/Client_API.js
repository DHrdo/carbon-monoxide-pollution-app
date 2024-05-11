import Axios from "axios";

const fetchData = async (url, setIsFetchLoading) => {
    try {
        const response = await Axios.get(url);
        setIsFetchLoading(false);
        return response.data;
    } catch (error) {
        console.error(error);
        setIsFetchLoading(false);
        return null;
    }
};

export const processResponse = (data) => {
    if (!data || data.length === 0) return null;

    const firstItemDate = data[0].time.interval_start;
    const lastItemDate = data[data.length - 1].time.interval_start;
    const co2Average = data.reduce((total, item) => total + item.value.average, 0) / data.length;
    const co2min = Math.min(...data.map(item => item.value.min));
    const co2max = Math.max(...data.map(item => item.value.max));

    return {
        data_resume: {
            begin_date: firstItemDate,
            end_date: lastItemDate,
            co2_min: co2min,
            co2_max: co2max,
            co2_average: co2Average
        },
        data: data
    };
};

export const fetchDataByState = async (selected_state, beginDate, endDate, setIsFetchLoading) => {
    const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=${selected_state}&begin=${beginDate}&end=${endDate}&limit=100`;
    const data = await fetchData(url, setIsFetchLoading);

    const log = processResponse(data);
    console.log(log)

    return processResponse(data);
};

export const fetchDataByCoordinates = async (longitude, latitude, beginDate, endDate, setIsFetchLoading) => {
    const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?point=${longitude}&point=${latitude}&begin=${beginDate}&end=${endDate}&limit=100`;
    const data = await fetchData(url, setIsFetchLoading);

    const log = processResponse(data);
    console.log(log)
    
    return processResponse(data);
};