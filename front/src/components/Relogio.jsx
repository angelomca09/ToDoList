import React, { useState, useEffect } from 'react'

export default props => {

    const [tempo, setTempo] = useState("teste");
    const horarioDeVerao = -1;

    const format = (num) => {
        return num.toString().length < 2
            ? `0${num}`
            : num
    }

    const HourFormat = (hour) => {
        return hour === 0
            ? 23
            : hour + horarioDeVerao
    }

    useEffect(() => {
        let intervalo = setInterval(() => {
            let time = new Date()
            let hours = format(HourFormat(time.getHours()))
            let minutes = format(time.getMinutes())
            let seconds = format(time.getSeconds())
            setTempo(`${hours}:${minutes}:${seconds}`)
        }, 1000)
        return () => clearInterval(intervalo)
    })

    return (
        <>
            <div>{tempo}</div>
        </>
    );
}