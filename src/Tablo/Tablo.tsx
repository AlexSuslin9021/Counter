import React from 'react';

type PropsType={
    value: string | number
}
const Tablo = (props:PropsType) => {
    return (

            <span >  {props.value} </span>

    );
};

export default Tablo;