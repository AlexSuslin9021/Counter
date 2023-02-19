import React, {ChangeEvent, useEffect, useState} from "react";

import "./App.css";
import {Buttons} from "./Button/Button";
import {Tablo} from "./Tablo/Tablo";
import Input from "./Input/Inpyt";
import {Container, Grid} from "@mui/material";

// import {AppBar} from "@mui/material";

function App() {
    let [counter, setCounter] = useState<number | string>('')
    let [max, setMax] = useState<string >('')
    let [min, setMin] = useState<string>('')
    let [check, setCheck] = useState<boolean>(false)

    // useEffect(()=>{
    //     // localStorage.setItem('number', JSON.stringify(counter))
    //     // localStorage.setItem('maxValue', JSON.stringify(max))
    //     localStorage.setItem('minValue', JSON.stringify(min))
    // },[ min])

    // useEffect(()=>{
    //    let valueString= localStorage.getItem('counterValue')
    //    let maxString= localStorage.getItem('maxValue')
    //    let minString= localStorage.getItem('minValue')
    //     if(valueString) {let a= JSON.parse(valueString)
    //     setCounter(a)
    //     }
    //    else if( maxString){
    //         let v=JSON.parse(maxString)
    //       setMax(v)}
    //
    //     else if(minString){let c= JSON.parse(minString)
    //         setMin(c)
    //     }
    // },[])
    useEffect(() => {
        let valueString = localStorage.getItem('number')
        let maxString= localStorage.getItem('maxValue')
        let minString= localStorage.getItem('minValue')
        if (valueString) {
            let c = JSON.parse(valueString)
            setCounter(c)
        }  if(maxString){
            let v=JSON.parse(maxString)
                  setMax(v)
        }  if(minString){
            let v=JSON.parse(minString)
            setMin(v)
        }
    },[])


    useEffect(() => {
        localStorage.setItem('number', JSON.stringify(counter))
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))

    }, [counter, max, min])

    const buttonHandler = () => {
        setCounter(Number(counter) + 1)
    }
    const buttonDec = () => {
        setCounter(Number(min))
    }
    const buttonSet = () => {
        setCounter(Number(min))
    }

    return <div className={'App'}>
        <div className={'counter'}>
            <Tablo buttonSet={buttonSet}
                   counter={counter}
                   min={min}
                   max={max}
            />
            <div className={'buttonIncDec'}>
                <Buttons name={'inc'}
                         callback={buttonHandler}
                         check={Number(max) <= counter ? !check : check}
                ></Buttons>
                <Buttons name={'dec'}
                         callback={buttonDec}
                         check={counter===Number(max) ? check : !check}


                ></Buttons>
            </div>

        </div>
        <div className={'setup'}>

            <Input value={max}
                   name={'MaxValue'}
                   setFunc={setMax}/>
            <Input value={min}
                   name={'StartValue'}
                   setFunc={setMin}/>
            <Buttons name={'set'} callback={buttonSet} check={Number(max) <= Number(min) ? !check : check}></Buttons>
        </div>


    </div>;
}

export default App;
