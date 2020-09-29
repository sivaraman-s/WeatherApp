import React, { Component } from 'react'
import {Form,Input,Label,Col,FormGroup, Button} from 'reactstrap'

class  InputComponent extends Component {
    constructor(props){
        super()
        this.state={
            city:'',
            country:''
        }
        this.handleInput=this.handleInput.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleInput(event){
        let name=event.target.name
        let value=event.target.value
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        this.props.city(this.state.city)
        this.props.country(this.state.country)
        e.preventDefault()

    }

    render(){

        return(
            <div className="col-12">
                <Form onSubmit={this.handleSubmit } >

                    <FormGroup row>
                        <Label md={4} xl={2} for="city">CITY</Label> 
                        <Col md={7}>
                            <Input type="text" name="city" id="city" onChange={this.handleInput} placeholder="Enter A Valid City Name"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={4} xl={2} for="country">COUNTRY</Label> 
                        <Col md={7}>
                            <Input type="text" name="country" id="country" onChange={this.handleInput} placeholder="Enter A Valid Country Name"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={{offset:4}} xl={{offset:2}}>
                            <Button color="primary" type="submit">Find Weather</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            
        )
    
}
}

export default InputComponent