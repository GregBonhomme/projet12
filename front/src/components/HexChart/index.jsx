import "../../styles/components/hexchart.css"
import { Radar, RadarChart,PolarGrid,PolarAngleAxis ,ResponsiveContainer } from "recharts"

function HexChart ({input}) {

    const formatTicks = ({ payload , x , y , cx , cy , ...rest}) => {
        
        let result = "" + input.kind[payload.value]
        result = result[0].toUpperCase() + result.slice(1)

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
        <ResponsiveContainer className="hex_body" width="33%" aspect={1}>
            <RadarChart cx="48%" cy="50%" outerRadius="80%" data={input.data} margin={{top:10,right:40,left:40,bottom:10}}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={formatTicks} tickLine={false} stroke="white"/>
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2"/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default HexChart