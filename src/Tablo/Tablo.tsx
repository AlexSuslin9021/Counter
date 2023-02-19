import React, {FC} from "react";
import {Buttons} from "../Button/Button";
import s from './Tablo.module.css'
type TabloType = {
    buttonSet: () => void
    counter: number | string
    min: string
    max: string| null
}
export const Tablo: FC<TabloType> = (props) => {

    if (props.min === props.max || Number(props.max) < 0 || Number(props.min) < 0 || Number(props.min) > Number(props.max)) {
        return <div>
            <h3 className={s.red} > Number incorected</h3>
            {/*<Buttons name={'set'} callback={props.buttonSet} check={true}></Buttons>*/}
        </div>

    } else if (typeof props.counter==='number') {
    return <div>
            <h3 className={s.green}>{props.counter}</h3>
        </div>
} else{ return <div>
            <h3 className={s.green}>hello</h3>
            {/*<Buttons name={'set'} callback={props.buttonSet} check={false}></Buttons>*/}
        </div>}

}