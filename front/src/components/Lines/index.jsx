import "../../styles/components/lines.css"
import { LineChart, Line , XAxis , YAxis , Tooltip ,ResponsiveContainer, Customized} from "recharts";

function Lines ({input}) {

    const formatTicks = (tick) => {
        switch (tick) {
            case 1:
                return "L"
            case 2:
                return "M"
            case 3:
                return "M"
            case 4:
                return "J"
            case 5:
                return "V"
            case 6:
                return "S"
            case 7:
                return "D"
            default:
                break;
        }
    }

    const customTooltip = ({active , payload}) => {
        if (active && payload && payload.length) {
            console.log(payload)
            return (
                <div className="lines_tooltip">
                    <p>{payload[0].value + " min"}</p>
                </div>
            )
        }
    }

    return input && (
        <ResponsiveContainer className="lines_body" width="22%" aspect={1}>
            <span className="lines_title">Durée moyenne des sessions</span>
            <LineChart data={input} margin={{top:60,right:10,left:10,bottom:50}}>
                <defs>
                    <linearGradient id="fading" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="white" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="white" opacity={0.7} tickFormatter={formatTicks} interval={"preserveStartEnd"} padding={{left:10, right:10}} axisLine={false} tickLine={false} tickMargin={45}/>
                <YAxis dataKey="sessionLength" hide={true}/>
                <Tooltip content={customTooltip} cursor={false}/>
                <Line type="natural" dataKey="sessionLength" stroke="url(#fading)" strokeWidth={3} dot={false} activeDot={{fill:'white',strokeWidth:2,r:5,}}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Lines