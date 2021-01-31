import {React,useState,useEffect} from 'react'
import Temperatures from './Temperatures'
import Pressure from './Pressure'
import axios from 'axios'
function Graphs()
{
    const [startDate,setStartDate] = useState(Date.now()-24*60*60*1000)
    const [endDate,setEndDate] = useState(Date.now())
    const [loaded,setLoaded]=useState({loaded:false,formatedTemperatures:[]})

    useEffect(()=>{
        if(!loaded.loaded)
        {
            axios.get("http://localhost:5000/apI/sensor")
                .then(response=>{
                    let dataSample=response.data
                    let formatedTemperatures=[]
                    let formatedPressure=[]
                    dataSample.forEach((sensor)=>{
                        let readingsTemperatures=[]
                        let readingsPressure=[]
                        sensor.readings.map((reading)=>{
                            readingsTemperatures.push({
                                x:reading.date,
                                y:reading.temperature,
                            })
                            readingsPressure.push({
                                x:reading.date,
                                y:reading.pressure,
                            })
                        })
                        let value1=Math.random()*256
                        let value2=Math.random()*256
                        let value3=Math.random()*256
                        formatedTemperatures.push(
                            {
                                label:sensor.name,
                                data:readingsTemperatures,
                                backgroundColor:`rgba(${value1},${value2},${value3},0.4)`
                            }
                        )
                        formatedPressure.push(
                            {
                                label:sensor.name,
                                data:readingsPressure,
                                backgroundColor:`rgba(${value1},${value2},${value3},0.4)`
                            }
                        )
                    })
                    setLoaded({loaded:true,formatedTemperatures:formatedTemperatures,formatedPressure:formatedPressure})
                })
                .catch((error)=>{
                    console.log(error)
                })

        }
    })

    const handleStartDate=event=>{
        setStartDate(event.target.value)
    }
    const handleEndDate=event=>{
        setEndDate(event.target.value)
    }
    if(loaded)
        return(

            <div className="mt-4 ml-4">
                <div className="mb-3">
                    <label htmlFor="startDate">Start date</label>
                    <input id="startDate" type="datetime-local" value={startDate} onChange={handleStartDate}></input>
                    <label htmlFor="startDate" className="ml-3">End date</label>
                    <input id="startDate" type="datetime-local"   onChange={handleEndDate}></input>
                </div>
                <div style={{overflowX:"scroll"}}>
                <Temperatures readings={loaded.formatedTemperatures} start={startDate} end={endDate}/>
                <Pressure readings={loaded.formatedPressure} start={startDate} end={endDate}/>
                </div>
            </div>
        )
    return (<div></div>)
}

export default Graphs;