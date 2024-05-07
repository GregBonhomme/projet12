import "../../styles/components/roundchart.css"
import { RadialBarChart , RadialBar , ResponsiveContainer , PolarAngleAxis } from "recharts"

function RoundChart ({input}) {
    let achievement = (input.score)*100
    let tab = [{score:achievement,fill:"red"}]

    return (
        <ResponsiveContainer width="30%" className="round_body" aspect={1}>
            <span className="round_title">Score</span>
            <div className="round_label_text">
                <span className="round_achievement">{achievement}%</span>
                <span className="round_text_filler">de votre <br /> objectif</span>
            </div>
            <RadialBarChart innerRadius={"70%"} outerRadius="100%" barSize={12} data={tab} startAngle={90} endAngle={450}>
                <PolarAngleAxis type="number" domain={[0, 100]} dataKey="score" angleAxisId={0} tick={false}/>
                <RadialBar minAngle={15} clockWise={true} dataKey="score" angleAxisId={0} cornerRadius={60}/>
                <circle cx="50%" cy="50%" r={"30%"} />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default RoundChart