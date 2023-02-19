import React, {FC} from 'react';
import Button from '@mui/material/Button';

type ButtonType = {
    name: string
    callback: () => void
    check: boolean
}
export const Buttons: FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <>
            <Button disabled={props.check} variant="outlined" onClick={onClickHandler}>{props.name}</Button>
            {/*<button disabled={props.check} onClick={onClickHandler}>{props.name} </button>*/}
        </>
    );
};

