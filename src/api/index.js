import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


async function fetchStateWiseData(url){
    return await axios.get(url);
    // return {provinceState,countryRegion,confirmed,recovered,deaths,active,combinedKey}
};

export const fetchData = async (country) => {
    let fetchUrl=url;
    if(country){
        fetchUrl=`${url}/countries/${country}`;
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(fetchUrl);
        let stateData = [];
        if(country){
            stateData= await fetchStateWiseData(recovered.detail);
        }
        return {confirmed, recovered, deaths, lastUpdate, stateData: stateData.data}
    }
    catch (error) {

    }

};
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        return data.map((dailyData)=>({
         confirmed:dailyData.confirmed.total,
         deaths:dailyData.deaths.total,
         date:dailyData.reportDate
     }));
    }
    catch (error) {

    }

};

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }
    catch (error) {

    }

};
export const fetchCountriesForNews = async () => {
    try {
        const {data} = await axios.get(`https://restcountries.eu/rest/v2/region/asia`);
        return data.map((country)=>{
            return{
                name:country.name,alpha2Code:country.alpha2Code,languages:country.languages,flag:country.flag
            };
        });
    }
    catch (error) {

    }

};

