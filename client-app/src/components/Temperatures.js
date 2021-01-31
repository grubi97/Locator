import {Line} from 'react-chartjs-2'
function Temperatures(props)
{
  return(
    <Line
      data={{
        datasets:props.readings
      }}
      height={400}
      width={1200}
      options={{
        responsive:false,
        maintainAspectRatio:false,
        elements:{
          point:{
            radius:0,
            hitRadius:0
          }
        },
        tooltips:{
          enabled:false
        },
        title:{
          display:true,
          text:"Temperatures graph",
          fontSize:"18"
        },
        scales:{
          xAxes:[
            {
              scaleLabel:{
                display:true,
                labelString:"Time"
              },
              type:'time',
              ticks:{
                min:props.start,
                max:props.end,
                maxTicksLimit:10,
              },
              time:{
                displayFormats:{
                  hour:'D.M.YYYY h:mm a'
                }
              }
            }
          ],
          yAxes:[
            {
              scaleLabel:{
                display:true,
                labelString:"Temperature"
              }
            }
          ]
        }
      }}
    />
  )
}

export default Temperatures;