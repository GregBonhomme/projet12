import "../../styles/components/hexchart.css"
import { Radar, RadarChart,PolarGrid,PolarAngleAxis ,ResponsiveContainer } from "recharts"

function HexChart ({input}) {

    const formatTicks = ({ payload , x , y , cx , cy , ...rest}) => {
        
        let result = "" + input.kind[payload.value]
        let trad =""
        switch (result) {
            case "cardio":
                trad = "Cardio"
                break;
            case "energy":
                trad = "Energie"
                break;
            case "endurance":
                trad = "Endurance"
                break;
            case "strength":
                trad = "Force"
                break;
            case "speed":
                trad = "Vitesse"
                break;
            case "intensity":
                trad = "Intensité"
                break;
            default:
                break;
        }

        return(
            <text
            {...rest}
                y={y + (y - cy) / 10}
                x={x + (x - cx) / 10}
                fontSize={10}
            >
            {trad}
            </text>
        )
    }

    return (
        <ResponsiveContainer width="30%" className="hex_body" aspect={1}>
            <RadarChart cx="48%" cy="50%" outerRadius="80%" data={input.data} margin={{top:10,right:40,left:50,bottom:10}}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={formatTicks} tickLine={false} stroke="white"/>
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2"/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default HexChart