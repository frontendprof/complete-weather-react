import React from 'react';
import Weather from "./app_component/weather_component";
import Form from "./app_component/form_component";

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
      desc:"",
      error:false
    };
  }

    getCelsius(temp){
      let cels=Math.floor(temp-273,15);
      return cels
    }


    getWeather=async (e)=>{
      e.preventDefault();

      const city=e.target.elements.city.value;
      const country=e.target.elements.country.value;

      if(city&&country){
        const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

        const response = await api_call.json();

        console.log(response);    

        this.setState({
          city:response.name,
          country:response.sys.country,
          celsius:this.getCelsius(response.main.temp),
          desc:response.weather[0].description
        })

      }else{
        this.setState({error:true})
      }

      

    
  }
  



  render() {
    return (
      <div>
        <div className="App">
          <Form loadWeather={this.getWeather}/>
          <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp_celsius={this.state.celsius}
          description={this.state.desc}
          weatherIcon={this.state.icon}
          />
    
        </div>
            
      </div>
    );
  }
}


export default App;
