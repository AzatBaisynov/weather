import React from "react";
import Loader from "./Loader";

const Block = ({ weather }) => {

    const getCurrentTime = () => {
        const dateObj = new Date()
        const hh = dateObj.getHours()
        const mm = dateObj.getMinutes()
        return `${hh}:${mm}`
    }

    const temperatureCalculator = (temp) => {
        if (temp) {
            const result = (temp - 273.15).toFixed(2)
            if (result > 0) {
                return `+${result}`
            } else if (result === 0) {
                return "0"
            } else {
                return `-${result}`
            }
        }
        return "unknown"
    }

    if (weather.name) {
        return (
            <div className="block">
                <div className="block__content">
                    <h2 className="block__city">{`${weather.sys.country}, ${weather.name}`}</h2>
                    <p className="block__time">Now {getCurrentTime()}</p>
                    <div className="d-flex align-center">
                        <h2 className="block__deg">{temperatureCalculator(weather.main.temp)}</h2>
                        <div className="block__img">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                        </div>
                        <div>
                            <p className="block__desc">{weather.weather[0].description}</p>
                            <p className="block__desc">Feels like {temperatureCalculator(weather.main.feels_like)}</p>
                        </div>
                    </div>
                    {/*<img src="" alt=""/>*/}
                    <div className="block__info">
                        <p className="block__index">{weather.wind.speed} м/с</p>
                        <p className="block__index">{weather.main.humidity}%</p>
                        <p className="block__index">{weather.main.pressure} мм рт. ст.</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Block