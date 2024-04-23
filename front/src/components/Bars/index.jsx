import "../../styles/components/bars.css"
import { BarChart,Bar,Rectangle,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from "recharts";

function Bars ({input}) {

    const renderLegendText = (value) => {
        let category = ""
        switch (value) {
            case "kilogram":
                category = "Poids (kg)"
                break;
            
            case "calories":
                category = "Calories brulées (kCal)"
                break;
            default:
                break;
        }
        return <span>{category}</span>
    }

    const wrapperStyle = {
        top: "-30px",
        right: "50px",
    }

    const customTooltip = ({active,payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="bars_tooltip">
                    <p>{payload[0].value + " kg"}</p>
                    <p>{payload[1].value + " Kcal"}</p>
                </div>
            )
        }
    }

    return input && (
        <ResponsiveContainer className="bars_body" width="70%" height={320}>
            <h2>Activité quotidienne</h2>
            <BarChart data={input} margin={{top: 5,right: 30, left: 20, bottom: 5,}} barGap='10%'>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey={input.key} tickFormatter={(tick)=> tick +1} tickLine={false} tickMargin={15}/>
                <YAxis dataKey="kilogram" yAxisId={"kg"} type="number" scale={"sequential"} domain={['dataMin - 1','dataMax +1']} allowDecimals={false} orientation="right" axisLine={false} tickLine={false} tickMargin={20} tickCount={3}/>
                <YAxis dataKey="calories" yAxisId={"cal"} type="number" hide={true} domain={['dataMin - 50','dataMax + 50']}/>
                <Tooltip content={customTooltip}/>
                <Legend iconType="circle" formatter={renderLegendText} align="right" verticalAlign="top" wrapperStyle={wrapperStyle}/>
                <Bar dataKey="kilogram" yAxisId={"kg"} fill="#282D30" radius={[10,10,0,0]} barSize={9} activeBar={<Rectangle fill="#282D30" stroke="#282D30" />} />
                <Bar dataKey="calories" yAxisId={"cal"} fill="#E60000" radius={[10,10,0,0]} barSize={9} activeBar={<Rectangle fill="#E60000" stroke="#E60000" />} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Bars