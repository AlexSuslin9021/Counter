import React, {ChangeEvent} from 'react';
type InputType={
    callback:(e:string)=>void
    name:string
}
const Input = (props:InputType) => {
    const onClickInput=(e:ChangeEvent<HTMLInputElement>)=>{
        props.callback(e.currentTarget.value)
    }
    return (
        <>
          <span>{props.name}</span>  <input onChange={onClickInput} type="number"/>
        </>
    );
};

export default Input;