import React from 'react';
import Weather from "./app_component/weather_component";

import "bootstrap/dist/css/bootstrap.min.css";
import 'weather-icons/css/weather-icons.css';


import './App.css';

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY="b6cf9d3ea1693c4c05ed173fa6233f84";




class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {  
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      desc:"",
      error:false
    };
    this.getWeather();
  }

    getCelsius(temp){
      let cels=Math.floor(temp-273,15);
      return cels
    }


    getWeather=async ()=>{
      const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Termiz,Uz&appid=${API_KEY}`);

      const response = await api_call.json();

      console.log(response);    

      this.setState({
        city:response.name,
        country:response.sys.country,
        celsius:this.getCelsius(response.main.temp),
        temp_min:this.getCelsius(response.main.temp_min),
        temp_max:this.getCelsius(response.main.temp_max),
        desc:response.weather[0].description
      })

    
  }
  



  render() {
    return (
      <div>
        <div className="App">
          <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.desc}
          weatherIcon={this.state.icon}
          />
    
        </div>
            
      </div>
    );
  }
}


export default App;
