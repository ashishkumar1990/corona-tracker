import React,{useState,useEffect} from "react";
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './countryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker=({value,handleCountryChange})=>{
    let [fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries());
        };
        fetchApi();
    },[]);
    return (

       <FormControl className={styles.formControl}>
           {console.log(value)}
           <NativeSelect value={value} onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
};
export default CountryPicker;