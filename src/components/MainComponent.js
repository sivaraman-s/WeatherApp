import React, { Component } from 'react'
import InputComponent from './InputComponent'
import WeatherComponent from './WeatherComponent'
import {Card} from 'reactstrap'

class MainComponent extends Component{

    constructor(props){
        super()
        this.state={
            city:'',
            country:'',
            cityMessage:'',
            countryMessage:''
            
        }

        this.cityValue=this.cityValue.bind(this)
        this.countryValue=this.countryValue.bind(this)

    }

    cityValue(city){
        if(city){
            this.setState({
                city:city,
                cityMessage:''

            })
        }
        else{
            this.setState({
                cityMessage:"NotEntered"
            })
        }
        
    }

    countryValue(country){
        if(country){
            this.setState({
                country:country,
                countryMessage:''
            })
        }
        else{
            this.setState({
                countryMessage:"NotEntered"
            })
        }
    }
    render(){
        return(
            <div className="container" style={{paddingBottom:"250px"}}> 
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h1 style={{fontWeight:"800",fontSize:"80px"}}>WEATHER APP</h1>
                    </div>
                </div>
                <Card style={{fontWeight:"900",fontSize:"29px"}} className="card-content">
                    <div className="row text-content" >
                        <InputComponent city={this.cityValue} country={this.countryValue} />
                    </div>
                    <div className="row text-content ">
                        <div className="col-12 col-md-8 offset-md-4 col-xl-10 offset-xl-2">
                            {this.state.cityMessage ? <h3>Please Enter City Name</h3> : null}
                            {this.state.countryMessage ? <h3>Please Enter Country Name</h3> : null}
                            {this.state.city && this.state.country ? <WeatherComponent city={this.state.city} country={this.state.country} /> : null }
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
    
    
}

export default MainComponent