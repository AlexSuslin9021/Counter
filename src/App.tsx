import React, {useState} from "react";
import "./App.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Tablo from "./Tablo/Tablo";


function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [value, setValue] = useState<number>(0)
    const [check, setCheck] = useState(false)
    const onClickInc = () => {
        setValue(value + 1)
    }
    const onClickReset = () => {
        setValue(startValue)
    }
    const onClickSet = () => {

        setValue(startValue)
        setCheck(true)
    }
    let a = '';
    if (startValue < maxValue) a = 'enter value and push "set"'
    if (startValue >= maxValue) a = 'Incorected value'
    const onChangeMaxValue = (e: string) => {

        setMaxValue(+e)
        setCheck(false)
    }
    const onChangeStartValue = (e: string) => {
        setStartValue(+e)
        setCheck(false)
    }

    return <div className={'App'}>


        <div className={'settings'}>
            <div className={'inputContainer'}>
                <div><Input name={'maxValue'} callback={onChangeMaxValue}/></div>
                <div><Input name={'startValue'} callback={onChangeStartValue}/></div>
            </div>
            <div className={'buttonContainer'}>
                <Button check={check} name={'set'} callback={onClickSet}></Button>
            </div>
        </div>


        <div className={'counter'}>

            {check ? <>
                    <div className={'tablo'}>
                        <Tablo value={value}/>
                    </div>
                    <div className={'buttons'}>
                        <Button check={value === maxValue} name={'inc'} callback={onClickInc}></Button>
                        <Button check={value !== maxValue} name={'reset'} callback={onClickReset}></Button>
                    </div>
                </>
                :
                <>
                <div className={'tablo'}>
                    <Tablo value={a}/>
                    </div>
                    <div className={'buttonContainer'} >
                        <Button check={true} name={'inc'} callback={onClickInc}></Button>
                        <Button check={true} name={'reset'} callback={onClickReset}></Button>
                    </div>
                </>
            }
        </div>
        {/*<div className={'window'}>*/}
        {/*    <Button  check={check} name={'inc'} callback={onClickInc}></Button>*/}
        {/*    <Button check={check} name={'reset'} callback={onClickReset}></Button>*/}
        {/*</div>*/}
    </div>

        ;
}

export default App;
