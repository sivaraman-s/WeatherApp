import React,{Component} from 'react'
import {Card,CardBody,CardText,CardTitle} from 'reactstrap'

class WeatherComponent extends Component{  

    constructor(props){
        super()
        this.state={
            temp:'',
            humidity:'',
            main:'',
            desc:'',
            feels_like:''
        }
    }

    componentDidMount(){

        const MyKey = process.env.REACT_APP_WEATHER_API_KEY;

        let city = this.props.city

        let country = this.props.country
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID='+MyKey+'&units=metric')
            .then((res) =>{
                if(res.ok===true){
                    return  res.json()
                }
                else{
                    throw new Error("Please Enter Valid City/Country Name")
                }
            })

            .then( (result) => {
                console.log(result)

                    this.setState({
                        temp:result.main.temp,
                        humidity:result.main.humidity,
                        main:result.weather[0].main,
                        desc:result.weather[0].description,
                        feels_like:result.main.feels_like

                    })

            }
        )
    }

    render(){

    return(
        <>
                <CardBody>
                    <CardText>{ this.state.temp ? <h2> <span className="fa fa-star "></span> Temperatue is {this.state.temp}° Celsius</h2> : null }</CardText>
                    <CardText>{ this.state.feels_like ? <h2> <span className="fa fa-star"></span> Feels Like {this.state.feels_like}° Celsius</h2> : null }</CardText>
                    <CardText>{ this.state.humidity ? <h2> <span className="fa fa-star"></span> Humidity is {this.state.humidity} % </h2> : null }</CardText>
                    <CardText>{ this.state.main ? <h2> <span className="fa fa-star "></span> Condition     : {this.state.main}</h2> : null }</CardText>
                    <CardText>{ this.state.desc ? <h2> <span className="fa fa-star"></span> Description : {this.state.desc}</h2> : null } </CardText>
                </CardBody>
           
        </>
       
    )
}

}

export default WeatherComponent