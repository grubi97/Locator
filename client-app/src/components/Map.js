import React, { useEffect,useState } from 'react'
import {Container} from 'react-bootstrap'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import icon from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet';
function Map()
{
    let replacementMarker = L.icon({
        iconUrl: icon,
        iconSize: [25,41],
        iconAnchor: [12,41],
        popupAnchor: [0, -26]
    });
    
    L.Marker.prototype.options.icon = replacementMarker;
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

    if(sensors.loaded)
    return(
        <Container className="mt-4">
        <h2>Map displaying sensors</h2>
        <p>This map shows all the sensors currently sending data to the database.</p>
        <div>
            <MapContainer style={{height:"50vh",width:"50vw" }} center={[45.509,16.776]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {sensors.sensorArray.map((sensor)=>{ return(
                <Marker position={[sensor.latitude, sensor.longitude]}>
                    <Popup>
                        {sensor.name}
                    </Popup>
                </Marker>)
                })}
            </MapContainer>
        </div>
        </Container>
    )
    return (<div></div>)

}

export default Map;