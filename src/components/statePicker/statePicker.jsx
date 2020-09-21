import React from "react";
import {FormControl, NativeSelect} from "@material-ui/core";
import styles from "./statePicker.module.css";


const StatePicker=({value, options, handleStateChange})=>{
    console.log('options', options);
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect value={value} onChange={(e)=>handleStateChange(e.target.value)}>
               <option value=''>Select State</option>
               {options && options.map((state,i)=><option key={i} value={state}>{state}</option>)}
           </NativeSelect>
       </FormControl>
    )
};
export default StatePicker;