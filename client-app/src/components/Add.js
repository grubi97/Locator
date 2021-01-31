import {React,useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import axios from 'axios'
function Add()
{
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [location,setLocation] = useState("")
    const [latitude,setLatitude] = useState("")
    const [longitude,setLongitude] = useState("")
    let historyHook=useHistory();
    const submit=event=>
    {
        event.preventDefault()
        axios.post("/api/sensor",{
            "latitude":latitude,
            "longitude":longitude,
            "password":password,
            "name":name,
            "location":location
        })
        historyHook.push("/")
    }
    const handleChange=event=>
    {
        if(event.target.name==="name")setName(event.target.value)
        if(event.target.name==="password")setPassword(event.target.value)
        if(event.target.name==="location")setLocation(event.target.value)
        if(event.target.name==="latitude")setLatitude(event.target.value)
        if(event.target.name==="longitude")setLongitude(event.target.value)
    }
    return(

        <Container className="mt-4">
            <h2>Add a new sensor</h2>
            <Form className="mt-4" onSubmit={submit}>
                <Form.Label>Name</Form.Label>
                <Form.Control name ="name" type="text" onChange={handleChange} value ={name} placeholder="Sensors name" />
                <Form.Label>Password</Form.Label>
                <Form.Control name ="password" type="text" onChange={handleChange} value ={password} placeholder="Password used to send sensor data" />
                <Form.Label>Location</Form.Label>
                <Form.Control name ="location" type="text" onChange={handleChange} value ={location} placeholder="Sensors location" />
                <Form.Label>Latitude</Form.Label>
                <Form.Control name ="latitude" type="number" onChange={handleChange} value ={latitude} placeholder="Location latitude" />
                <Form.Label>Longitude</Form.Label>
                <Form.Control name ="longitude" type="number" onChange={handleChange} value ={longitude} placeholder="Location Longitude" />
                <Button className="mt-3" variant="primary" type="submit">Create</Button>
            </Form>
        </Container>
    )

}

export default Add;