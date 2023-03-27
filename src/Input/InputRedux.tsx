import React, {ChangeEvent} from 'react';
import s from './Input.module.css'
type InputType={
    callback:(e:string)=>void
    name:string
}
const Input = (props:InputType) => {
    const onClickInput=(e:ChangeEvent<HTMLInputElement>)=>{
        props.callback(e.currentTarget.value)
    }
    return (
        <div className={s.blockSetting}>
          <span className={s.span}>{props.name}</span>  <input onChange={onClickInput} type="number"/>
        </div>
    );
};

export default Input;