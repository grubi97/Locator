import {React,useEffect,useState} from 'react'
import {Container,Table} from 'react-bootstrap'
import axios from 'axios'
function About()
{
    const [sensors,setSensors] = useState({
      sensorArray:[],
      loaded:false
      })
    useEffect((()=>{
      if(!sensors.loaded)
        axios.get("/api/sensor")
            .then(response=>{
                setSensors({sensorArray:response.data,loaded:true})
            })
            .catch((error)=>{
                console.log(error)
            })
    }))

    return(
      <Container className="mt-4">
        <Table hover >
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {sensors.sensorArray.map(sensor=>{return(
              <tr>
                <td>{sensor.name}</td>
                <td>{sensor.location}</td>
                <td>{sensor.latitude}</td>
                <td>{sensor.longitude}</td>
              </tr>
            )})}
          </tbody>
        </Table>
      </Container>
    )

}
export default About;