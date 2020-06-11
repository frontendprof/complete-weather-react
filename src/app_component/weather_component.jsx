import React from 'react'

const Weather=(props)=> {
    return (

        <div>
            <div className="container pt-5">
                <div className="cards">
                    <h1>Weather in {props.city}, {props.country}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${props.weatherIcon} display-1`}></i>
                    </h5>
                    <h1 className="py-2">{props.temp_celsius}&deg;</h1>



                    <h4 className='py-4'>{props.description}</h4>

                </div>
            </div>
            
        </div>
    );
}



export default Weather;