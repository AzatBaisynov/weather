import React, {useState} from "react";
import axios from "axios";
import Block from "./Block";
import Loader from "./Loader";

const MainPage = () => {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const handleInput = (e) => {
        setCity(e.target.value)
    }

    const getWeather = async () => {
        setIsLoaded(true)
        setWeather({})
        try {
            const {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c9081e4fb8cf6d47223ed7f7dfca4c0`)
            setWeather(data)
            console.log(data)
            setIsLoaded(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__form">
                    <input onInput={handleInput} type="text" className="weather__city" placeholder="Бишкек"/>
                    <button onClick={getWeather} className="weather__btn">Check</button>
                </div>
                {
                    isLoaded && <Loader />
                }
                <Block weather={weather} />
            </div>
        </section>
    )
}

export default MainPage