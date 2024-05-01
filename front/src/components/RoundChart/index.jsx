import "../../styles/components/roundchart.css"
import { RadialBarChart , RadialBar , ResponsiveContainer , PolarAngleAxis } from "recharts"
import { useRef } from "react"

function RoundChart ({input}) {
    let achievement = (input.score)*100
    let tab = [{score:achievement,fill:"red"}]
    const windowWidth = useRef(window.innerWidth).current

    return (
        <ResponsiveContainer className="round_body" width="33%" aspect={1}>
            <span className="round_title">Score</span>
            <RadialBarChart innerRadius={(windowWidth>1024) ? "70%" : "60%"} outerRadius="100%" barSize={(windowWidth>1024) ? 15 : 8} data={tab} startAngle={90} endAngle={450}>
                <PolarAngleAxis type="number" domain={[0, 100]} dataKey="score" angleAxisId={0} tick={false}/>
                <RadialBar minAngle={15} clockWise={true} dataKey="score" angleAxisId={0} cornerRadius={60}/>
                <circle cx="50%" cy="50%" r={(windowWidth>1024) ? "33%" : "26%"} />
                    <text className="round_label_text" x="50%" y="50%" textAnchor="middle">
                        <tspan className="round_achievement" dy={(windowWidth>1024) ? -16 : -12}>{achievement}%</tspan>
                        <tspan className="round_text_filler" dx={(windowWidth>1024) ? -58 : -40} dy={(windowWidth>1024) ? 22 : 18}>de votre</tspan>
                        <tspan className="round_text_filler" dx={(windowWidth>1024) ? -62 : -41} dy={(windowWidth>1024) ? 22 : 18}>objectif</tspan>
                    </text>
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default RoundChart