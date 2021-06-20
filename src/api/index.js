import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// export const fetchData = async (country) => {
//     let changeableUrl = url;
//     if(country){
//         changeableUrl = `${url}/countries/${country}`
//     }
//     try{
//         const { data : {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
//         return { confirmed, recovered, deaths, lastUpdate};
//     }catch(error){

//     }
// }

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    }catch(error){
        alert(`Error occured while fetching daily data...
        ${error}`);
    }
}

export const fetchCountryDailyData = async (country) => {
    try{
        const {data} = await axios.get(`https://api.covid19api.com/total/dayone/country/${country}`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.Confirmed,
            recovered: dailyData.Recovered,
            deaths: dailyData.Deaths,
            date: dailyData.Date
        }));
        return modifiedData;
    }catch(error){
        alert(`Error occured while fetching countries daily data...
        ${error}`);
    }
}

export const fetchCountries = async () => {
    try{
        const {data: countries} = await axios.get("https://api.covid19api.com/countries");
        return countries.map(country => country.Country).sort();
    }catch(error){

    }
}

export const fetchWorldData = async () => {
    try{
        const response = await axios.get("https://api.covid19api.com/summary");
        const {data: {Global : global, Countries: countries}} = response;
        const countriesWithId = countries.map((row) => {
            const { ID, ...rest } = row;
            return { id: ID, ...rest };
          });
        return {global, countriesWithId};
    }catch(error){
        alert(`Error occured while fetching world data...
        ${error}`);
    }
}

export const fetchIndianStateData = async () => {
    try{
        const response = await axios.get("https://api.covid19india.org/data.json");
        const {data: {statewise}} = response;
        let count = 0;
        const modifiedData = statewise.map((row) =>{
            count++;
            return {
                id: count,
                active: row.active, 
                confirmed: row.confirmed, 
                deaths: row.deaths, 
                lastupdatedtime: row.lastupdatedtime, 
                recovered: row.recovered, 
                state: row.state, 
                statenotes: row.statenotes
            }
        });
        return modifiedData;
    }catch(error){
        alert(`Error occured while fetching indian states data...
        ${error}`);
    }
}