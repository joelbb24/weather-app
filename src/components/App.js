import React from 'react'
import './App.css';
import weather from '../apis/api'
import WeatherBody from './WeatherBody/WeatherBody'
import Loader from './Loader/Loader'
import SearchBar from './SearchBar/SearchBar'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: [],
            city: null,
            IsLoaded: false
        };
    }

    componentDidMount() {
        this.setState({IsLoaded: true});
    }

    searchCity = async city => {
        await weather.get(`?q=${city}&appid=361b22d5a2953811334f496d7ae9bfc2`).then(res => {
            const temp = res.data.list;
            const city = res.data.city.name; 

            this.setState({
                temp,
                city,
                IsLoaded: true,
            });
        });
    };


    render () {
        
        const currTemp = this.state.temp.map( e1 => {
            return (parseInt(e1.main.feels_like) - 273.15).toFixed(2);
        });


        const minTemp = this.state.temp.map( e1 => {
            return (parseInt(e1.main.temp_min) - 273.15).toFixed(2);
        });

        const maxTemp = this.state.temp.map(e1 => {
            return (parseInt(e1.main.temp_max) - 273.15).toFixed(2);
        });

        const icon = this.state.temp.map(e1 => {
            return e1.weather[0].id;
        });

        const description = this.state.temp.map(e1 => {
            return e1.weather[0].description;
        });

        if(!this.state.IsLoaded) {
            return <Loader msg={'Loading...'} />
        }
    
    


        return (
            <div className = "App">
                <React.Fragment>
                    <SearchBar city={this.state.city} searchCity={this.searchCity} />
                </React.Fragment>
                <div className = "weatherContainer pt-3 pb-3">
                    <h5 className="cityName">{this.state.city} </h5>
                    <WeatherBody day = {'Mon'} icon = {icon[0]} currTemp = {currTemp[0]} minTemp = {minTemp[0]} maxTemp = {maxTemp[0]} description= {description[0]}/>
                    <WeatherBody day = {'Tue'} icon = {icon[1]} currTemp = {currTemp[1]} minTemp = {minTemp[1]} maxTemp = {maxTemp[1]} description= {description[1]}/>
                    <WeatherBody day = {'Wed'} icon = {icon[2]} currTemp = {currTemp[2]} minTemp = {minTemp[2]} maxTemp = {maxTemp[2]} description= {description[2]}/>
                    <WeatherBody day = {'Thu'} icon = {icon[3]} currTemp = {currTemp[3]} minTemp = {minTemp[3]} maxTemp = {maxTemp[3]} description= {description[3]}/>
                    <WeatherBody day = {'Fri'} icon = {icon[4]} currTemp = {currTemp[4]} minTemp = {minTemp[4]} maxTemp = {maxTemp[4]} description= {description[4]}/>
                </div>
            </div>
        );
    }
}

export default App;