import React from 'react';
import s from './Button.module.css'
type ButtonType={
    name:string
    callback:()=>void
    check:boolean
}
const Button = (props:ButtonType) => {
    const onClickHandler=()=>{
props.callback()
    }
    return (

        <div>
            <button className={s.button} disabled={props.check} onClick={onClickHandler}> {props.name}</button>
        </div>
    );
};

export default Button;