import "../../styles/components/roundchart.css"
import { RadialBarChart , RadialBar , ResponsiveContainer , PolarAngleAxis } from "recharts"

function RoundChart ({input}) {
    let achievement = (input.score)*100
    let tab = [{score:achievement,fill:"red"}]

    return (
        <ResponsiveContainer className="round_body" width="33%" aspect={1}>
            <span className="round_title">Score</span>
            <RadialBarChart innerRadius="70%" outerRadius="100%" barSize={15} data={tab} startAngle={90} endAngle={450}>
                <PolarAngleAxis type="number" domain={[0, 100]} dataKey="score" angleAxisId={0} tick={false}/>
                <RadialBar minAngle={15} clockWise={true} dataKey="score" angleAxisId={0} cornerRadius={60}/>
                <circle cx="50%" cy="50%" r="32%" />
                    <text className="round_label_text" x="50%" y="50%" textAnchor="middle">
                        <tspan className="round_achievement" dy={-16}>{achievement}%</tspan>
                        <tspan className="round_text_filler" dx={-58} dy={22}>de votre</tspan>
                        <tspan className="round_text_filler" dx={-62} dy={22}>objectif</tspan>
                    </text>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default RoundChart