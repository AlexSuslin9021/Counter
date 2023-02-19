import React, {FC} from 'react';
import {Buttons} from "../Button/Button";
import TextField from '@mui/material/TextField';

type InpytType = {
    value: string| null
    name: string
    setFunc: (e: string) => void

}
const Input: FC<InpytType> = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            {/*<input value={props.value}*/}
            {/*       onChange={(e) => {props.setFunc(e.currentTarget.value)}} type="number"/>*/}
            <TextField id="outlined-basic" variant="outlined"
                       value={props.value}
                       onChange={(e) => {
                           props.setFunc(e.currentTarget.value)
                       }}
                       type="number"
                       size={"small"}
                     
            />
        </div>
    );
};
export default Input;