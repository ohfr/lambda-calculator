import React, {useState} from "react";

//import any components needed
import { specials } from '../../../data';
//Import your array data to from the provided data file
import { SpecialButton } from './SpecialButton';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState ] = useState(specials);
  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map((item, index)=> {
         return <SpecialButton specialsChange={props.specialsChange} key={index}special={item}/>
       })}
    </div>
  );
};
export default Specials;
