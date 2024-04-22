import "../../styles/components/radchart.css"
import { Radar, RadarChart,PolarGrid,PolarAngleAxis ,ResponsiveContainer } from "recharts"

function RadChart ({input}) {

    const formatTicks = ({ payload , x , y , cx , cy , ...rest}) => {
        
        let result = "" + input.kind[payload.value]
        result = result[0].toUpperCase() + result.slice(1)
        console.log(result)

        return(
            <text
            {...rest}
                y={y + (y - cy) / 10}
                x={x + (x - cx) / 10}
                fontSize={10}
            >
            {result}
            </text>
        )
    }

    return (
        <ResponsiveContainer className="rad_body" width="30%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={input.data} margin={{top:10,right:40,left:40,bottom:10}}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={formatTicks} tickLine={false} stroke="white"/>
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2"/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadChart