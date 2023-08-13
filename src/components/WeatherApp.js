import React, { useEffect } from 'react'
import './style.css'
import { useState } from 'react';

const WeatherApp = () => {

    const [city, setCity] = useState();
    const [search, setSearch] = useState("Bangalore");



    useEffect(() => {
        const fetchApi = async () => {
            // const url=`https://api.weatherapi.com/v1/current.json?key=b5939380155d40e892570523231008&q=${search}&aqi=no`
            // const url='https://api.openweathermap.org/data/2.5/weather?q=${search}%20&appid=b59374de9d1f86935a6cb99c7ea57bd3'

            const url = `/weatherInfo?place=${search}`;
            const response = await fetch(url);
            const result = await response.json();
            setCity(result.current);

        };
        fetchApi();


        // fetch(url).then(
        //     res => res.json()
        // ).then( result => console.log(result.current.temp_c))

    }, [search]);

    return (
        <>
            <div className='main-div'>
                <div className='sub-main'>
                    <h1 className='heading'>Weather App</h1>

                    <input type='search' placeholder='Enter the city Name' className='input' onChange={(event) => {
                        setSearch(event.target.value);
                    }} />

                    {
                        !city ? (
                            <p className='error-text'>No data found</p>
                        ) : (
                            <div>
                                <h2 className='location'><i className="fa fa-street-view" aria-hidden="true"></i> {search}</h2>
                                <h1 className='temp'> {city.temp_c} °C    </h1>
                                <h3 className='temp'>{city.condition.text} </h3>
                            </div>

                        )
                    }


                </div>
            </div>




        </>
    )
}

export default WeatherApp