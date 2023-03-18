import React from 'react';
import s from './Input.module.css'

type PropsType={
    value: string | number
    check:boolean
}
const Tablo = (props:PropsType) => {
    return (

            <span className={props.value==='Incorected value' ? s.red :s.green}>  {props.value} </span>

    );
};

export default Tablo;